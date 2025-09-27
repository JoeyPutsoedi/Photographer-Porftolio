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
        containerRef.current.style.color = "#878787";

        placeholderRef.current.style.transition = "0.4s";
        placeholderRef.current.style.color = "#878787";
        placeholderRef.current.textContent = event.target.textContent;
      });

      item.addEventListener("mouseout", () => {
        if (!containerRef.current || !placeholderRef.current) return;

        containerRef.current.style.backgroundColor = "#e3e3e3";
        containerRef.current.style.color = "#000";

        placeholderRef.current.style.color = "#000";
        placeholderRef.current.textContent = "CREATIVEORI";
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

// const subHeaders = [
//   "Photo Direction. Videography. Art.",
//   "Videography. Art. Photo Direction. ",
//   "Creative Powerhouse.",
// ];

// const obtains = document.querySelectorAll("#item-1, #item-2, #item-3, #item-4");
// const placeHolder = document.querySelector(".placeholder");
// const subheader = document.querySelector("#subheader");
// const container = document.querySelector(".body");

// obtains.forEach((item) => {
//   item.addEventListener("mouseover", (event) => {
//     container.style.transition = "0.4s";
//     placeHolder.style.transition = "0.4s";
//     container.style.backgroundColor = "#0d0d0d";
//     container.style.color = "#878787";
//     placeHolder.style.color = "#878787";
//     placeHolder.textContent = event.target.textContent;
//   });
//   item.addEventListener("mouseout", (event) => {
//     container.style.backgroundColor = "#e3e3e3";
//     container.style.color = "#000";
//     placeHolder.style.color = "#000";
//     placeHolder.textContent = "CREATIVE RORI";
//   });
// });
// const openMenu = document.querySelector(".open");
// let menuList = document.querySelector("#menuList");
// const closeMenu = document.querySelector("#close-menu");

// const mainVideo = document.querySelector(".vidPlaceholder");
// const videoList = document.querySelectorAll(".footVid");
// const menu = document.querySelector(".set2Vid");
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

// videoList.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     mainVideo.src = event.target.src;
//   });
// });

// openMenu.onclick = () => {
//   menu.classList.add("active");
// };
// //Close Cart
// openMenu.ondblclick = () => {
//   menu.classList.remove("active");

// };
