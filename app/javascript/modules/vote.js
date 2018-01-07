$(function () {
    $(document).on('ajax:success', function(e, data, status, xhr) {
        $('#'+ xhr.responseJSON.elem_id).html(xhr.responseJSON.score);
    });

    $(document).on('ajax:error', function() {
        alert('Error!');
    });
});
