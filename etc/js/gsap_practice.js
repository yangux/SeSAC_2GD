// gsap.to(".circle", { x: 200, rotation: 360, duration: 2 });

gsap.to(".circle", {
  x: 200,
  duration: 2,
  scrollTrigger: {
    trigger: ".circle",
    start: "top 60%",
    end: "top 40%",
    toggleActions: "restart resume reverse none",
    markers: true,
  },
});
