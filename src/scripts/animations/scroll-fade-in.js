import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const elements = gsap.utils.toArray("[data-animation='scroll-fade-in']");

export const scrollFadeIn = () => {
    elements.forEach(el =>
        gsap.from(el, {
            opacity: 0,
            duration:2,
            scrollTrigger: {
                trigger: el,
                start:"center 90%",
                end: "center 40%",
                scrub:true,
                toggleActions: "play none pause none"
            }
        }
    )
)};
