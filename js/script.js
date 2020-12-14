
window.addEventListener("DOMContentLoaded",getData);
const link = "http://nirajan.dk/final-project/wp-json/wp/v2/v_studio?_embed";

function getData() {

    const urlParams = new URLSearchParams(window.location.search);
    console.log("URLSearchParams " + window.location);
    const the_work_id = urlParams.get("v_studio_id");
    console.log(the_work_id);

    if(the_work_id) {
        fetch("http://nirajan.dk/final-project/wp-json/wp/v2/v_studio/" + the_work_id + "?_embed")
        .then(initial => initial.json())
        .then(showWork)
    }
    else{
        fetch(link)
.then(initial => initial.json())
.then(callBack)
    }

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
    const a = clone.querySelector(".works a");
    const divWorkDescription = clone.querySelector("#work-desc");

   if(divWorkDescription){
       divWorkDescription.innerHTML = singleWork.content.rendered;
   }
   clone.querySelector(".title").textContent = singleWork.title.rendered;
    clone.querySelector(".works-image").src = img_url;
    if(a){
           a.href += singleWork.id;
    }

     elMain.appendChild(clone);
}


/*burger menu*/
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

//image popup//
const imgBox = document.querySelectorAll(".imgBox");
imgBox.forEach(popUp => popUp.addEventListener("click", () => {
    popUp.classList.toggle("active");
}))

