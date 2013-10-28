define(function (require) {
  var _ = require('underscore'),
    Backbone = require('backbone');

  // GenericInputView
  // ----------------
  //
  // - Render an input of the specified type.
  var GenericInputView = Backbone.View.extend({

    tagName: 'input',

    events: {
      'change': 'read_input_val'
    },

    initialize: function() {
      _.bindAll(this, 'render', 'read_input_val', 'set_input_val');

      this.bound_attr = this.options.bound_attr;
      this.bound_model = this.options.bound_model;
      this.bound_model.on('change:' + this.bound_attr, this.set_input_val);
    },

    render: function() {
      return this;
    },

    set_input_val: function() {
      this.$el.val(this.bound_model.get(this.bound_attr));
    },

    read_input_val: function() {
      this.bound_model.set(
          this.bound_attr,
          this.$el.val()
      );
    }

  });

  return GenericInputView;

});

