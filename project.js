let form = document.getElementById("film-form");
let titleElement = document.getElementById("title");
let directorElement = document.getElementById("director");
let urlElement = document.getElementById("url");
let cardbody=document.querySelectorAll(".card-body")[1];
let clear=document.getElementById("clear-films");


//  let film=new Film(titleElement,directorElement,urlElement);
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e) {
    let title = titleElement.value;
    let director = directorElement.value;
    let url = urlElement.value;
    if (title == "" || director == "" || url == "") {
        UI.showAlert("danger", "Boş bırakılan yerler var.");
    } else {
        let newfilm = new Film(title, director, url);
        UI.addFilmToUI(newfilm);
        Storage.addFilmToStorage(newfilm);
        UI.showAlert("success", "Başarıyla oluşturuldu.");
    }
    UI.clearInputs(titleElement, urlElement, directorElement);
    e.preventDefault();
}
function deleteFilm(e){
    if(e.target.id==="delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.showAlert("success","Silme işlemi başarılı."); 
        
    }
}
function clearAllFilms(e){
    if(confirm("Tümünü silmek istediğinize emin misiniz?")){
        UI.clearAllFilmsToUI();
        Storage.clearAllFilmsFromStorage();
    }
}