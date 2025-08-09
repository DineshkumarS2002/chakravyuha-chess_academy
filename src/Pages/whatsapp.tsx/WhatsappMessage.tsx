import whatsappicon from "../../assets/whtaspp.jpg";
import "../../Style/WhatsappMessage.css";

const WhatsappMessage = () => {
  const whatsappNumber = "916381830479";
  const message = encodeURIComponent(
    "Hello! I am interested in your chess academy. Please share more details."
  );

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="whatsapp-float-btn" onClick={handleClick}>
      <img
        src={whatsappicon}
        alt="WhatsApp Icon"
        className="whatsapp-float-img img-fluid"
      />
    </div>
  );
};

export default WhatsappMessage;
