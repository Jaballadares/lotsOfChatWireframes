
$('.circles').on('click', function() {
  // display the chatContainer
   $('.chatContainer').removeClass('hide');
   // replace circles with chatContainer
   $(this).replaceWith($('.chatContainer'));

});

$('.clickSend').on('click', function() {
   $('.leftMessage').append($('.messageInput').val());
	$('.messageInput').val("");
});

$('.sendButton').on('click', function() {
   $('.rightMessage').append($('.messageInput').val());
	$('.messageInput').val("");
});
