const About = () => {
  return (
    <div className="about-section">
      <h2>about bvshm</h2>
      <div className="about-items">
        <div className="about-mission ">
          <img className="float-left" src="/assets/IMG-20191223-WA0013.jpg" alt="" />
          <div className="mission-text">
            <h2>Mission and Values</h2>
            <p>
              {" "}
              BVSHM's mission is to provide a transformative learning experience
              that empowers students to become agents of positive change in
              their communities. We are committed to fostering a diverse and
              inclusive environment that values creativity, innovation, and
              social responsibility.
            </p>
          </div>
        </div>
        <div className="about-mission">
          <img className="float-right" src="/assets/IMG-20191204-WA0030.jpg" alt="" />
          <div className="mission-text">
            <h2>Our Faculty</h2>
            <p>
              Our faculty members are experts in their fields and are dedicated
              to providing the highest quality education to our students. They
              are committed to helping students achieve their academic and
              professional goals and are available to provide mentorship and
              support throughout their academic journey.
            </p>
          </div>
        </div>
        <div className="about-mission">
          <img className="float-left" src="/assets/IMG20200108131334.jpg" alt="" />
          <div className="mission-text">
            <h2>Research and Innovation</h2>
            <p>
              At BVSHM, we are committed to advancing knowledge and driving
              innovation in a variety of fields. Our research programmes are
              focused on addressing some of the world's most pressing challenges
              and our students have the opportunity to work alongside faculty
              members on cutting-edge research projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
