import ScrollReveal from "scrollreveal";

export function animateService (element, origin, interval, distance) {

    const sr = ScrollReveal();

    sr.reveal(element, {
        delay: 400,
        duration: 1000,
        distance: `${distance}`,
        origin: `${origin}`,
        interval: interval,
        mobile: true,
        easing: 'ease-out',
        viewFactor: 0.5,
    });
}