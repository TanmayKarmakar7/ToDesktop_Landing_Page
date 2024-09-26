const navDialog = document.querySelector("#nav-dialog");

function handleMenu(){
    navDialog.classList.toggle("hidden");
}

const intialTranslateLTR = -48*4;
const intialTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLTR, speed){
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener("scroll", scrollHandler);
        } else {
            document.removeEventListener("scroll", scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLTR){
            totalTranslate = translateX + intialTranslateLTR;
        } else {
            totalTranslate = -(translateX + intialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}

const line1 = document.querySelector("#line-1");
const line2 = document.querySelector("#line-2");
const line3 = document.querySelector("#line-3");
const line4 = document.querySelector("#line-4");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, false, -0.80);




const dtElements = document.querySelectorAll("dt");

dtElements.forEach(element => {
    element.addEventListener("click", () => {
        const ddId = element.getAttribute("aria-controls");
        const ddElement = document.querySelector(`#${ddId}`);
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    })
})