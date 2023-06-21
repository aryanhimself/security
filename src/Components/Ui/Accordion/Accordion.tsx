import React, { FC } from "react";
import cn from "classnames";
import { AccordionIcon } from "../Icons";
type Props = {
  title: string;
  onActive: () => void;
};

const Accordion: FC<React.PropsWithChildren<Props>> = ({
  children,
  title,
  onActive,
}) => {
  return (
    <>
      <button onClick={onActive} className={cn("accordion")}>
        {title}
        <AccordionIcon />
      </button>
      <div className="panel">{children}</div>
    </>
  );
};

export default Accordion;
