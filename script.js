$('.emoji').click(function(){
  var emoji = $(this).text();
  var text = $('textarea').val();
  $('textarea').val(text+emoji)
});

function myFunction() {
  var copyText = document.getElementById("imput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}