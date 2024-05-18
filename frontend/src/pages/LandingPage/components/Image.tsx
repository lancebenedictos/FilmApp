import { twMerge } from "tailwind-merge";
type Props = {
  loaded: boolean;
  start: boolean;
  width: number;
  src: string;
};

const Image = ({ loaded, start, width, src }: Props) => {
  return (
    <img
      src={src}
      width={width}
      className={twMerge(
        "img",
        loaded
          ? "relative"
          : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        start ? " self-start" : " self-end"
      )}
    />
  );
};

export default Image;
