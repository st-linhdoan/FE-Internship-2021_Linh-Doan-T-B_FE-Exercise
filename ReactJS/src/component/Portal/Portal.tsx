import { useEffect } from "react";
import React from 'react';
import { createPortal } from "react-dom";
import './style.scss'
interface Props {
  childrem: string;
}

const Portal: React.FC<Props> = ({ children }) => {
  const mount = document.getElementById("modal-root");
  const el = document.createElement("div");

  el.setAttribute("class", "modal");
  useEffect(() => { 
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el)
};

export default Portal;
