import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const elements = gsap.utils.toArray("[data-animation='sticky']");
const imagesHeight = document.querySelector('.home-usp').getBoundingClientRect().height;

export const stickyAnimation = () => {
    elements.forEach(el => {
        const flippingWordsContainer = el.querySelector('[data-words]');
        const words = flippingWordsContainer.getAttribute('data-words').split(',');

        words.forEach(word => {
            const span = document.createElement('span');
            span.innerHTML = word;
            flippingWordsContainer.appendChild(span);
        });

        return gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 100",
                end: `+=${imagesHeight}`,
                pin: true,
                onUpdate: self => {
                    gsap.to(flippingWordsContainer, {
                        y: `-${(self.progress * 100).toFixed(0)}%`,
                        transformOrigin: 'left bottom'
                    });
                }
            }
        }
        )
    }
    )
};