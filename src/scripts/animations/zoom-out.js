import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const elements = gsap.utils.toArray("[data-animation='zoom-out']");

export const zoomOut = () => {
    elements.forEach(el =>
        gsap.from(el, {
            scale:1.2,
            duration:0.8,
            scrollTrigger: {
                trigger: el,
                start: "top 60%",

            }
        }
    )
)};