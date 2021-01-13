// Test code to check event listener
$("#submit").on("click",function(event){
    event.preventDefault();
    let test = "<p>Test<p>";
    $("body").append(test);
});

// Replace placeholder img with submitted image (TBA)
//$('aniScreen').on("click",function(){
    //let img = $('#aniScreen').value();
    //console.log(img)
//})

// //leap of faith event listener for uploading image
// var form = new FormData();
// form.append("image", "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");

// var settings = {
//   "url": "https://api.imgur.com/3/image",
//   "method": "POST",
//   "timeout": 0,
//   "headers": {
//     "Authorization": "Client-ID {{clientId}}"
//   },
//   "processData": false,
//   "mimeType": "multipart/form-data",
//   "contentType": false,
//   "data": form
// };

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });