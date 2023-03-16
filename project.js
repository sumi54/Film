let form = document.getElementById("film-form");
let titleElement = document.getElementById("title");
let directorElement = document.getElementById("director");
let urlElement = document.getElementById("url");
let cardbody=document.querySelectorAll(".card-body")[1];
let clear=document.getElementById("clear-films");

let ui = new UI();
let storage = new Storage();
//  let film=new Film(titleElement,directorElement,urlElement);
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e) {
    let title = titleElement.value;
    let director = directorElement.value;
    let url = urlElement.value;
    if (title == "" || director == "" || url == "") {
        ui.showAlert("danger", "Boş bırakılan yerler var.");
    } else {
        let newfilm = new Film(title, director, url);
        ui.addFilmToUI(newfilm);
        storage.addFilmToStorage(newfilm);
        ui.showAlert("success", "Başarıyla oluşturuldu.");
    }
    ui.clearInputs(titleElement, urlElement, directorElement);
    e.preventDefault();
}
function deleteFilm(e){
    if(e.target.id==="delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.showAlert("success","Silme işlemi başarılı."); 
        
    }
}
function clearAllFilms(e){
    if(confirm("Tümünü silmek istediğinize emin misiniz?")){
        ui.clearAllFilmsToUI();
        storage.clearAllFilmsFromStorage();
    }
}