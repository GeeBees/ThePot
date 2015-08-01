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

function generateNameForm(groupNumber, n, oldNames) {
    var tmpl = function(i) {
        var memberName = 'Member ' + i;
        if(i <= Object.keys(oldNames).length){
            memberName = oldNames[i-1];
        }
        return function() {
            return {
                'label': $('<label>')
                    .html('Member ' + i + ' name:'),
                'input': $('<input>')
                    .addClass('form-control')
                    .attr('type', 'text')
                    .attr('id', 'group' + groupNumber + 'Member' + i + 'Name')
                    .attr('value', memberName),
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
