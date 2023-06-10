import { createEffect, createSignal } from "solid-js";
import "../styles/animations.css";
import "../styles/navbar.css";
import "../styles/utilities.css";
export default function Navbar() {
  const [headerOpen, setHeaderOpen] = createSignal(false);

  createEffect(() => {
    if (typeof window !== "undefined") {
      const fadeElems = document.querySelectorAll(".has-fade");
      const toggleFade = () => {
        if (headerOpen()) {
          document.body.classList.add("noscroll");
          fadeElems.forEach(function (element) {
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
          });
        } else {
          document.body.classList.remove("noscroll");
          fadeElems.forEach(function (element) {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
          });
        }
      };

      toggleFade();
    }
  });
  return (
    <header class={`header ${headerOpen() ? "open" : ""}`}>
      <div class="overlay has-fade"></div>
      <nav class="d-flex justify-content-between justify-content-lg-start ai-center">
        <a href="/" class="header-logo">
          <img src="brand.png" alt="Embassy" />
        </a>
        <a
          href="#"
          class="header-toggle d-lg-none"
          onclick={() => setHeaderOpen(!headerOpen())}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
        <div class="header-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>
      </nav>
      <div class="header-menu has-fade">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
        <a href="">Careers</a>
      </div>
    </header>
  );
}
