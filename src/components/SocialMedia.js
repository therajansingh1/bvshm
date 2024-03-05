import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <h2>social media links</h2>
      <div className="links">
        <Link
          target="_blank"
          to="https://www.facebook.com/people/BVSHM_Another-name-of-success/100063806034284/?mibextid=ZbWKwL"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ color: "#1059e0" }}
            className="icon"
          />
        </Link>
        <Link target="_blank" to="https://www.instagram.com/bvshmmurshidabad/">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#ca1c50" }}
            className="icon"
          />
        </Link>
        <Link target="_blank" to="https://www.linkedin.com/in/bvshm-murshidabad-4474862b6?">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#1f355c" }}
            className="icon"
          />
        </Link>
        <Link target="_blank" to="https://www.youtube.com/@BVSHM">
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: "#f41032" }}
            className="icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
