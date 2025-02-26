"use client";

import {
  CouterPros,
  useAnimationCounter,
} from "../../_hooks/use-animation-statistics";

const Counter = ({ endValue, start, className }: CouterPros) => {
  const { count } = useAnimationCounter({ endValue, start });
  return (
    <span className={`${className} text-black text-7xl font-bold`}>
      +{count}
    </span>
  );
};

export default Counter;
