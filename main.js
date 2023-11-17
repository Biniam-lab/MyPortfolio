/* document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".links");
    const containerContents = document.querySelectorAll(".main-container-content");
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })

    document.getElementById("about-me-section").style.display = "block";

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const dataTarget = link.getAttribute("data-target");
            containerContents.forEach((containerContent) => {
                containerContent.style.display = "none";
                link.classList.toggle("active");

            });

            document.getElementById(dataTarget).style.display = "block";
            link.classList.toggle("active");

        });
    });

}); 
const selectedNavLink = navLink.getAttribute('data-target');
        const mainContainerContents = document.querySelectorAll('.main-container-content');
        mainContainerContents.forEach((mainContainerContent) => {
            mainContainerContent.style.display = 'none';
        });
        document.getElementById("about-me-section").style.display = "block";
        
    document.getElementById("about-me-section").style.display = "block";
*/

/* const mainContainer = document.querySelectorAll(".main-container-content");
switch (id) {
    case "about-me-section":
        console.log(id);
        mainContainer.style.display = "none";
        document.getElementById("about-me-section").style.display = "block";
        break;
    case "education-and-certification-section":
        console.log(id);
        break;
    case "projects-and-experience-section":
        console.log(id);
        break;
    case "contact-info-section":
        console.log(id);
        break;

} */
const mainContainerContents = document.querySelectorAll('.main-container-content');
const navLinks = document.querySelectorAll(".nav-link");

document.addEventListener("DOMContentLoaded", () => {

    mainContainerContents.forEach((mainContainerContent) => {
        if (mainContainerContent.id == 'about-me-section')
            mainContainerContent.style.display = 'block';
        else
            mainContainerContent.style.display = 'none';
    });

    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', (event) => {
            console.log(event);
            showHideContent(event);
            activeNavLink(event);
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
}