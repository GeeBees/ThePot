// Generates an n-word formulary
function generateWordForm(n) {
    var formHolder = $('<div>')
        .addClass('form-group');
    for (var i = 1; i <= n; i++) {
        var tmpl = $('<input>')
            .addClass('form-control')
            .attr('placeholder', '')
            .attr('id', 'group1word' + i);
        formHolder
            .append('Word ' + i + ':')
            .append(tmpl)
            .append($('<br>'));
    }
    return formHolder;
}
