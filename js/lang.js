const langData =
    {
        "pl":
            {
                "v": "pl",
                "nav_about": "O mnie",
                "nav_contact": "Kontakt",
                "desc_heading": "O mnie",
                "desc_paragraph1": "Jestem programistą tworzącym wygląd serwisów internetowych i aplikacji moblinych.",
                "desc_paragraph2": "Mam doświadczenie w tworzeniu i rozwoju layout'ów serwisów internetowych, refaktoryzacji elementów UI i opiece nad stronami www. Miałem styczność z estymacją czasową zadań i projektów, a także z pracą z istniejącym już kodem wymagającym modyfikacji lub rozszerzeń.",
                "desc_paragraph3": "Od 2015 roku poszerzam znajomość front-end'owych technologii webowych. Od 2018 roku pracuje na stanowisku Front-End Developer'a.",
                "desc_footer": "Zapraszam do współpracy!",
                "contact_heading": "Kontakt",
            },
        "en":
            {
                "v": "pl",
                "nav_about": "About",
                "nav_contact": "Contact",
                "desc_heading": "About me",
                "desc_paragraph1": "I'm a Font-End developer.",
                "desc_paragraph2": "My expierience includes creating and developing layouts of internet applications, refactoring UI elements and maintaining websites. I had contact with the time estimation of tasks and projects, as well as working with existing code requiring fixes or extensions.",
                "desc_paragraph3": "My begginings with front-end technologies started in 2015. I've been working as a front-end developer since 2018.",
                "desc_footer": "I'm looking forward to do business with you!",
                "contact_heading": "Contact",
            },
    };

const pl =  langData.pl;
const en =  langData.en;
const langItems = document.querySelectorAll('.header__LangItem');
const contentElements = document.querySelectorAll('[data-content]')
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
        contentElements.forEach( contentElement => {
            let contentElementValue = contentElement.getAttribute('data-content');
            contentElement.textContent = choosenLang[contentElementValue];
        });
    }, false);
});
