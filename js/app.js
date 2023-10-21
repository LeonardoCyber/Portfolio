function createScrollReveal(selector, duration, origin, distance) {
    sr.reveal(selector, {
        duration: duration,
        origin: origin,
        distance: distance
    });
}
window.sr = ScrollReveal();
createScrollReveal('.h1_scroll', 2000, 'top', '-30px');
createScrollReveal('.yo_scroll', 2000, 'right', '-50px');
createScrollReveal('.banderas_scroll', 2000, 'bottom', '-30px');
createScrollReveal('.skills_scroll', 2000, 'right', '-30px');

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