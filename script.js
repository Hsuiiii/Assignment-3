$('.emoji').click(function(){
  var emoji = $(this).text();
  var text = $('textarea').val();
  $('textarea').val(text+emoji)
});