GroupSet = (function($) {

    var GroupSet = function(groups) {

        var self = {};
        if (groups) {
            self = {
                groupsArray: groups.groupsArray,
                length: groups.length
            }
        } else {
            self = {
                groupsArray: [],
                length: 0
            }
        }

        self.addGroup = function(group) {
            self.groupsArray.push(group);
            self.length++;
        }

        self.get = function(i) {
            return self.groupsArray[i];
        }

        // This shouldn't work on IE. Experimental
        self[Symbol.iterator] = function*() {
            var i = 0;
            for (e in groupsArray) {
                yield groupsArray[e];
            }
        }

        return self;
    };

    return GroupSet;

})(jQuery);
