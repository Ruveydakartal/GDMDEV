import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const elements = gsap.utils.toArray("[data-animation='top-bottom-loadin']");

export const topBottomLoadin = () => {
    elements.forEach(el =>
        gsap.fromTo(el, {
            yPercent:-100}, {duration: 2, yPercent:0, ease: "slow"
        })
        .fromTo(el img,{
            duration: 2, yPercent: 0, ease:"slow"},"<"
        )
)};
