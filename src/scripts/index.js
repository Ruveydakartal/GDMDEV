import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from 'swiper/bundle';
import { stickyAnimation } from './animations/sticky';
import {fadeInUpScrollTrigger} from './animations/fade-in-up';
import{scrollFadeIn} from './animations/scroll-fade-in';
import { zoomOut } from './animations/zoom-out';
import {zoomOutScroll} from './animations/zoom-out-scroll';
gsap.registerPlugin(ScrollTrigger);


const masterTimeline = gsap.timeline();

masterTimeline
    .add(stickyAnimation)
    .add(fadeInUpScrollTrigger)
    .add(scrollFadeIn)
    .add(zoomOut)
    .add(zoomOutScroll);




const tl = gsap.timeline();
tl.to(".logo-box",  {
    opacity:1,
    duration:1
})
tl.to(".home-hero__subtitle", {
    opacity:1,
})
tl.to(".home-hero__watermark",  {
    opacity:1
})


 const homeIntroTL = gsap.timeline({
     paused:true,
     scrollTrigger:{
         trigger:".home-intro",
         start:"top 40%"
     }
 })

homeIntroTL
.fromTo(".home-intro__image", {yPercent:-100}, {scrollTrigger:{
    trigger:".home-intro__image",
    start:"top 40%",
},duration: 2, yPercent:0, ease: "slow",})
.fromTo(".home-intro__image img", {yPercent:100}, {duration: 2, yPercent: 0, ease:"slow"},"<")
.fromTo(".home-intro__sub2",{opacity:0},{opacity:1,ease:"power3",duration:2},)


const homeContactTL = gsap.timeline({
    scrollTrigger:{
        trigger: ".home-contact",
        start: "bottom 100%",
        scrub: true
    }
})

homeContactTL
.from(".text-box",{
    y: 200,
    ease: "slow"
})

gsap.from(".footer__link", {
    scrollTrigger:{
        trigger:".footer__link",
        start:"top 98%"
    },
    delay:0.5,
    y:20,
    opacity:0,
    stagger:0.6,
})