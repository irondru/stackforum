import actionCable from 'cable';

$(function() {
  if ($('div').is('#questions-list')) {
      actionCable.subscriptions.create('QuestionsChannel', {
          connected: function () {
              this.perform('subscribed');
          },
          received: function (data) {
              switch (data.action) {
                  case 'create':
                      $('#question-tmpl').tmpl(data.question).prependTo('#questions-list');
                      break;
                  case 'destroy':
                      $('#question-' + data.question).remove();
                      break;
              }
          }
      });
  }
});