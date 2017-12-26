document.addEventListener("turbolinks:load", function () {

    var current_page = 1;
    var in_progress = false;

    if ($('div').is('#questions-list')) {
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() >= $(document).height() - 200 && !in_progress) {
                $.ajax({
                    url: '/questions_pages/' + current_page.toString(),
                    method: 'GET',
                    dataType: 'json',
                    beforeSend: function () {
                        in_progress = true;
                    },
                    success: function (data) {
                        if (data.length > 0) {
                            $.each(data, function (index, data) {
                                $('div#questions-list').append('<p>' + data.title + '</p>');
                            });
                            in_progress = false;
                            current_page++;
                        }
                    },
                    error: function () {
                        in_progress = false
                    }
                });
            }
        });
    }
});