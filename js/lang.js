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
                    "content": {
                        "paragraph1": "Jestem programistą tworzącym wygląd serwisów internetowych i aplikacji moblinych.",
                        "paragraph2": "Mam doświadczenie w tworzeniu i rozwoju layout'ów serwisów internetowych, refaktoryzacji elementów UI i opiece nad stronami www. Miałem styczność z estymacją czasową zadań i projektów, a także z pracą z istniejącym już kodem wymagającym modyfikacji lub rozszerzeń.",
                        "paragraph3": "Od 2015 roku poszerzam znajomość front-end'owych technologii webowych. Od 2018 roku pracuje na stanowisku Front-End Developer'a.",
                    },
                    "footer": "Zapraszam do współpracy!"
                },
                "contact": {
                    "heading": "Kontakt",
                    "socials": {},
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
                    "content": {
                        "paragraph1": "I'm a Font-End developer.",
                        "paragraph2": "My expierience includes creating and developing layouts of internet applications, refactoring UI elements and maintaining websites. I had contact with the time estimation of tasks and projects, as well as working with existing code requiring fixes or extensions.",
                        "paragraph3": "My begginings with front-end technologies started in 2015. I've been working as a front-end developer since 2018.",
                    },
                    "footer": "I'm looking forward to do business with you!"
                },
                "contact": {
                    "heading": "Contact",
                    "socials": {},
                }
            },
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
                document.querySelector('.desc__Content .desc__Paragraph--1').textContent = pl.desc.content.paragraph1;
                document.querySelector('.desc__Content .desc__Paragraph--2').textContent = pl.desc.content.paragraph2;
                document.querySelector('.desc__Content .desc__Paragraph--3').textContent = pl.desc.content.paragraph3;
                document.querySelector('.desc__Footer').textContent = pl.desc.footer;
                document.querySelector('.nav__Item--about .nav__ItemText').textContent = pl.nav.about;
                document.querySelector('.nav__Item--contact .nav__ItemText').textContent = pl.nav.contact;
                document.querySelector('.contact__Heading').textContent = pl.contact.heading;
                break;
            case 'en':
                //content elements
                document.querySelector('.desc__Heading').textContent = en.desc.heading;
                document.querySelector('.desc__Content .desc__Paragraph--1').textContent = en.desc.content.paragraph1;
                document.querySelector('.desc__Content .desc__Paragraph--2').textContent = en.desc.content.paragraph2;
                document.querySelector('.desc__Content .desc__Paragraph--3').textContent = en.desc.content.paragraph3;
                document.querySelector('.desc__Footer').textContent = en.desc.footer;
                document.querySelector('.nav__Item--about .nav__ItemText').textContent = en.nav.about;
                document.querySelector('.nav__Item--contact .nav__ItemText').textContent = en.nav.contact;
                document.querySelector('.contact__Heading').textContent = en.contact.heading;
                break;
            default:
                //content elements
                document.querySelector('.desc__Heading').textContent = pl.desc.heading;
                document.querySelector('.desc__Content .desc__Paragraph--1').textContent = pl.desc.content.paragraph1;
                document.querySelector('.desc__Content .desc__Paragraph--2').textContent = pl.desc.content.paragraph2;
                document.querySelector('.desc__Content .desc__Paragraph--3').textContent = pl.desc.content.paragraph3;
                document.querySelector('.desc__Footer').textContent = pl.desc.footer;
                document.querySelector('.nav__Item--about .nav__ItemText').textContent = pl.nav.about;
                document.querySelector('.nav__Item--contact .nav__ItemText').textContent = pl.nav.contact;
                document.querySelector('.contact__Heading').textContent = pl.contact.heading;
        }
        return false;
    }, false);
});
