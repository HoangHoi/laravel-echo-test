require('./bootstrap');

Echo.private('chat-room')
    .listen('ChatEvent', (event) => {
        console.log(event);
        $('#body').append(
            '<div class="well">' +
            '<div style="font-weight: bold; padding-bottom: 10px; font-size: 1.2em;">' +
            '<span>' +
            event.user.name +
            '</span>' +
            '</div>' +
            '<div>' +
            '<span>' +
            event.message +
            '</span>' +
            '</div>' +
            '</div>'
        );
    });

$('#send').on('click', function () {
    let message = $('#input').val();
    $('#input').val('');
    $.ajax({
        url: 'chat',
        type: 'POST',
        dataType: 'json',
        data: {message: message},
    });
});

$("#input").on('keypress', function(event) {
    if (event.keyCode == 13) {
        let message = $('#input').val();
        $('#input').val('');
        $.ajax({
            url: 'chat',
            type: 'POST',
            dataType: 'json',
            data: {message: message},
        });
    }
});
