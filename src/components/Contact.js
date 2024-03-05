import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-details">
        <h2>contact us</h2>
        <h4>Apply Now!</h4>
        <p>
          We are excited to be accepting applications for the upcoming session!
          Download our application and attach it to this form. We look forward
          to hearing from you!
        </p>

        <button className="btn">
          <Link
            target="_blank"
            to="https://api.whatsapp.com/send/?phone=918116478144&text&type=phone_number&app_absent=0"
          ></Link>
          Message us on WhatsApp
        </button>
        <h4>Berhampore Vivekananda School of Hotel Management</h4>
        <p>
          18/6, K.K. Banerjee Road near Yamaha showroom Gora Bazar, Berhampore,
          West Bengal , India
        </p>
          <a className="btn" href="mailto:bves2014@gmail.com">Email</a>
        
      </div>
    </div>
  );
};

export default Contact;
