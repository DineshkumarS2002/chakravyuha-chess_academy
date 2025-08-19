import whatsappicon from "../../assets/whatsapp.png";
import "../../Style/WhatsappMessage.css";

const WhatsappMessage = () => {

  const whatsappNumber = "918870221915";

  const message = encodeURIComponent(
    "Hello! I am interested in your chess academy. Please share more details."
  );

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
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
