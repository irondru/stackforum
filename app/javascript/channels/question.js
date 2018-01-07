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
                        $('#answer-tmpl').tmpl(data).appendTo('div#answers');
                        break;
                    case 'update_answer':
                        $(data.destination_id + ' > div.answer-body').html(data.answer.body);
                        break;
                    case 'destroy_answer':
                        $('#answer-id-' + data.answer_id).remove();
                        break;
                    case 'create_comment':
                        $('#comment-tmpl').tmpl(data).appendTo(data.destination_id)
                        break;
                    case 'update_comment':
                        $(data.destination_id + ' > div.comment-body').html(data.comment.body);
                        break;
                    case 'destroy_comment':
                        $('#comment-'+data.comment_id).remove();
                        break;
                }
            }
        });
    }
});