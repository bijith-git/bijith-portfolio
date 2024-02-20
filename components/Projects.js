import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Latest Works</span>
              <h2>
                Explore My Popular <span>Projects</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project1.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Product Design</span>
              <h2>
                <Link legacyBehavior href="project-details">
                  Mobile Application Design
                </Link>
              </h2>
              <p>
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis architecto beatae
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project2.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Product Design</span>
              <h2>
                <Link legacyBehavior href="project-details">
                  Website Makeup Design
                </Link>
              </h2>
              <p>
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis architecto beatae
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project3.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Product Design</span>
              <h2>
                <Link legacyBehavior href="project-details">
                  Brand Identity and Motion Design
                </Link>
              </h2>
              <p>
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis architecto beatae
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project4.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Product Design</span>
              <h2>
                <Link legacyBehavior href="project-details">
                  Mobile Application Development
                </Link>
              </h2>
              <p>
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis architecto beatae
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="/projects-masonry">
            <a className="theme-btn">
              View More Projects <i className="far fa-angle-right" />
            </a>
          </Link>
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
export default Projects;

export const Projects2 = () => {
  return (
    <section id="projects" className=" pt-135 rpt-100 pb-100 rpb-70 rel z-1">
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> Explore my projects
              </span>
              <h2>Explore My Projects</h2>
            </div>
          </div>
        </div>
        <div className="row gap-50">
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two1.jpg"
                  alt="Project"
                />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-box"
                  href="https://pub.dev/packages/animated_mouse_cursor"
                >
                  <span>Visit</span>
                  <i className="far fa-arrow-up" />
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link
                    legacyBehavior
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-box"
                    href="https://pub.dev/packages/animated_mouse_cursor"
                  >
                    <a>Animated Cursor</a>
                  </Link>
                </h5>
                <span className="sub-title">Flutter package, Flutter Web</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two2.jpg"
                  alt="Project"
                />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-box"
                  href="https://nightowl-cyan.vercel.app/"
                >
                  <span>Visit</span>
                  <i className="far fa-arrow-up" />
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="https://nightowl-cyan.vercel.app/">
                    <a>NightOwl Media</a>
                  </Link>
                </h5>
                <span className="sub-title">Next js Project</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two3.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="">
                  <a className="hover-box">
                    <span>View Code</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="">
                    <a>Wallpaper App</a>
                  </Link>
                </h5>
                <span className="sub-title">Personal Project, Android</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two4.jpg"
                  alt="Project"
                />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sort-visualizer-c3b8d.web.app/"
                  className="hover-box"
                >
                  <span>Visit</span>
                  <i className="far fa-arrow-up" />
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link
                    legacyBehavior
                    href="https://sort-visualizer-c3b8d.web.app/"
                  >
                    <a>Sort Visualizer</a>
                  </Link>
                </h5>
                <span className="sub-title">Personal Project,Flutter Web</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-3">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two5.jpg"
                  alt="Project"
                />
                <Link
                  // legacyBehavior
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-box"
                  href="https://typing-speed-577bd.web.app/"
                >
                  <span>Visit</span>
                  <i className="far fa-arrow-up" />
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link
                    legacyBehavior
                    href="https://typing-speed-577bd.web.app/"
                  >
                    <a>Typing Speed Test </a>
                  </Link>
                </h5>
                <span className="sub-title">Personal Project, Flutter Web</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="project-details-btn mb-40">
              <Link legacyBehavior href="/projects-masonry">
                <a className="more-btn wow zoomIn delay-0-2s">
                  <span>More</span>
                  <i
                    className="fal fa-arrow-up"
                    style={{ fontSize: "124px" }}
                  />
                </a>
              </Link>
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
