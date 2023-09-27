import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import {fadeInUpScrollTrigger} from './animations/fade-in-up';
import { zoomInScroll } from './animations/zoom-in-scroll';
import { zoomOutScroll } from './animations/zoom-out-scroll';
import { zoomOut } from './animations/zoom-out';
import { scrollFadeIn } from './animations/scroll-fade-in';
import 'swiper/css';
import Swiper from 'swiper';


const masterTimeline = gsap.timeline();
masterTimeline
.add(fadeInUpScrollTrigger)
.add(zoomInScroll)
.add(zoomOutScroll)
.add(zoomOut)
.add(scrollFadeIn);


const swiper = new Swiper(".swiper", {
   effect:'coverflow',
   mousewheel: true,
   slidesPerView: 1
})

const aboutWWDTL = gsap.timeline({
    paused:true,
    scrollTrigger:{
    trigger:".about-wwd2",
    start:"top 40%"
    }
    })

aboutWWDTL
    .fromTo(".about-wwd2__image", {yPercent:-100}, {scrollTrigger:{
        trigger:".about-wwd2__image",
        start:"top 40%",
    },duration: 2, yPercent:0, ease: "slow",})
    .fromTo(".about-wwd2__image img", {yPercent:100}, {duration: 2, yPercent: 0, ease:"slow"},"<")

const aboutContactTL = gsap.timeline({
        scrollTrigger:{
            trigger: ".about-contact",
            start: "bottom 100%",
            scrub: true
        }
    })
    
    aboutContactTL
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

