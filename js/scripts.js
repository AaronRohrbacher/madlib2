$(document).ready(function() {
  $("#formOne").submit(function(event) {

var variables = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

variables.forEach(function(variable){
  var input = $("input#"+variable).val();
  $("."+variable).text(input);
});
// var person1Input = $("input#person1").val();
// var person2Input = $("input#person2").val();
// var animalInput = $("input#animal").val();
// var exclamationInput = $("input#exclamation").val();
// var verbInput = $("input#verb").val();
// var nounInput = $("input#noun").val();


    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#story").show();
    event.preventDefault();
  })
})
