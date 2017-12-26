document.addEventListener("turbolinks:load", function() {
  if ($('div').is('#questions-list')) {
      clear_subscriptions();
      App.cable.subscriptions.create('QuestionsChannel', {
          connected: function () {
              this.perform('subscribed');
          },
          received: function (data) {
              switch (data.action) {
                  case 'create':
                      $('#questions-list').prepend(data.data);
                      break;
                  case 'destroy':
                      $('#question-' + data.data).remove();
                      break;
              }
          }
      });
  }
});