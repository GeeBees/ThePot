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

        return self;
    };

    return GroupSet;

})(jQuery);
