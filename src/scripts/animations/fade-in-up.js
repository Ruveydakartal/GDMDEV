import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const elements = gsap.utils.toArray("[data-animation='fade-in-up']");

export const fadeInUpScrollTrigger = () => {
    elements.forEach(el =>
        gsap.from(el, {
            opacity: 0,
            y: 20,
            stagger:0.7,
            scrollTrigger: {
                trigger: el,
                start: "center 90%",
            }
        }
    )
)};