import Counter from "./Counter";

const About = () => {
  return (
    <section id="about" className="about-area rel z-1">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>
                    Professional <span>Problem Solutions</span> For Digital
                    Products
                  </h2>
                  <p>
                    At vero eos et accusamus etodio dignissimos ducimus
                    praesentium voluptatum corrupti quos dolores quas molestias
                    excepturi sint occaecati cupiditate provident qui officia
                    deserunt mollitia animi, id est laborum et dolorum
                  </p>
                </div>
                <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                  <li>Branding &amp; Design</li>
                  <li>Digital Marketing</li>
                  <li>Web Development</li>
                  <li>Product Design</li>
                </ul>
                <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                  <div className="info-box-item">
                    <i className="far fa-envelope" />
                    <div className="content">
                      <span>Email Us</span>
                      <br />
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </div>
                  </div>
                  <div className="info-box-item">
                    <i className="far fa-phone" />
                    <div className="content">
                      <span>Make A Call</span>
                      <br />
                      <a href="callto:+000(123)45688">+880 (123) 456 88</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-image-part wow fadeInUp delay-0-3s">
                <img src="assets/images/about/about.jpg" alt="About Me" />
                <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                  <img src="assets/images/about/btn-image1.png" alt="Image" />
                  <h6>Experience Designer</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="about-btn btn-two wow fadeInRight delay-0-5s">
                  <img src="assets/images/about/btn-image2.png" alt="Image" />
                  <h6>Mark J. Collins</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="dot-shape">
                  <img src="assets/images/shape/about-dot.png" alt="Shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default About;

export const About2 = () => {
  return (
    <section
      id="about"
      className="about-area-two rel z-1 pt-130 rpt-100 pb-130 rpb-100"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-content-two rel z-2 rmb-55">
              <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" />
                  Introduction of Myself
                </span>
                <h2>
                  Designing <span>emotional</span> digital experiences that
                  people love
                </h2>
                {/* <h2>
                  I have no special <span>talents</span>.I am only passionately
                  curious
                </h2> */}
              </div>
              <div className="text pb-5">
                Hi, I&apos;m a developer who loves using Flutter with one year
                of practice creating new solutions for Android, iOS, and web
                systems. I am good at making apps that work on different devices
                and look great while also running well. I am good at more than
                just Flutter. I also know Next.js and Node.js well, so I can
                make full solutions from start to finish. I have done many
                different tasks and completed them well. I promise to do my
                best, change when needed, and make sure things are easy for
                users in every project I work on.
              </div>
              <div className="row">
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-2s">
                    <small>born In</small>
                    <b>Kerala,India</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-3s">
                    <small>Freelancing</small>
                    <b>Yes</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-4s">
                    <small>Working at</small>
                    <b>Sigosoft</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-counter-wrap">
              <div className="row gap-40 justify-content-center">
                <div className="col-lg-5 col-6 mx-5">
                  <div className="counter-item counter-text-wrap mb-25 wow fadeInUp delay-0-2s">
                    <Counter end={5} extraClass={""} />
                    <span className="counter-title">project completed</span>
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                    <Counter end={1.5} extraClass={"y"} />
                    <span className="counter-title">Years Experience</span>
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                    <Counter end={10} extraClass={"+"} />
                    <span className="counter-title">Satisfied customers</span>
                  </div>
                </div>
              </div>
              <div className="counter-logo">
                <img
                  className="wow zoomIn delay-0-2s"
                  src="assets/images/shape/circle-logo.png"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
