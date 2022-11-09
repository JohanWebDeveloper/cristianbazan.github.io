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




// alert("The projects linked to the 'Projects' page are on revision. I'm going to add them breafly")

const aboutMe = document.getElementById('menuAboutMe');
const modalCont = document.querySelector('.modal-container');
const projectsAlert = document.getElementById('projects')
const aboutMeCont = document.querySelector('.aboutMeContainer')

aboutMe.addEventListener('click',()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    projectsAlert.style.opacity = '0';
    aboutMeCont.style.opacity = '0'; 
    modalCont.classList.toggle('active');
    
})



// Presentation of About me

const presentation1 = document.querySelector('.presentation-1');
const presentation2 = document.querySelector('.presentation-2');
const presentation3 = document.querySelector('.presentation-3');

const principalVector = document.getElementById('principal-vector');

const knowledge = document.querySelector('.knowledge-container')



principalVector.addEventListener('click',()=>{
    aboutMe.style.display = 'none'; 
    modalCont.classList.remove('active');
    projectsAlert.style.opacity = '1';
    aboutMeCont.style.opacity = '1';
    presentation1.classList.toggle('inactive');
    presentation2.classList.toggle("active");
    knowledge.classList.toggle("active");
    principalVector.classList.toggle("inactive");
}) 

const more = document.querySelector('.more-aboutMe');

more.addEventListener('click',()=>{
    knowledge.classList.remove("active"); 
   
    presentation2.classList.remove("active");
    presentation3.classList.toggle("active");
})



// Presentation of Projects
const modalProjects = document.querySelector('.modalProjects-container')
const closeModalProjects = document.querySelector('.closeIcon-projects')
const projectsButtons = document.getElementById('projects')

projectsButtons.addEventListener('click',()=>{
    modalProjects.classList.toggle("active")
})

closeModalProjects.addEventListener('click',()=>{
    modalProjects.classList.remove("active")
})