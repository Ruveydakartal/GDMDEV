import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {zoomOutScroll} from "./animations/zoom-out-scroll"
import { fadeInUpScrollTrigger } from './animations/fade-in-up';


gsap.registerPlugin(ScrollTrigger);

const masterTimeline = gsap.timeline();

masterTimeline
.add(zoomOutScroll)
.add(fadeInUpScrollTrigger)

const contactTitle = SplitType.create('#contact__title', {absolute:true});

const contactLoader =  gsap.timeline()
contactLoader
.to('.char', {
    y:0,
    stagger:0.05,
    delay:0.2,
    duration:0.1,
    ease:'POWER3',
    opacity:1
})
.fromTo(".contact-hero__image", {yPercent:-100}, {duration: 2, yPercent:0, ease: "slow",})
.fromTo(".contact-hero__image img", {yPercent:100}, {duration: 2, yPercent: 0, ease:"slow"},"<")
.fromTo(".contact-header__text",{opacity:0, y:30},{opacity:1,ease:"power3", y:0, duration:2, stagger:0.1},"=-1")

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