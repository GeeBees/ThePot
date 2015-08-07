function saveGroups(groups) {
    localStorage.setItem('groupsArray', JSON.stringify(groups));
}

function loadGroups() {
    return GroupSet(JSON.parse(localStorage.getItem('groupsArray')));
}

function saveWords(words) {
    localStorage.setItem('words', JSON.stringify(words));
}

function loadWords() {
    return Words(JSON.parse(localStorage.getItem('words')));
}
