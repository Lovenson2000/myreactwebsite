import ScrollReveal from "scrollreveal";

export function animateAbout (element, origin, interval) {

    const sr = ScrollReveal();

    sr.reveal(element, {
        delay: 800,
        duration: 1400,
        distance: "30px",
        origin: `${origin}`,
        interval: interval,
        mobile: true,
        easing: 'ease-out',
        viewFactor: 0.6,
    });
}