'use strict';

const overlayDOM = document.querySelector(".overlay")
const modalDOM = document.querySelector(".modal")
const closeModalDOM = document.querySelector(".close-modal")
const showModalDOM = document.querySelectorAll(".show-modal")


for (let i = 0; i < showModalDOM.length; i++) {
    showModalDOM[i].addEventListener("click", () => {
        modalDOM.classList.remove("hidden");
        overlayDOM.classList.remove("hidden");
        }
    );
}

closeModalDOM.addEventListener("click", () => {
        modalDOM.classList.add("hidden")
        overlayDOM.classList.add("hidden")
})

overlayDOM.addEventListener("click", () => {
    modalDOM.classList.add("hidden")
    overlayDOM.classList.add("hidden")
})


document.addEventListener("keydown", (e)=>{
    if(e.keyCode === 27){
        if (!modalDOM.classList.contains("hidden")) {
            modalDOM.classList.add("hidden")
            overlayDOM.classList.add("hidden")
        }
    }  
})