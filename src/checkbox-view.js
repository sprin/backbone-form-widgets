define(function (require) {
  var _ = require('underscore'),
    varBackbone = require('backbone'),
    GenericInputView = require('./generic-input-view');

  // CheckboxView
  // -----------------
  //
  // - Render set of radio inputs with dynamic choices in a collection.
  var CheckboxView = GenericInputView.extend({

    read_input_val: function() {
      this.bound_model.set(
          this.bound_attr,
          this.$el.prop('checked')
      );
    }

  });

  return CheckboxView;

});

