define(function (require) {
  var _ = require('underscore'),
    Backbone = require('backbone'),
    $ = require('jquery'),
    Handlebars = require('handlebars'),
    DynamicInputBase = require('./dynamic-input-base'),
    dynamic_select_template = require('text!./tmpl/dynamic-select-template.html');

  // DynamicSelectView
  // -----------------
  //
  // - Render a select with dynamic choices in a collection.
  var DynamicSelectView = DynamicInputBase.extend({

    tagName: 'select',

    template: Handlebars.compile(dynamic_select_template)

  });

  return DynamicSelectView;

});

