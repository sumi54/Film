function UI() {

}
UI.prototype.addFilmToUI = function (newfilm) {
    /* <tr>
           <td><img src="" class="img-fluid img-thumbnail"></td>
            <td></td>                                
            <td></td>                                
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>                                                                
      </tr> */        
      let filmList=document.getElementById("films");
      filmList.innerHTML +=`
      <tr>
           <td><img src="${newfilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newfilm.title}</td>                                
            <td>${newfilm.director}</td>                                
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr>                                                                                                                                 
      `;                                                             
}
UI.prototype.clearInputs=function(element1,element2,element3){
    element1.value="";
    element2.value="";
    element3.value="";
}
UI.prototype.showAlert=function(type,message){
    let cardBody=document.querySelector(".card-body");
    let alert = document.createElement("div")
    alert.className = `alert alert-${type} `;
    alert.textContent = message;
    cardBody.appendChild(alert);
    setTimeout(function () {
        alert.remove();
    }, 1500);
}