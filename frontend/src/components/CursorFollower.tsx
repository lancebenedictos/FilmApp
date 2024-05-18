import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const CursorFollower = () => {
  const container = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { contextSafe } = useGSAP({ scope: container });
  const [size] = useState({ width: 25, height: 25 });

  const animate = contextSafe(() => {
    gsap.to(container.current, {
      x: position.x - size.width / 2,
      y: position.y - size.height / 2,
      duration: 0.6,
    });
  });
  useLayoutEffect(() => {
    if (container.current) {
      animate();
    }
  }, [animate, position]);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      ref={container}
      className={twMerge(
        "dot rounded-full absolute z-50 bg-red-500",
        `w-[${size.width}px] h-[${size.height}px]`
      )}
    ></div>
  );
};

export default CursorFollower;
