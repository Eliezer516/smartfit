// Configuración de WhatsApp para SmartFit
export const WHATSAPP_NUMBER = "34600000000"; // Cambiar por el número real del gimnasio

export const getWhatsAppLink = (message?: string) => {
  const defaultMessage =
    "¡Hola! Vi su página web y me interesa conocer más sobre SmartFit. ¿Podrían ayudarme?";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const openWhatsApp = (message?: string) => {
  window.open(getWhatsAppLink(message), "_blank");
};
