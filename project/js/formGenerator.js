// Generates an n-word formulary
// TODO: duplicate code: refactor this
function generateWordForm(n) {
    var formHolder = $('<div>')
        .addClass('form-group');
    for (var i = 1; i <= n; i++) {
        var tmpl = $('<input>')
            .addClass('form-control')
            .attr('placeholder', '')
            .attr('id', 'group1word' + i);
        formHolder
            .append($('<label>').html('Word ' + i + ':'))
            .append(tmpl)
            .append($('<br>'));
    }
    return formHolder;
}

function generateNameForm(n) {
  var formHolder = $('<div>')
      .addClass('form-group');
  for (var i = 1; i <= n; i++) {
      var tmpl = $('<input>')
          .addClass('form-control')
          .attr('type', 'text')
          .attr('id', 'group1Member' + i + 'Name' )
          .attr('value', 'Member ' + i);
      formHolder
          .append($('<label>').html('Member ' + i + ' name:'))
          .append(tmpl)
          .append($('<br>'));
  }
  return formHolder;
}
