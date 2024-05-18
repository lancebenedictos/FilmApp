import { useLayoutEffect } from "react";

//@ts-expect-error ignore types
import LocomotiveScroll from "locomotive-scroll";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useLocoScroll = (start: boolean) => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const scrollEl = document.querySelector(
      "[data-scroll-container]"
    ) as HTMLDivElement;
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
          : locoScroll.scroll.instance.scroll.y;
      },

      pinType: scrollEl.style.transform ? "transform" : "fixed",
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();
    ScrollTrigger.defaults({ scroller: scrollEl });
  }, [start]);
};

export default useLocoScroll;
