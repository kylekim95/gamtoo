"use client";

import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface IPortalProps {
  children: ReactNode;
}

function Portal({ children }: IPortalProps) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const portalElement = document.querySelector(`#portal`);
    if (portalElement instanceof HTMLElement) {
      setElement(portalElement); // 타입이 명확해짐
    }
  }, []);

  if (!element) return null;

  return ReactDOM.createPortal(children, element);
}

export default Portal;
