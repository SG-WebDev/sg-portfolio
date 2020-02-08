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
        let choosenLang;
        switch (lang) {
            case 'pl':
                choosenLang = pl;
                break;
            case 'en':
                choosenLang = en;
                break;
        }
        const contentElements = document.querySelectorAll('[data-content]')
        contentElements.forEach( contentElement => {
            const itemContent = contentElement.getAttribute('data-content');
            let objectPath = itemContent.split(".");
            if (objectPath[2]) {
                contentElement.textContent = choosenLang[objectPath[0]][objectPath[1]][objectPath[2]]
            }
            else {
                contentElement.textContent = choosenLang[objectPath[0]][objectPath[1]]
            }
        });
        return false;
    }, false);
});
