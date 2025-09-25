import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const navLinks = useRef([]);

  const moveActiveBox = (el) => {
    if (!el || !activeBox.current) return;
    const box = activeBox.current;
    box.style.top = el.offsetTop + "px";
    box.style.left = el.offsetLeft + "px";
    box.style.width = el.offsetWidth + "px";
    box.style.height = el.offsetHeight + "px";
  };

  const setActiveLink = (el) => {
    if (!el || el === lastActiveLink.current) return;
    lastActiveLink.current?.classList.remove("active");
    el.classList.add("active");
    lastActiveLink.current = el;
    moveActiveBox(el);
  };

  useEffect(() => {
    const linkForId = (id) =>
      navLinks.current.find((a) => a?.getAttribute("href") === `#${id}`);

    // Adjust if you have a fixed header
    const HEADER_H = 80; // px
    const BOUNDARY_PAD = 12; // hysteresis to avoid jitter (px)
    let ticking = false;

    const ids = navLinks.current
      .map((a) => a?.getAttribute("href")?.slice(1))
      .filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const pickActive = () => {
      ticking = false;

      // activation line = just below header, near the center of the viewport
      const activationY = HEADER_H + window.innerHeight * 0.4;

      // Find section whose rect spans activationY, else the nearest to it
      let best = null;
      let bestDist = Infinity;

      for (const sec of sections) {
        const r = sec.getBoundingClientRect();
        const top = r.top;
        const bot = r.bottom;

        // inside this section?
        if (top - BOUNDARY_PAD <= activationY && activationY <= bot + BOUNDARY_PAD) {
          // prefer the one whose center is closest to activation line
          const mid = (top + bot) / 2;
          const d = Math.abs(mid - activationY);
          if (d < bestDist) {
            bestDist = d;
            best = sec;
          }
        } else {
          // if activationY not inside any (e.g., near edges), pick nearest edge
          const d = Math.min(Math.abs(top - activationY), Math.abs(bot - activationY));
          if (d < bestDist) {
            bestDist = d;
            best = sec;
          }
        }
      }

      if (best) {
        const a = linkForId(best.id);
        if (a) setActiveLink(a);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(pickActive);
        ticking = true;
      }
    };

    const onResize = () => {
      // re-run to settle the box and account for layout changes
      pickActive();
      if (lastActiveLink.current) moveActiveBox(lastActiveLink.current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // initial activate
    pickActive();
    if (navLinks.current[0] && !lastActiveLink.current) {
      setActiveLink(navLinks.current[0]);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Work", link: "#work" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link }, i) => (
        <a
          href={link}
          key={link}
          ref={(el) => (navLinks.current[i] = el)}
          className="nav-link"
          onClick={(e) => setActiveLink(e.currentTarget)}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox} />
    </nav>
  );
};

Navbar.propTypes = { navOpen: PropTypes.bool.isRequired };
export default Navbar;
