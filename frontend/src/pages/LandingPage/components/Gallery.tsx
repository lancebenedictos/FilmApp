import { useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);
// import Image from "./Image";
import { useGSAP } from "@gsap/react";

// type Props = {};

const Gallery = () => {
  const header = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (header.current) {
        // test
      }
    },
    { scope: header }
  );

  return (
    <div
      className={`header flex flex-nowrap w-[250vw] h-screen relative bg-[#D8CDAB]`}
      data-scroll-section
      ref={header}
    ></div>
  );
};

export default Gallery;
