let rock = document.querySelector(".rock");
let papar = document.querySelector(".papar");
let scissors = document.querySelector(".scissors");

let user = document.querySelector(".user")
console.log(user.firstElementChild.outerHTML)

let computer = document.querySelector(".computer");
let choose;

let ulNumber = document.querySelector("ul.number");

let title = document.querySelector(".title");
console.log(title.lastElementChild.textContent)


rock.addEventListener("click", function(e){
    user.firstElementChild.outerHTML = `<img src="./img/rock.fae7b245.png" alt="qo'l">`;
    choose = Math.floor(Math.random()*3);
    if(choose===0){
        ulNumber.querySelector("li:nth-child(2)").textContent = `${(Number(ulNumber.querySelector("li:nth-child(2)").textContent) + 1)}`
        computer.firstElementChild.outerHTML = `<img src="./img/rock.fae7b245.png" alt="qo'l">`;
        
    }if(choose===1){
        computer.firstElementChild.outerHTML = `<img src="./img/paper.24d69089.png" alt="qo'l">`;
        ulNumber.querySelector("li:nth-child(3)").textContent = `${(Number(ulNumber.querySelector("li:nth-child(3)").textContent) + 1)}`
    }if(choose===2){
        computer.firstElementChild.outerHTML = `<img src="./img/scissors.0dc12241.png" alt="qo'l">`;
        ulNumber.querySelector("li:first-child").textContent = `${(Number(ulNumber.querySelector("li:first-child").textContent) + 1)}`
    }
    title.lastElementChild.textContent = `${(Number(title.lastElementChild.textContent)+1)}`
})

papar.addEventListener("click", function(e){
    user.firstElementChild.outerHTML = `<img src="./img/paper.24d69089.png" alt="qo'l">`
    choose = Math.floor(Math.random()*4);
    if(choose==0){
        computer.firstElementChild.outerHTML = `<img src="./img/rock.fae7b245.png" alt="qo'l">`;
        ulNumber.querySelector("li:first-child").textContent = `${(Number(ulNumber.querySelector("li:first-child").textContent) + 1)}`
    }if(choose==1){
        ulNumber.querySelector("li:nth-child(2)").textContent = `${(Number(ulNumber.querySelector("li:nth-child(2)").textContent) + 1)}`
        computer.firstElementChild.outerHTML = `<img src="./img/paper.24d69089.png" alt="qo'l">`;
    }if(choose===2){
        computer.firstElementChild.outerHTML = `<img src="./img/scissors.0dc12241.png" alt="qo'l">`;
        ulNumber.querySelector("li:nth-child(3)").textContent = `${(Number(ulNumber.querySelector("li:nth-child(3)").textContent) + 1)}`
    }
    title.lastElementChild.textContent = `${(Number(title.lastElementChild.textContent)+1)}`
})

scissors.addEventListener("click", function(e){
    user.firstElementChild.outerHTML = `<img src="./img/scissors.0dc12241.png" alt="qo'l">`
    choose = Math.floor(Math.random()*4);
    if(choose==0){
        computer.firstElementChild.outerHTML = `<img src="./img/rock.fae7b245.png" alt="qo'l">`;
        ulNumber.querySelector("li:nth-child(3)").textContent = `${(Number(ulNumber.querySelector("li:nth-child(3)").textContent) + 1)}`
    }if(choose==1){
        computer.firstElementChild.outerHTML = `<img src="./img/paper.24d69089.png" alt="qo'l">`
        ulNumber.querySelector("li:first-child").textContent = `${(Number(ulNumber.querySelector("li:first-child").textContent) + 1)}`
    }if(choose===2){
        ulNumber.querySelector("li:nth-child(2)").textContent = `${(Number(ulNumber.querySelector("li:nth-child(2)").textContent) + 1)}`
        computer.firstElementChild.outerHTML = `<img src="./img/scissors.0dc12241.png" alt="qo'l">`
    }
    title.lastElementChild.textContent = `${(Number(title.lastElementChild.textContent)+1)}`
})
