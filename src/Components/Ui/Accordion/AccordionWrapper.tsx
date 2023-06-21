"use client";

import React, { HTMLAttributes, useState } from "react";
import Accordion from "./Accordion";
import cn from "classnames";
import "./Accordion.css";

const AccordionWrapper = ({
  data,
  className,
}: {
  data: {
    title: string;
    node: React.ReactNode;
  }[];
  className: HTMLAttributes<HTMLDivElement>["className"];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const onActive = (index: number) => {
    if (activeIndex == index) {
      setActiveIndex(null);
      return;
    }
    setActiveIndex(index);
  };

  return data.map((x, i) => (
    <div
      className={cn({
        //   @ts-ignore
        [className]: !!className,
        accordion_container: !className,
        active: i === activeIndex,
      })}
    >
      <Accordion
        title={x.title}
        children={x.node}
        onActive={() => onActive(i)}
      />
    </div>
  ));
};

export default AccordionWrapper;
