export function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log("page:", pageID);
  
    if (pageID == "") {
      pageID = "home";
    }
    $.get(`pages/${pageID}.html`, function (data) {
      $("#app").html(data);
    })
      .fail(function (e) {
        $("#app").html(`${pageID} | Error ${e.status}: ${e.statusText}`);
      });
  }