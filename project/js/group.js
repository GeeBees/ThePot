Group = (function($) {

    var Group = function(groupName, memberNames) {

        var self = {
            groupName: groupName,
            memberNames: memberNames,
            length: memberNames.length
        }

        return self;
    };

    return Group;

})(jQuery);
