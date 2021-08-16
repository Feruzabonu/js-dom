
// -------------------------Navbar--------------------------------------


// Part of the creation ---------------------------------------------

let ulElement = document.createElement("ul");

let ulList_1 = document.createElement("li");
ulList_1.className=' ';
let link_1 = document.createElement("a");
link_1.setAttribute("href", "#");
link_1.textContent="Home";
ulList_1.appendChild(link_1);
ulElement.appendChild(ulList_1);

let ulList_2 = document.createElement("li");
ulList_2.className=' ';
let link_2 = document.createElement("a");
link_2.setAttribute("href", "#");
link_2.textContent="About";
ulList_2.appendChild(link_2);
ulElement.appendChild(ulList_2);

let ulList_3 = document.createElement("li");
ulList_3.className=' ';
let link_3 = document.createElement("a");
link_3.setAttribute("href", "#");
link_3.textContent="Contact";
ulList_3.appendChild(link_3);
ulElement.appendChild(ulList_3);

let ulList_4 = document.createElement("li");
ulList_4.className=' ';
let link_4 = document.createElement("a");
link_4.setAttribute("href", "#");
link_4.textContent="Services";
ulList_4.appendChild(link_4);
ulElement.appendChild(ulList_4);

let ulList_5 = document.createElement("li");
ulList_5.className=' ';
let link_5 = document.createElement("a");
link_5.setAttribute("href", "#");
link_5.textContent="Blog";
ulList_5.appendChild(link_5);
ulElement.appendChild(ulList_5);

document.body.appendChild(ulElement);

// Part of the styling ----------------------------------------------------

document.body.style.margin="0px";
document.body.style.padding="0px";
document.body.style.boxSizing="border-box";

ulElement.style.margin="0px";
ulElement.style.padding="0px";
ulElement.style.listStyleType="none";
ulElement.style.backgroundColor="#f3f3f3";
ulElement.style.display="flex";
ulElement.style.justifyContent="left";
ulElement.style.alignItems="center";
ulElement.style.width="100%";

let list = document.querySelectorAll("li");

for(let el of list){
    el.style.cursor="pointer"
};

let links = document.querySelectorAll("a");

for(let el of links ){
    el.style.textDecoration="none";
    // el.style.color="#000";
    el.style.fontFamily="'Lato', sans-serif";
    el.style.margin="0px 20px 0px 20px";
    el.style.lineHeight="55px";
}

// Part of events ----------------------------------------------------

const clear = (list)=>{
    for(let el of list){
        el.className=' '
    }
};

const activ = (list)=>{
    
    for(let el of list){
        
        el.addEventListener("click", function(){
            clear(list);
            el.classList.add("activ");
        });
    }
};

activ(list);

const hover = (list)=>{
    for(let el of list){
        el.addEventListener("mouseover", function(){
           el.setAttribute("id","hover")
            
        })
        el.addEventListener("mouseout", function(){
            el.setAttribute("id"," ")
           
        })
    }
};

hover(list);

//---------------Password-------------------------

// Part of the creation ---------------------------------------------

let password = document.createElement('input');
password.setAttribute("type","password");

let icon = document.createElement("i");
icon.className = "fas fa-eye-slash";
password.appendChild(icon);

document.body.appendChild(password)
document.body.appendChild(icon)

// Part of the styling ----------------------------------------------------

password.style.margin="50px 10px 0px 20px";
password.style.height="30px";
password.style.width="200px";
password.style.fontSize="20px";
password.style.color="rgba(0, 0, 0, 0.678)";
password.style.border="none";
password.style.borderBottom="solid 2px rgba(0, 0, 0, 0.678)";
password.style.outline="none";

icon.style.cursor="pointer";
icon.style.color="rgba(0, 0, 0, 0.678)"

// Part of events ----------------------------------------------------

let eye ;

icon.addEventListener("click", function(){
      if(icon.className=="fas fa-eye-slash"){
        icon.className="fas fa-eye";
        password.type="text";
        
      }else{
        icon.className="fas fa-eye-slash";
        password.type="password";
      }
})

