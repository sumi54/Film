function Storage() {

}
Storage.prototype.addFilmToStorage = function (newfilm) {
    let films = this.getFilmsFromStorage();
    films.push(newfilm);
    localStorage.setItem("films", JSON.stringify(films));
}
Storage.prototype.getFilmsFromStorage = function () {
    let films;
    if (localStorage.getItem("films") === null) {
        films = [];
    } else {
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}