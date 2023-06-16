import gsap from "gsap";

const imageContainer = document.querySelector('.image-container');
const myObject = { percent: 0 };

gsap.to(
    myObject,
    {
        duration: 2,
        percent: 100,
        repeat: -1,
        yoyo: true,
        ease: "steps(29)",
        onUpdate: () => {
            imageContainer.style.maskPosition = `${myObject.percent}% 0%`;
        }
    }
)