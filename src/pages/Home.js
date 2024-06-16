import "./Home.css";
import Navbar from "./Navbar";

import myImage from "./img/jao1.png"

const Home = () => {
  return (
    <>
      <Navbar />



    <div className="wrapper">
      <div className="overlay">
        <div className="container1">

    <div id="home-info" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

        <div className="container mt-5">
          <div className="row ok">
            <div className="col-lg-6">
              <div className="card jimboy">
              <img src={myImage} />
              </div>
            </div>
            <div className="col-lg-6 jao">
              <div className="card">
              <h2 className=" fw-bold display-3 text-center text-light mb-5">
                Greetings.. <br/> Im Jovito A Omero Jr.
              </h2>
              <h4 className=" text-light text-center mt-5"> Im a content creator Good at Networking & An Online Gamer</h4>
              <center>
              <a href="/about" className="btn shadow mt-5">
                Explore More
              </a>
              </center>
              </div>
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

export default Home;
