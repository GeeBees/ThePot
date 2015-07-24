var formHolder = function() {
    return $('<div>')
        .addClass('form-group');
}

function generateForm(n, tmpl) {
    var holder = formHolder();
    for (var i = 1; i <= n; i++) {
        var template = tmpl(i)();
        holder
            .append(template.label)
            .append(template.input)
            .append(template.br);
    }
    return holder;
}

function generateNameForm(n) {
    var tmpl = function(i) {
        return function() {
            return {
                'label': $('<label>')
                    .html('Member ' + i + ' name:'),
                'input': $('<input>')
                    .addClass('form-control')
                    .attr('type', 'text')
                    .attr('id', 'group1Member' + i + 'Name')
                    .attr('value', 'Member ' + i),
                'br': $('<br>')
            };
        };
    };
    return generateForm(n, tmpl);
}

function generateWordForm(n) {
    var tmpl = function(i) {
        return function() {
            return {
                'label': $('<label>')
                    .html('Word ' + i + ':'),
                'input': $('<input>')
                    .addClass('form-control')
                    .attr('placeholder', '')
                    .attr('id', 'group1word' + i),
                'br': $('<br>')
            };
        };
    };
    return generateForm(n, tmpl);
}
