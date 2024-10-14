import * as MODEL from "../model/model.js"


function initListeners() {
   $("nav a").on("click", (e) =>{
        let btnID = e.currentTarget.id;
        MODEL.changeRoute(btnID)
   });

}
 
$(document).ready(function () {
    initListeners();
});