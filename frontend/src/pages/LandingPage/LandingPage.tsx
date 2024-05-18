import gsap from "gsap";
import Gallery from "./components/Gallery";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Heart } from "lucide-react";
import AlbumList from "./components/AlbumList";

gsap.registerPlugin(useGSAP);

const LandingPage = () => {
  const container = useRef<HTMLDivElement>(null);
  const heart = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!heart.current || !container.current) return;
      const heartXOffset =
        heart.current?.getBoundingClientRect().left -
        container.current?.offsetWidth / 2 +
        heart.current.getBoundingClientRect().width / 2;

      const centerHeartTL = gsap.timeline().to(".heart", {
        x: -heartXOffset,
        duration: 0.3,
        scale: 0.3,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".heart-container",
          pin: ".heart-container h1",
          start: "top top",
          pinSpacing: false,
          end: "+=" + container.current.offsetHeight,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".heart-container",
            start: "top top",
            pinSpacing: false,
            toggleActions: "play none none reverse",
            end: "+=50px",
          },
        })
        .to(".heart-container h1", {
          fontSize: 24,
          ease: "power1.inOut",
        });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".heart-container",
          pin: ".heart",
          start: "center center",
          pinSpacing: false,
          markers: true,
          scrub: 1,
          end: "+=" + container.current.offsetHeight,
        },
      });

      ScrollTrigger.create({
        trigger: ".heart-container",
        start: `bottom center`,
        onLeaveBack: () => centerHeartTL.reverse(),
        onEnter: () => centerHeartTL.play(),
        animation: centerHeartTL,
      });
    },
    { scope: container }
  );

  return (
    <div className="overflow-hidden relative" ref={container}>
      <Gallery />
      <div
        className=" flex items-center font-black text-9xl  header-text heart-container relative w-screen"
        data-scroll-section
      >
        <h1 data-scroll-sticky>FILMBYPAULA</h1>
        <div className=" inline-block heart " ref={heart}>
          <Heart size={128} />
        </div>
      </div>

      <AlbumList />
    </div>
  );
};

export default LandingPage;
