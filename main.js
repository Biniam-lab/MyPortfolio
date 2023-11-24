const mainContainerContents = document.querySelectorAll('.main-container-content');
const navLinks = document.querySelectorAll(".nav-link");

document.addEventListener("DOMContentLoaded", () => {

    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', (event) => {
            showHideContent(event);
            activeNavLink(event);
            if (window.innerWidth < 992)
                document.getElementById('navbarTogglerButton').click();
        });
    });

});

function showHideContent(event) {

    mainContainerContents.forEach((mainContainerContent) => {
        if (mainContainerContent.id == event.target.dataset.target) {
            mainContainerContent.hidden = false;

        }
        else {
            mainContainerContent.hidden = true;
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
}
