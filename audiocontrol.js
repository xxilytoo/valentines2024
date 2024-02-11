document.addEventListener('click', songcontrol);
function songcontrol() {
    document.getElementById('player').play();
    document.removeEventListener('click', musicPlay);
}