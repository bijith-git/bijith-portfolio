"use client";

import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectMasonryIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-masonry-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <Fragment>
      <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          Show All
        </li>
        <li
          className={`c-pointer ${activeBtn("design")}`}
          onClick={handleFilterKeyChange("design")}
        >
          Design
        </li>
        <li
          className={`c-pointer ${activeBtn("app")}`}
          onClick={handleFilterKeyChange("app")}
        >
          Apps
        </li>
        <li
          className={`c-pointer ${activeBtn("web")}`}
          onClick={handleFilterKeyChange("web")}
        >
          Web
        </li>
        <li
          className={`c-pointer ${activeBtn("package")}`}
          onClick={handleFilterKeyChange("package")}
        >
          Packages
        </li>
        <li
          className={`c-pointer ${activeBtn("games")}`}
          onClick={handleFilterKeyChange("games")}
        >
          Games
        </li>
        {/* <li
          className={`c-pointer ${activeBtn("")}`}
          onClick={handleFilterKeyChange("")}
        >
          Graphics
        </li> */}
      </ul>
      <div className="row project-masonry-active">
        <div className="col-xl-4 col-md-6 item app">
          <div className="project-item style-three wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/project-masonry1.jpg"
                alt="Project"
              />
            </div>
            <div className="project-content">
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
              <span className="sub-title">Mobile App</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Wallpaper App
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item web games">
          <div className="project-item style-three wow fadeInUp delay-0-3s">
            <div className="project-image">
              <img
                src="assets/images/projects/project-masonry2.jpg"
                alt="Project"
              />
            </div>
            <div className="project-content">
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
              <span className="sub-title">Flutter Web</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Typing speed
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item app web">
          <div className="project-item style-three wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/project-masonry3.jpg"
                alt="Project"
              />
            </div>
            <div className="project-content">
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
              <span className="sub-title">Flutter App</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Quotes generator
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item package">
          <div className="project-item style-three wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/project-masonry4.jpg"
                alt="Project"
              />
            </div>
            <div className="project-content">
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
              <span className="sub-title">Flutter Package</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Animated Mouse Cursor
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item games">
          <div className="project-item style-three wow fadeInUp delay-0-3s">
            <div className="project-image">
              <img
                src="assets/images/projects/project-masonry5.jpg"
                alt="Project"
              />
            </div>
            <div className="project-content">
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
              <span className="sub-title">Game</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  2048
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item package">
          <div className="project-item style-three wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/project-masonry6.jpg"
                alt="Project"
              />
            </div>
            <div className="project-content">
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
              <span className="sub-title">Flutter Package</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Pageinated ListView
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item app ">
          <div className="project-item style-three wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/project-masonry7.jpg"
                alt="Project"
              />
            </div>
            <div className="project-content">
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
              <span className="sub-title">Mobile App</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Music App
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item design">
          <div className="project-item style-three wow fadeInUp delay-0-3s">
            <div className="project-image">
              <img
                src="assets/images/projects/project-masonry8.jpg"
                alt="Project"
              />
            </div>
            <div className="project-content">
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Mobile Application Design
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item design web">
          <div className="project-item style-three wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/project-masonry9.jpg"
                alt="Project"
              />
            </div>
            <div className="project-content">
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Mobile Application Design
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectMasonryIsotop;
