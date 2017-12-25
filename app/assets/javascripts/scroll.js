document.addEventListener("turbolinks:load", function () {

    const part_size = 10;
    var start_from = part_size;
    var in_progress = false;

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 200 && !in_progress) {
            $.ajax({
                url: '/questions/load_part',
                method: 'POST',
                dataType: 'json',
                data: {start_id: start_from},
                beforeSend: function () {
                  in_progress = true;
                },
                success: function (data) {
                    if (data.length > 0) {
                        $.each(data, function (index, data) {
                            $('div#questions-list').append('<p>'+data.title+'</p>');
                        });
                        in_progress = false;
                        start_from += part_size;
                    }
                },
                error: function () {
                  in_progress = false
                }
            });
        }
    });
});