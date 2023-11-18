/* const mainContainerContents = document.querySelectorAll('.main-container-content');
const navLinks = document.querySelectorAll(".nav-link");
const menuButton = document.getElementById('navbarTogglerButton');

document.addEventListener("DOMContentLoaded", () => {

    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', (event) => {
            console.log(event);
            //showHideContent(event);
            activeNavLink(event);
            menuButton.click();
        });
    });

});

function showHideContent(event) {

    mainContainerContents.forEach((mainContainerContent) => {
        if (mainContainerContent.id == event.target.dataset.target) {
            mainContainerContent.style.display = 'flex';

        }
        else {
            mainContainerContent.style.display = 'none';
        }
    });
}

function activeNavLink(event) {
    navLinks.forEach((navLink) => {
        if (navLink.getAttribute('data-target') == event.target.dataset.target) {
            navLink.classList.add('active');
        }
        else {
            navLink.classList.remove('active');
        }
    });
} */