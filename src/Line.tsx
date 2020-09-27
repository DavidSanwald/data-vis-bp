import React from "react";
import { useSpring, animated } from "react-spring";

type Props = {
  linePath: string;
  [k: string]: any;
};

function Line({ linePath, fill }: Props) {
  const [props, set] = useSpring(() => ({ d: linePath }));
  set({ d: linePath });
  return (
    <animated.path {...props} fill={fill} stroke="black" strokeWidth="2px" />
  );
}

export { Line };
