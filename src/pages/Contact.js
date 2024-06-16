import "./Contact.css";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div id="Contact-info" className="bg-secondary bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Contact Page
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section id="faq">
        <div class="container">
            <div class="faq-section">
              <h2 class="text-center mb-lg-5 mb-3 text-light">This is All about my Information</h2>
              <div                                                     class="accordion" id="faqAccordion">
                <                                                                                                                                                                                                                                                                                                                                          div class="accordion-item faq-item">
                  <h2 class="accordion-header">
                    <button class=" fw-bold accordion-button collapsed faq-question" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      My Frontend Project
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div class="accordion-body faq-answer">

                    <center>
              <a href="https://manungjao.github.io/omerojovitojr/" className="btn shadow fw-bold mt-5">
                Click Here
              </a>
              </center>
              
                    </div>
                  </div>
                </div>

                <div class="accordion-item faq-item">
                  <h2 class="accordion-header">
                    <button class=" fw-bold accordion-button collapsed faq-question" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> <i class="bi bi-facebook"></i>
                      My Facebook Account
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div class="accordion-body faq-answer">

                    <center>
              <a href="https://www.facebook.com/jovito.omero.3" className="btn shadow  fw-bold mt-5">
                Click Here
              </a>
              </center>

                    </div>
                  </div>
                </div>

                <div class="accordion-item faq-item">
                    <h2 class="accordion-header">
                      <button class=" fw-bold accordion-button collapsed faq-question" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        My TikTok Account
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div class="accordion-body faq-answer">

                      <center>
              <a href="https://www.tiktok.com/@totojao22?is_from_webapp=1&sender_device=pc" className="btn shadow  fw-bold mt-5">
                Click Here
              </a>
              </center>

                      </div>
                    </div>
                  </div>
                  <div class="d-flex gap-2 mt-5">
                    <a href="#work" class=" fw-bold text-light btn btn-brand mx-auto">Contact Us</a>              
                </div>
              </div>
            </div>
          </div>
    </section>

 <footer class="footer text-light" id="footer">
    <div class="container">
        <div class="row al">
            <div class="col-md-4 col-sm-6 text-lg-start text-center">
                <a class="navbar-brand" href="#">
                </a>
                <h5 class="mt-4">About Us</h5>
                <p>Now i realize i should focus more on my future and building my career since life is not all about love </p>
            </div>
            <div class="col-md-4 col-sm-6 text-lg-start text-center">
                <h5> Address </h5>
                <p>Prk. Campilisan, Brgy. Oringao<br/> Kabankalan City, Philippines</p>
                <p>Email: jovitoomero07@gmail.com<br/>Phone: 09365242509</p>
            </div>
            <div class="col-md-4 col-sm-6 text-lg-start  text-center">
                <h5>Newsletter</h5>
                <form>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control"/>
                        <button class="btn btn-outline-light" type="button" id="button-addon2">Subscribe</button>
                    </div>
                </form>
                <p>Delete me, block me, unfriend me, you can even unlove me, but you can never unmemory me</p>
            </div>
        </div>
    </div>
</footer>

    </>
  );
};

export default Contact;
