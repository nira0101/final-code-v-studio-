
window.addEventListener("DOMContentLoaded",getData);
const link = "http://nirajan.dk/final-project/wp-json/wp/v2/v_studio?_embed";

function getData() {
     fetch(link)
.then(initial => initial.json())
.then(callBack)
}
function callBack(data){
    console.log(data);
    data.forEach(showWork);

}

function showWork(singleWork){
    console.log(singleWork)
    const img_url = singleWork._embedded["wp:featuredmedia"][0].source_url;
     const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    const elMain = document.querySelector(".work-template");

   clone.querySelector(".title").textContent = singleWork.title.rendered;
    clone.querySelector(".works-image").src = img_url;

     elMain.appendChild(clone);
}



const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click",show);
closeMenu.addEventListener("click",close);

function show(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
}
function close(){
    mainMenu.style.top = "-100%";
}
