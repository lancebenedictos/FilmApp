import { useLayoutEffect } from "react";

//@ts-expect-error ignore types
import LocomotiveScroll from "locomotive-scroll";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useLocoScroll = (start: boolean) => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector(
      "[data-scroll-container]"
    ) as HTMLDivElement;
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
    });

    locoScroll.init();

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      scrollLeft(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.x;
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

    ScrollTrigger.defaults({ scroller: scrollEl });

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();
    //ScrollTrigger.refresh();
    console.log("loco");

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", lsUpdate);
    };
  }, [start]);
};

export default useLocoScroll;
