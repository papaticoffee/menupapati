const MAX_ORDER_ITEMS = 30;

function respond(res, status, body) {
  res.status(status).json(body);
}

function cleanText(value) {
  if (typeof value !== "string") {
    return "";
  }
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").trim();
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return respond(res, 405, { error: "Method not allowed." });
  }

  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return respond(res, 400, { error: "Invalid order." });
  }

  if (cleanText(body.website)) {
    return respond(res, 202, { ok: true });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId || !/^\d+:[A-Za-z0-9_-]+$/.test(token) || !/^-?\d+$/.test(chatId)) {
    console.error("Telegram order delivery is missing valid server configuration.");
    return respond(res, 503, { error: "Order service is not configured." });
  }

  const customerName = cleanText(body.customerName);
  const customerPhone = cleanText(body.customerPhone);
  const notes = cleanText(body.notes);
  const phoneDigits = customerPhone.replace(/\D/g, "");

  if (!customerName || customerName.length > 80 || customerPhone.length > 24 || !/^[+0-9() -]{6,24}$/.test(customerPhone) || phoneDigits.length < 6 || notes.length > 500) {
    return respond(res, 400, { error: "Please check your name and phone number." });
  }

  if (!Array.isArray(body.items) || body.items.length === 0 || body.items.length > MAX_ORDER_ITEMS) {
    return respond(res, 400, { error: "Invalid order items." });
  }

  const items = [];
  for (const item of body.items) {
    const name = cleanText(item && item.name);
    const quantity = item && item.quantity;
    if (!name || name.length > 80 || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      return respond(res, 400, { error: "Invalid order items." });
    }
    items.push(`• ${name} × ${quantity}`);
  }

  const message = [
    "طلب جديد - PAPATI",
    "",
    `الاسم: ${customerName}`,
    `الهاتف: ${customerPhone}`,
    "",
    "الطلب:",
    ...items,
    ...(notes ? ["", `ملاحظات: ${notes}`] : []),
  ].join("\n");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message }),
      signal: controller.signal,
    });
    const telegramResult = await telegramResponse.json();
    if (!telegramResponse.ok || !telegramResult.ok) {
      throw new Error("Telegram rejected the order message.");
    }
    return respond(res, 200, { ok: true });
  } catch (error) {
    console.error("Telegram order delivery failed.", error);
    return respond(res, 502, { error: "Could not deliver the order." });
  } finally {
    clearTimeout(timeout);
  }
};
