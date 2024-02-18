import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/+917092805747";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 bg-green-500 p-3 rounded-full text-white hover:bg-green-600"
      style={{zIndex: 1}}
    >
      <FaWhatsapp size={35} />
    </a>
  );
};

export default WhatsAppButton;
