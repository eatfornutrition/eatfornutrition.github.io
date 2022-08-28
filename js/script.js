const adExit = document.querySelector(".fa-arrow-right-from-bracket");
const ad = document.querySelector(".ad");
const main = document.querySelector("main");

adExit.addEventListener("click", adClosure);

function adClosure(){
    ad.classList.add("inactive");
    main.style.opacity = '100%';
}