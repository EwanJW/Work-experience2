let color = document.getElementById('color')
let textcolour = document.getElementById('text color')
let button1 = document.getElementById('light-mode')
let button2 = document.getElementById('dark-mode')
let button3 = document.getElementById('zoom-in')
let button4 = document.getElementById('zoom-out')
let navbar = document.getElementById('navbar')
let dropbtn = document.getElementById('dropbtn')
let dropdowncontent = document.getElementById(dropdowncontent)
let dropdown = document.getElementById(dropdown)



function darkMode() {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");

    navbar.classList.add("dark-mode");
    navbar.classList.remove("light-mode");
    
    if(darkMode) navbar.style.backgroundColor=('#008888')
    if(darkMode) body.style.color='white'
    if(darkMode) dropdowncontent.style.color='white'
    if(darkMode) dropdowncontent.style.backgroundColor='white'
    if(darkMode) dropdown.style.backgroundColor='white'

}

function lightMode() {
    document.body.classList.add('light-mode')
    document.body.classList.remove('dark-mode')

    navbar.classList.add('light-mode')
    navbar.classList.remove('dark-mode')

    if(lightMode) navbar.style.backgroundColor=('#b3d9ff')
    if(lightMode) navbar.style.color='black'
    if(lightMode) navbar.style.color='black'
    if(lightMode) dropdowncontent.style.color='black'
}