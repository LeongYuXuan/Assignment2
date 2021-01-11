$("#submit").click(function(event){
    event.preventDefault();
    let test = "<p>Test<p>";
    $("body").append(test);
});