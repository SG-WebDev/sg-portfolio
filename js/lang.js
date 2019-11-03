const langData =
    {
        "pl":
            {
                "v": "pl",
                "nav": {
                    "about": "O mnie",
                    "contact": "Kontakt"
                },
                "desc": {
                    "heading": "O mnie",
                    "content": "Jestem programistą tworzącym wygląd witryn, serwisów internetowych i aplikacji moblinych. Od 2015 roku poszerzam znajomość front-end'owych technologii webowych. Od 2018 roku pracuje na stanowisku Front-End Developer'a. Mam doświadczenie w tworzeniu hybrydowych aplikacji mobilnych, refaktoryzacji elementów UI i w tworzeniu/rozwoju/opiece layout'ów serwisów internetowych.",
                    "footer": "Zapraszam do współpracy!"
                },
            },
        "en":
            {
                "v": "en",
                "nav": {
                    "about": "About",
                    "contact": "Contact"
                },
                "desc": {
                    "heading": "About me",
                    "content": "I'm a Font-End developer. I am gaining experience in front-end technologies since 2015. I've been working as a front-end developer since 2018. I've experience in creating hybrid mobile applications, refactoring UI elements and in creating / developing / maintaining website layouts.",
                    "footer": "I'm looking forward to do business with you!"
                },
            }
    };

const pl =  langData.pl;
const en =  langData.en;
const langItems = document.querySelectorAll('.header__LangItem');
langItems.forEach( langItem => {
    langItem.addEventListener('click', function (e) {
        let lang = this.getAttribute('data-lang');
        langItems.forEach( elem => {
            elem.classList.remove('header__LangItem--active');
        });
        this.classList.add('header__LangItem--active');
        switch (lang) {
            case 'pl':
                //content elements
                document.querySelector('.desc__Heading').textContent = pl.desc.heading;
                document.querySelector('.desc__Content').textContent = pl.desc.content;
                document.querySelector('.desc__Footer').textContent = pl.desc.footer;
                document.querySelector('.nav__Item--about .nav__ItemText').textContent = pl.nav.about;
                document.querySelector('.nav__Item--contact .nav__ItemText').textContent = pl.nav.contact;
                break;
            case 'en':
                //content elements
                document.querySelector('.desc__Heading').textContent = en.desc.heading;
                document.querySelector('.desc__Content').textContent = en.desc.content;
                document.querySelector('.desc__Footer').textContent = en.desc.footer;
                document.querySelector('.nav__Item--about .nav__ItemText').textContent = en.nav.about;
                document.querySelector('.nav__Item--contact .nav__ItemText').textContent = en.nav.contact;
                break;
            default:
                //content elements
                document.querySelector('.desc__Heading').textContent = pl.desc.heading;
                document.querySelector('.desc__Content').textContent = pl.desc.content;
                document.querySelector('.desc__Footer').textContent = pl.desc.footer;
                document.querySelector('.nav__Item--about .nav__ItemText').textContent = pl.nav.about;
                document.querySelector('.nav__Item--contact .nav__ItemText').textContent = pl.nav.contact;
        }
        return false;
    }, false);
});
