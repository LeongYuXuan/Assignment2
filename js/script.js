// Test code to check event listener
$("#submit").click(function(event){
    event.preventDefault();
    let test = "<p>Test<p>";
    $("body").append(test);
});

// Replace placeholder img with submitted image
$('aniScreen').on("click",function(){
    let img = $('#aniScreen').value();
    console.log(img)
    //Redp

})