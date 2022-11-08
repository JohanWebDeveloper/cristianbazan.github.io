const hamburger = document.querySelector(".hamburger"); 
const navMenu = document.querySelector(".ul-nav"); 

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


document.querySelectorAll(".link-nav").forEach(n=> n.
            addEventListener("click", ()=>{
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }))




alert("The projects linked to the 'Projects' page are on revision. I'm going to add them it breafly")
const aboutMe = document.getElementById('menuAboutMe')


