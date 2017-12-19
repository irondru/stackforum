document.addEventListener("turbolinks:load", function() {
    if ($('div').is('#answers')) {
        clear_subscriptions();
        App.cable.subscriptions.create({channel: 'QuestionChannel', id: $('div#answers').attr('data')}, {
            connected: function () {
                this.perform('subscribed');
            },
            received: function (data) {
                switch (data.action) {
                    case 'create_answer':
                        $('div#answers').append(JST["templates/answer"](data));
                        break;
                    case 'destroy_answer':
                        $('#answer-id-' + data.answer_id).remove();
                        break;
                    case 'create_comment':
                        $(data.destination_id).append(JST["templates/comment"](data));
                        break;
                    case 'destroy_comment':
                        $('#comment-'+data.comment_id).remove();
                        break;
                }
            }
        });
    }
});