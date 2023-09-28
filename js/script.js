window.onscroll=function(){
    efectoHabilidades()
};
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add(barra-progreso1);
        document.getElementById("p").classList.add(barra-progreso2);
        document.getElementById("d").classList.add(barra-progreso3);
        document.getElementById("js").classList.add(barra-progreso4);
        document.getElementById("bd").classList.add(barra-progreso5);


    }
}