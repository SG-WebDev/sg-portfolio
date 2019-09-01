const navItems = document.querySelectorAll('.nav__Item');
navItems.forEach( navItem => {
    navItem.addEventListener('click', function (e) {
        let target = this.getAttribute('data-target');
        navItems.forEach( elem => {
           elem.classList.remove('nav__Item--active');
        });
        this.classList.add('nav__Item--active');
        window.location.href = `${target}#`;
        document.querySelector(`${target}`).scrollIntoView({
            behavior: 'smooth'
        });
        return false;
    }, false);
});
window.addEventListener('load', (event) => {
    window.location.href = '#';
});