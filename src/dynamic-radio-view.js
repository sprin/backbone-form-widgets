define(function (require) {
  var _ = require('underscore'),
    varBackbone = require('backbone'),
    Handlebars = require('handlebars'),
    DynamicInputBase = require('./dynamic-input-base'),
    dynamic_radio_template = require('text!./tmpl/dynamic-radio-template.html');

  // DynamicRadioView
  // -----------------
  //
  // - Render set of radio inputs with dynamic choices in a collection.
  var DynamicRadioView = DynamicInputBase.extend({

    tagName: 'span',

    className: 'radio-container',

    template: Handlebars.compile(dynamic_radio_template),

    read_input_val: function() {
      this.bound_model.set(
          this.bound_attr,
          this.$(':checked').val()
      );
    }

  });

  return DynamicRadioView;

});

