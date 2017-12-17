document.addEventListener("turbolinks:load", function() {
    if ($('div').is('#answers'))
        App.cable.subscriptions.create({channel: 'AnswersChannel', id: $('div#answers').attr('data') }, {
            connected: function() {
                this.perform('subscribed');
            },
            received: function (data) {
                switch (data.action) {
                    case 'create':
                        $('div#answers').append(JST["templates/answer"](data));
                        break;
                    case 'destroy':
                        $('#answer-id-' + data.answer_id).remove();
                        break;
                }
            }
        });
});