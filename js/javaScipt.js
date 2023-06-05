
// ******************   loading  *******************

    window.addEventListener("load", function (){
        document.querySelector(".loader").classList.add("hidden");
                                              });


    // ************************* toggle icon navbar*********************

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



    // ******Scroll section active link********

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }

    });

    // *********************sticky navbar******************

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // ************* remove toggle icon and navbar when click navbar link  *********

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


    // ****************scroll reveal**************

    ScrollReveal({
    reset: true ,
    distance: '70px',
    duration:2000,
    delay:150
});

    ScrollReveal().reveal('.home-content, .heading, .skill_box2', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services_content, .project-box, .contact form, .about h1, .about p, .skill_box5, .gallery_content', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, about-img, .skill_box1, .skill_box4', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, about-content, .skill_box3, .skill_box6', { origin: 'right' });


    // *********************** animation for name  **************************

    const text = document.querySelector(".sec-text");

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "developer";
        }, 0);
        setTimeout(() => {
            text.textContent = "designer";
        }, 4000);
        setTimeout(() => {
            text.textContent = "programmer";
        }, 8000); //1s = 1000 milliseconds
    }

    textLoad();
    setInterval(textLoad, 12000);

