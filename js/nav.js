const navItems = document.querySelectorAll('.nav__Item');
navItems.forEach( navItem => {
    navItem.addEventListener('click', function (e) {
        e.preventDefault();
        let target = this.getAttribute('data-target');
        document.querySelector(`${target}`).scrollIntoView({
            behavior: 'smooth'
        });
    }, false);
});