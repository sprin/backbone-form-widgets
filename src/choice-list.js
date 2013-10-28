define(function (require) {
  var _ = require('underscore'),
    Backbone = require('backbone');

  // ChoiceList
  // ----------
  //
  // A Collection for holding lists of choices that keeps itself sorted by
  // the order given in the choice tuple.
  var ChoiceList = Backbone.Collection.extend({

    comparator: function(choice) {
      // Sort by values.
      return _.indexOf(this.choices, choice.get('val'));
    }

  });

  return ChoiceList;

});

