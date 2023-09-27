import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const elements = gsap.utils.toArray("[data-animation='zoom-in-scroll']");

export const zoomInScroll = () => {
    elements.forEach(el =>
        gsap.to(el, {
            scale:1.2,
            duration:0.8,
            scrollTrigger: {
                trigger: el,
                start: "top top",
                scrub:true
            }
        }
    )
)};