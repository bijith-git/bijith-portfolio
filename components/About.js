import Counter from "./Counter";

const About = () => {
  return (
    <section id="about" className="about-area rel z-1">
      <div className=" py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">
                    <i className="flaticon-asterisk-1" />
                    Introduction of Myself
                  </span>
                  <h2>
                    Elevating <span>ideas</span> into immersive digital
                    experiences.
                  </h2>
                  {/* <h2>
                  I have no special <span>talents</span>.I am only passionately
                  curious
                </h2> */}
                </div>
                <div className="text pb-5">
                  Hi, I&apos;m a developer who loves using Flutter with one year
                  of practice creating new solutions for Android, iOS, and web
                  systems. I am good at making apps that work on different
                  devices and look great while also running well. I am good at
                  more than just Flutter. I also know Next.js and Node.js well,
                  so I can make full solutions from start to finish. I have done
                  many different tasks and completed them well. I promise to do
                  my best, change when needed, and make sure things are easy for
                  users in every project I work on.
                </div>
                <div className="row">
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="about-info-item wow fadeInUp delay-0-2s">
                      <small>born In</small>
                      <b>Kerala,India</b>
                    </div>
                  </div>
                  {/* <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-3s">
                    <small>Freelancing</small>
                    <b>Yes</b>
                  </div>
                </div> */}
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
                      <Counter end={8} extraClass={""} />
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
                      <Counter end={2} extraClass={"+"} />
                      <span className="counter-title">Satisfied Clients</span>
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
    <section id="about" className="about-area rel z-1 ">
      <div className=" py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
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
                  systems. I am good at making apps that work on different
                  devices and look great while also running well. I am good at
                  more than just Flutter. I also know Next.js and Node.js well,
                  so I can make full solutions from start to finish. I have done
                  many different tasks and completed them well. I promise to do
                  my best, change when needed, and make sure things are easy for
                  users in every project I work on.
                </div>
                <div className="row">
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="about-info-item wow fadeInUp delay-0-2s">
                      <small>born In</small>
                      <b>Kerala,India</b>
                    </div>
                  </div>
                  {/* <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-3s">
                    <small>Freelancing</small>
                    <b>Yes</b>
                  </div>
                </div> */}
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
      </div>
    </section>
  );
};
