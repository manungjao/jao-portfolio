import "./Experience.css";
import Navbar from "./Navbar";
import boy2Image from "./img/boy2.png"
import boy1Image from "./img/boy1.png"
import boy3Image from "./img/boy3.png"
import jov2Image from "./img/jov2.png"
import jov1Image from "./img/jov1.png"
import jov3Image from "./img/jov3.png"
import oms2Image from "./img/oms2.png"
import oms1Image from "./img/oms1.jpeg"
import oms3Image from "./img/oms3.png"

const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="bg-secondary bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Experience Page
              </h1>
            </div>
          </div>
        </div>
      </div>

    <div className="exp">
    <div className="container">
          <hr/>
          <div className="row mb-5">
            <h3 className="text-center">On-the Job Training</h3>
            <hr />
          <div className="col-lg-4">
          <img className="two" src={oms2Image} />
          <h4>Fixing a Fiber Line & UTP Cable</h4>
          </div>
          <div className="col-lg-4">
          <img className="one" src={oms1Image} />
          <h4> Fixing/Performing a Networking</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={oms3Image} />
          <h4>Unboxing & Setup Units</h4>
          </div>
          </div>
          <hr/>
          <div className="row mb-5">
            <h3 className="text-center">Thesis Study</h3>
            <hr />
          <div className="col-lg-4">
          <img className="two" src={jov1Image} />
          <h4>This is our Harvesting Lettuce</h4>
          </div>
          <div className="col-lg-4">
          <img className="one" src={jov3Image} />
          <h4>This is our Harvesting Lettuce</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={jov2Image} />
          <h4>This is our Harvesting Lettuce</h4>
          </div>
          </div>
          <hr/>
          <div className="row mb-5">
            <h3 className=" text-light text-center">School Work Activity</h3>
            <hr />
          <div className="col-lg-4">
          <img className="two" src={boy2Image} />
          <h4>This is our Harvesting Lettuce</h4>
          </div>
          <div className="col-lg-4">
          <img className="one" src={boy1Image} />
          <h4>This is our Harvesting Lettuce</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={boy3Image} />
          <h4>This is our Harvesting Lettuce</h4>
          </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default Experience;
