export async function sendWhatsAppMessage(toPhoneNumber: string, message: string) {
  const token = process.env.WHATSAPP_TOKEN
  const phoneNumberId = process.env.PHONE_NUMBER_ID

  const response = await fetch(`https://graph.facebook.com/v19.0/${phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: toPhoneNumber, // must be in E.164 format, e.g. +919123456789
      type: "text",
      text: { body: message }
    })
  })

  if (!response.ok) {
    const error = await response.json()
    console.error("WhatsApp Error:", error)
    throw new Error("Failed to send WhatsApp message")
  }

  return await response.json()
}
