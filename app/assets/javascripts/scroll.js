document.addEventListener("turbolinks:load", function () {
    var inProgress = false;
    var startFrom = 10;

    $(window).scroll(function () {

        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 200 && !inProgress) {

            $.ajax({
                url: '/questions/load',
                method: 'POST',
                dataType: 'json',
                data: {'start_id': startFrom},
                beforeSend: function () {
                    inProgress = true;
                }
            }).done(function (data) {


                if (data.length > 0) {

                    /* Делаем проход по каждому результату, оказвашемуся в массиве,
                     где в index попадает индекс текущего элемента массива, а в data - сама статья */
                    $.each(data, function (index, data) {
                        $('div#questions-list').append(data.title);
                    });

                    /* По факту окончания запроса снова меняем значение флага на false */
                    inProgress = false;
                    // Увеличиваем на 10 порядковый номер статьи, с которой надо начинать выборку из базы
                    startFrom += 10;
                }
            });
        }
    });
});