$('.clickSend').on('click', function() {
   $('.leftMessage').append($('.messageInput').val());
	$('.messageInput').val("");
});

$('.sendButton').on('click', function() {
   $('.rightMessage').append($('.messageInput').val());
	$('.messageInput').val("");
});
