import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/jao2.jpg"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="bg-secondary bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Aboutpage
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="col">
            <div className="card shadow p-5 ">
              <div className="row">
              <div className="col-lg-4">
              <center><img src={myImage} /></center>
              </div>
              <div className="col-lg-8">
                <div className="card box shadow mb-3 p-3">
                <h4 className="text-dark"><span>About Me</span></h4>
              <p> Im Jovito A. Omero Jr. 23 years of age from Brgy Oringao Kabankalan City Neg. Occ. taking a Bachelor of Science in Information Technology (BSIT) at Central Philippines State University (CPSU). I have an interest in Networking and PC Repair  </p>
              <p> I am a content creator, making a facebook reels related to Eat Unwind Travel (EUT) and post a vedios on tiktok and also live my gameplay on MLBB using my main hero Zilong with 3K Matches </p>
                </div>
                <div className="card box shadow p-3">
                <h4 className="text-dark"><span>Academic</span> </h4>
              <p> Primary: Oringao Elementary School S.Y:2014 <br /> Secondary: Junior High: Florentino Galang Senior National High School S.Y:2017 <br />Senior High: Florentino Galang Senior High School S.Y:2020 <br />Tretiary: Central Philippines State University (CPSU)SY:2024</p>
              <p> </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
