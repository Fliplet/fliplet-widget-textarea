$(document).ready(function() {
  var $editor = $('#textarea');

  $editor.trumbowyg({
    btns: [
      ['formatting'],
      'btnGrp-semantic',
      ['link'],
      'btnGrp-justify',
      'btnGrp-lists',
      ['horizontalRule'],
      ['removeformat']
    ],
    autogrow: true
  });

  $('.button').click(function (event) {
    event.preventDefault();

    Fliplet.Widget.save({
      text: $editor.trumbowyg('html')
    }).then(function () {
      Fliplet.Widget.complete();
    });
  });
});