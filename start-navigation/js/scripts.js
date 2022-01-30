function toggleMenu(){
    // console.log("It worked")
    document.getElementById("primaryNav").classList.toggle("open")
    document.getElementById("hamburgerbttn").classList.toggle("open")
}

const x  = document.getElementById("hamburgerbttn")
x.onclick = toggleMenu;