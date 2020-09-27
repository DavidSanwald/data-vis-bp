import React from "react";
import { useSpring, animated } from "react-spring";

type Props = {
  x: number;
  y: number;
};

function Circle({ x, y }: Props) {
  const props = useSpring({
    to: { r: 10 },
    from: { r: 1 },
  });
  return <animated.circle cx={x} cy={y} {...props} fill="red" />;
}

export { Circle };
