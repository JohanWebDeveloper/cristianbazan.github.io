
// Presentation of About me

const presentation1 = document.querySelector('.presentation-1');
const presentation2 = document.querySelector('.presentation-2');
const presentation3 = document.querySelector('.presentation-3');

const principalVector = document.getElementById('principal-vector');

const knowledge = document.querySelector('.knowledge-container')

principalVector.addEventListener('click',()=>{
    presentation1.classList.toggle("inactive");
    presentation2.classList.toggle("active");
    knowledge.classList.toggle("active");
    principalVector.classList.toggle("inactive");
}) 

const more = document.querySelector('.more-aboutMe');

more.addEventListener('click',()=>{
    knowledge.classList.remove("active")
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