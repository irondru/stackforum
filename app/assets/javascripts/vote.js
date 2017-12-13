document.addEventListener("turbolinks:load", function() {
  $('a.vote-link').bind('ajax:success', function(e, data, status, xhr) {
      $('#'+ xhr.responseJSON.elem_id).html(xhr.responseJSON.score);
  });

  $('a.vote-link').bind('ajax:error', function() {
      alert('Error!');
  });
});