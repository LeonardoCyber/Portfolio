function createScrollReveal(selector, duration, origin, distance) {
    sr.reveal(selector, {
        duration: duration,
        origin: origin,
        distance: distance
    });
}
window.sr = ScrollReveal();
createScrollReveal('.top_scroll', 2000, 'top', '30px');
createScrollReveal('.bottom_scroll', 2000, 'bottom', '50px');
createScrollReveal('.left_scroll', 2000, 'left', '30px');
createScrollReveal('.right_scroll', 2000, 'right', '30px');
createScrollReveal('.top_header_scroll', 2000, 'top', '90px');

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");
const changeLanguage = async (language) =>{
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for ( const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener("click", (e) =>{
    changeLanguage(e.target.parentElement.dataset.language);
});