let form = document.getElementById("film-form");
let titleElement = document.getElementById("title");
let directorElement = document.getElementById("director");
let urlElement = document.getElementById("url");
let ui = new UI();
//  let film=new Film(titleElement,directorElement,urlElement);
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
}

function addFilm(e) {
    let title = titleElement.value;
    let director = directorElement.value;
    let url = urlElement.value;
    if (title == "" || director == "" || url == "") {
        ui.showAlert("danger","Boş bırakılan yerler var.");
    }
    else{
        let newfilm=new Film(title,director,url);
        ui.addFilmToUI(newfilm);
        ui.showAlert("success","Başarıyla oluşturuldu.");
    }
    ui.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}
