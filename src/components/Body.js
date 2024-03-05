import About from "./About";
import Courses from "./Courses";
import Admission from "./Admission";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";

const Body = () => {
  return (
    <>
      <div className="hero-section">
        <div className="text-container">
          <h2>
            <span>Berhampore</span> Vivekananda School of Hotel
            <span> Management</span>
          </h2>
          <div className="disc">
            <p>UNLOCK YOUR POTENTIAL</p>
            <p>Discover endless opportunities at BVSHM.</p>
          </div>
        </div>
        <div className="img-container">
          <img src="/assets/OBJECTS.png" alt="imagelogo" />
        </div>
      </div>
      <>
        <About />
        <Courses />
        <Admission />
        <Contact />
        <SocialMedia />
      </>
    </>
  );
};

export default Body;
