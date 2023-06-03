gsap.fromTo(
  "#logo",
  { x: "-100%", opacity: 0 },
  { x: 0, opacity: 1, duration: 1 }
);

gsap.fromTo(
  "img",
  { opacity: 0, scale: 0 },
  {
    duration: 1,
    opacity: 1,
    scale: 1,
  }
);
gsap.fromTo(
  "h1",
  { opacity: 0, y: "-100%" },
  {
    duration: 1,
    opacity: 1,
    y: 0,
  }
);
gsap.fromTo(
  "p",
  { opacity: 0, x: "100%" },
  {
    duration: 1,
    opacity: 1,
    x: 0,
  }
);
gsap.fromTo(
  ".btn-holder",
  { opacity: 0, y: "100%" },
  {
    duration: 1,
    opacity: 1,
    y: 0,
  }
);
gsap.fromTo(
  ".icon",
  { opacity: 0, y: "100%" },
  {
    duration: 1,
    opacity: 1,
    y: 0,
  }
);
