// src/Effects/Effects.js// src/Effects/Effects.js
import { useEffect, useRef } from "react";

export const useLandingEffects = () => {
  const containerRef = useRef(null);
  const placeholderRef = useRef(null);
  const subHeaderRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(
      "#item-1, #item-2, #item-3, #item-4"
    );

    if (!items) return;

    items.forEach((item) => {
      item.addEventListener("mouseover", (event) => {
        if (!containerRef.current || !placeholderRef.current) return;

        containerRef.current.style.transition = "0.4s";
        containerRef.current.style.backgroundColor = "#0d0d0d";

        placeholderRef.current.textContent.style.transition = "0.5s";

        placeholderRef.current.textContent = event.target.textContent;
      });

      item.addEventListener("mouseout", () => {
        if (!containerRef.current || !placeholderRef.current) return;
        placeholderRef.current.style.transition = "0.5s";
        containerRef.current.style.backgroundColor = "#e3e3e3";

        placeholderRef.current.textContent = "CREATIVERORI";
      });
    });

    // cleanup on unmount
    return () => {
      items.forEach((item) => {
        item.replaceWith(item.cloneNode(true)); // removes listeners
      });
    };
  }, []);

  return { containerRef, placeholderRef, subHeaderRef };
};
// let menuList = document.querySelector("#menuList");
// function toggleMenu() {
//   if (menuList.style.opacity == "0") {
//     menuList.style.transition = "0.3s";
//     menuList.style.opacity = "1";
//     menuList.style.pointerEvents = "auto";
//   } else {
//     menuList.style.transition = "0.3s";
//     menuList.style.opacity = "0";
//   }
// }
