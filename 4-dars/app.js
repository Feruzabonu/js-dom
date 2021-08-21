// -----------------task_1------------------------

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

empties.forEach(function(empty){
    empty.addEventListener("dragstart", drogStart);
empty.addEventListener("dragend", drogEnd);
empty.addEventListener("dragenter", drogEnter);
empty.addEventListener("dragleave", drogLeave);
empty.addEventListener("dragover", drogOver);
empty.addEventListener("drop", drogDrop);
})

fill.parentElement.style.boxShadow = " 2px 2px 15px 2px rgba(212, 0, 255, 0.856)"

function drogStart(e){
    e.target.parentElement.classList.add("hold");
    setTimeout(function(){
        e.target.classList.add("invisible")
    },0)
    
};

function drogEnd(e){
    e.target.parentElement.classList.remove("hold");
    e.target.classList.remove("invisible");
    e.target.style.boxShadow = " none"
};

function drogEnter(e){
    e.target.classList.add("hovered");
    e.preventDefault();
};

function drogLeave(e){
    e.preventDefault();
    e.target.classList.remove("hovered")
    e.target.style.boxShadow = " none"
}

function drogOver(e){
    e.preventDefault();
}
function drogDrop(e){
    e.target.classList.remove("hovered")
    e.target.style.boxShadow = " 2px 2px 15px 2px rgba(212, 0, 255, 0.856)"
    e.target.appendChild(fill);
}

// -----------------------------task_2------------------------------

const draggables = document.querySelectorAll("p");
const containers = document.querySelectorAll(".containers");
let dropElement;

draggables.forEach(function(draggable){
    draggable.addEventListener("dragstart",function(e){
     e.target.classList.add("hover")
     dropElement = e.target;
    })


    draggable.addEventListener("dragend", function(e){
        e.target.classList.remove("hover")
    })
})

containers.forEach(function(container){

    container.addEventListener("dragover",function(e){
        e.preventDefault();
    })
    container.addEventListener("drop", function(e){
       container.appendChild(dropElement);
    })
})

// -----------------------------task_3------------------------------

const openModal = document.querySelector(".open-modal");
const modalWrapper = document.querySelector(".modal-wrapper");
const closeModal = document.querySelector(".close-modal");

openModal.addEventListener("click", function(e){
    modalWrapper.style.display = "flex";
});

closeModal.addEventListener("click", function(){
    modalWrapper.style.display = "none";
});
