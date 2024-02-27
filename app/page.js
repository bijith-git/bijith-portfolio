import About, { About2 } from "@/components/About";
import Contact, { Contact2 } from "@/components/Contact";
import Hero, { Hero2 } from "@/components/Hero";
import { Projects2 } from "@/components/Projects";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Testimonial from "@/components/Testimonial";
import MainLayout from "@/layout/MainLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <MainLayout header={2} onePageMenu={true} footer={1}>
      <Hero />
      <About />
      <div className="headline-area-h2 rel z-2 py-25">
        <div className="headline-wrap">
          <span className="marquee-wrap">
            <span className="marquee-inner left">
              <span className="marquee-item">
                Android
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                IOS
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Web development
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Flutter
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Firebase
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UI
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UX
                <i className="far fa-asterisk" />
              </span>
            </span>{" "}
            <span className="marquee-inner left">
              <span className="marquee-item">
                Android
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                IOS
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Web development
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Flutter
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Firebase
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UI
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UX
                <i className="far fa-asterisk" />
              </span>
            </span>{" "}
            <span className="marquee-inner left">
              <span className="marquee-item">
                Android
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                IOS
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Web development
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Flutter
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Firebase
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UI
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UX
                <i className="far fa-asterisk" />
              </span>
            </span>
          </span>
        </div>
      </div>
      <Resume />
      <Services extraClass={"serves"} />
      <Skill />
      <div className="headline-area rel z-2 py-25">
        <div className="headline-wrap">
          <span className="marquee-wrap">
            <span className="marquee-inner left">
              <span className="marquee-item">
                Android
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                IOS
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Web development
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Flutter
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Firebase
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UI
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UX
                <i className="far fa-asterisk" />
              </span>
            </span>{" "}
            <span className="marquee-inner left">
              <span className="marquee-item">
                Android
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                IOS
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Web development
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Flutter
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Firebase
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UI
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UX
                <i className="far fa-asterisk" />
              </span>
            </span>{" "}
            <span className="marquee-inner left">
              <span className="marquee-item">
                Android
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                IOS
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Web development
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Flutter
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Firebase
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UI
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UX
                <i className="far fa-asterisk" />
              </span>
            </span>
          </span>
        </div>
      </div>
      <Projects2 />
      {/* <Clients2 /> */}
      {/* <Testimonial /> */}
      <Contact2 />
      <div className="headline-area pt-60  rel z-2">
        <div className="headline-wrap">
          <span className="marquee-wrap style-two pb-20">
            <span className="marquee-inner left">
              <span className="marquee-item">
                <span> _ Designer _</span> Bijith <span>_ Developer _ </span>{" "}
                Bijith{" "}
              </span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">
                <span> _ Designer _</span> Bijith <span>_ Developer _ </span>{" "}
                Bijith{" "}
              </span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">
                <span> _ Designer _</span> Bijith <span>_ Developer _ </span>{" "}
                Bijith{" "}
              </span>
            </span>
          </span>
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
      </div>
      {/* <ScrollTop /> */}
    </MainLayout>
  );
}
