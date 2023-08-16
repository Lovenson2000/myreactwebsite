import ScrollReveal from "scrollreveal";

export function animateHome (element, origin) {

    const sr = ScrollReveal();

    sr.reveal(element, {
        delay: 800,
        duration: 1400,
        distance: "30px",
        origin: `${origin}`,
        interval: 400,
        mobile: true,
        easing: 'ease-out',
        viewFactor: 0.8,
    });
}