Words = (function($) {

    var Words = function(words) {

        var self = {};
        if (words) {
            self = {
              words: words.words,
              length: words.length
            }
        } else {
            self = {
                words: [],
                length: 0
            }
        }

        self.addWord = function(word) {
            self.words.push(word);
            self.length++;
        }

        self.get = function(i) {
            return self.words[i];
        }

        return self;
    };

    return Words;

})(jQuery);
