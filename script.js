const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  ScrollReveal().reveal(".container .letter-m", {
    duration: 1000,
    delay: 1000,
  });
  ScrollReveal().reveal(".container img", {
    duration: 1000,
    origin: "right",
    delay: 1500,
  });
  ScrollReveal().reveal(".container .h4__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
  });
  ScrollReveal().reveal(".container .h4__right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
  });
  ScrollReveal().reveal(".container .explore button", {
    ...scrollRevealOption,
    duration: 1000,
    delay: 2500,
  });