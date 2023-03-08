import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { tabsDetail } from "../../constants";
import { TabContent, TabNav } from "../";
import StepsSection from "../stepsSection";

gsap.registerPlugin(ScrollTrigger);
const HorizentalScroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [navBtn, setNavBtn] = useState([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: "0vw",
      },
      {
        translateX: "-403vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 100",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    const Large = window.matchMedia(
      "(min-width: 992px) and (max-width: 1024px)"
    );
    const Md = window.matchMedia("(max-width: 764px) ");
    const mqLarge = window.matchMedia(
      "(min-width: 1024px) and (max-width: 1279px)"
    );
    const mqXLarge = window.matchMedia("(min-width: 1280px)");

    if (Md) {
      pin.vars.translateX = "-470vw";
    } else if (Large) {
      pin.vars.translateX = "-435vw";
    } else if (mqLarge.matches) {
      pin.vars.translateX = "-400vw";
    } else if (mqXLarge.matches) {
      pin.vars.translateX = "-410vw";
    }
    return () => {
      {
      }
      pin.kill();
    };
  }, []);

  return (
    <>
      <section className="scroll-section-outer hidden lg:block max-w-7xl  ">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="scroll-section-inner flex justify-center items-center min-h-[100vh]"
          >
            {tabsDetail.map((tab, indx) => (
              <div
                key={indx}
                className="scroll-section flex justify-center m-0 items-center z-50 "
              >
                <TabContent
                  key={indx}
                  title={tab.title}
                  paragraph={tab.paragraph}
                  icon={tab.icon}
                  img={tab.img}
                  btn={tab.btn}
                  condition={tab.condition}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HorizentalScroll;
