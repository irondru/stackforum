document.addEventListener("turbolinks:load", function () {

    var current_page = 1;
    var loading = false;

    if ($('div').is('#questions-list')) {
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() >= $(document).height() - 200 && !loading) {
                loading = true;
                $.getJSON('/questions_pages/' + current_page.toString(), function(data) {
                    if (data.length > 0) {
                        data.forEach(function (elem) {
                            $('#question-tmpl').tmpl(elem).appendTo('div#questions-list');
                        });
                        current_page++;
                    }
                }).always(function() {
                    loading = false;
                });
            }
        });
    }
});