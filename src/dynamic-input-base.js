define(function (require) {
  var _ = require('underscore'),
    Backbone = require('backbone'),
    GenericInputView = require('generic-input-view');

  // DynamicInputBase
  // -----------------
  //
  // - Base class for dynamic `select` and `radio` controls.
  var DynamicInputBase = GenericInputView.extend({

    events: {
      'change': 'read_input_val'
    },

    initialize: function() {
      _.bindAll(this, 'render', 'read_input_val', 'set_input_val');

      this.choice_collection = this.options.choice_collection;

      this.bound_model = this.options.bound_model;
      this.bound_attr = this.options.bound_attr;

      this.bound_model.on('change:' + this.bound_attr, this.render);

      // Re-render on `add` events to the choice collection.
      this.choice_collection.on('add', this.render);
      // Re-render on `remove` events to the choice collection.
      this.choice_collection.on('remove', this.render);
    },

    // Render the building type select template.
    render: function() {
      // Clone the status choices into a list of objects.
      var this_view = this,
          choice_objs;

      // Unset bound attr if no longer in choice list.
      if (!_.contains(
        this.choice_collection.pluck('val'),
        this.bound_model.get(this.bound_attr))
      ) {
        this.bound_model.set(this.bound_attr, '');
      }

      choice_objs =
        this.choice_collection.map(function(choice) {
          choice_obj = choice.toJSON();

          if (
            choice_obj.val === this_view.bound_model.get(this_view.bound_attr)
          ) {
            // Flag the selected status choice.
            choice_obj.selected = true;
          }
          return choice_obj;
        });

      this.$el.html(this.template({
        name: this.attributes.name,
        id: this.attributes.id,
        choices: choice_objs,
      }));

      return this;
    },

  });

  return DynamicInputBase;

});

