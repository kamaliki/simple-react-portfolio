import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";

const Contact = () => {

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +254 706 961 537
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              justuskamaliki@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Juja, Kenya
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Please contact me. 
            If the right project comes along, 
            I am always available for freelancing. 
            I am also open to full-time, part-time, and remote work. 
            Let us work together to make more technological advances and,
             discover the unimaginable. 
            I eagerly await your response.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Contact;
