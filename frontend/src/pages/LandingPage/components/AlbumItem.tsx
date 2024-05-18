import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const AlbumItem = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top center",
            end: "bottom center",
            // scrub: true,
            toggleActions: "play reverse play reverse",
          },
        })
        .to(
          container.current,
          {
            backgroundColor: "blue",
          },
          0
        )
        .to(
          ".text",
          {
            fontWeight: "bold",
            color: "white",
          },
          0
        )
        .to(
          ".text-one",
          {
            x: -100,
          },
          0
        )
        .to(
          ".text-two",
          {
            x: 100,
          },
          0
        );
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="flex items-center justify-center text-2xl gap-4 album-item w-full py-4"
    >
      <p className="text-one text">one</p>
      <p className="text-two text">two</p>
    </div>
  );
};

export default AlbumItem;
