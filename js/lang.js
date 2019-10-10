const langData =
    {
        "pl":
            {
                "ver": "pl",
                "nav": {
                    "about": "O mnie",
                    "works": "Prace",
                    "contact": "Kontakt"
                },
                "desc": {
                    "heading": "O mnie",
                    "content": "Jestem programistą dbającym o front-end'ową warstwę witryn, serwisów internetowych i aplikacji moblinych. Od 4 lat poszerzam znajomość front-end'owych technologi webowych.Mam za sobą komercyjne doświadczenie w tworzeniu hybrydowych aplikacji mobilnych, refaktoryzacji elementów UI i w tworzeniu/rozwoju/opiece layout'ów serwisów internetowych.",
                    "footer": "Zapraszam do współpracy!"
                }
            },
        "en":
            {
                "ver": "en",
                "nav": {
                    "about": "About",
                    "works": "Works",
                    "contact": "Contact"
                },
                "desc": {
                    "heading": "About me",
                    "content": "I'm a Font-End developer. I am gaining experience in front-end technologies since 4 years. I have commercial experience in creating hybrid mobile applications, refactoring UI elements and in creating / developing / maintaining website layouts.",
                    "footer": "I'm looking forward to do business with you!"
                }
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
                document.querySelector('.nav__Item--works .nav__ItemText').textContent = pl.nav.works;
                document.querySelector('.nav__Item--contact .nav__ItemText').textContent = pl.nav.contact;
                break;
            case 'en':
                //content elements
                document.querySelector('.desc__Heading').textContent = en.desc.heading;
                document.querySelector('.desc__Content').textContent = en.desc.content;
                document.querySelector('.desc__Footer').textContent = en.desc.footer;
                document.querySelector('.nav__Item--about .nav__ItemText').textContent = en.nav.about;
                document.querySelector('.nav__Item--works .nav__ItemText').textContent = en.nav.works;
                document.querySelector('.nav__Item--contact .nav__ItemText').textContent = en.nav.contact;
                break;
            default:
                //content elements
                document.querySelector('.desc__Heading').textContent = pl.desc.heading;
                document.querySelector('.desc__Content').textContent = pl.desc.content;
                document.querySelector('.desc__Footer').textContent = pl.desc.footer;
                document.querySelector('.nav__Item--about .nav__ItemText').textContent = pl.nav.about;
                document.querySelector('.nav__Item--works .nav__ItemText').textContent = pl.nav.works;
                document.querySelector('.nav__Item--contact .nav__ItemText').textContent = pl.nav.contact;
        }
        return false;
    }, false);
});
