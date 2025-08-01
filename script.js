let projects = document.querySelector('#projects')
let contacts = document.querySelector('#contacts')
let education = document.querySelector('#education_button')
let interests = document.querySelector('#interests_button')


projects.onclick = function(){
    window.open('https://github.com/Marcod3s','_blank')
}
contacts.onclick = function(){
    window.open('pages/contacts.html','_blank')
}
interests.onclick = function(){
    window.open('pages/interests.html','_blank')
}
education.onclick = function(){
    window.open('pages/education.html','_blank')
}