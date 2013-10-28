define(function (require) {
  var _ = require('underscore'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars'),
    bootstrap = require('bootstrap'),
    form_input_row_template = require('text!tmpl/form-input-row-template.html');

  // Bootstrap tooltip jQuery plugin is used for attaching tooltips to the
  // labels of input elements.
  // "Use" the module to prevent JSHint from complaining:
  bootstrap;

  var FormInputRow = Backbone.View.extend({

    tagName: 'div',

    className: 'form-group',

    template: Handlebars.compile(form_input_row_template),

    initialize: function() {
      var t = this;
      _.bindAll(t, 'render');
      t.input_config = t.options.input_config;
      t.label = t.options.label;
      t.inline_tip_html = t.options.inline_tip_html;
      t.tooltip_html = t.options.tooltip_html;
      t.input_class = t.options.input_class;
      t.errors = t.options.errors;

      t.input_view = new t.input_class(t.input_config);
    },

    render: function() {
      var t = this;
      // Render the row, label, and inline tip.
      t.$el.html(t.template({
        input_id: t.input_config.attributes.id,
        label: t.label,
        inline_tip_html: t.inline_tip_html,
        tooltip_html: t.tooltip_html,
        errors: t.errors
      }));

      // Render input element itself.
      t.$('.control-input').prepend(t.input_view.render().$el);

      // Render the tooltip, if any.
      if (t.tooltip_html) {
        t.$('label').tooltip({
          html: true,
          placement: 'bottom',
          container: t.$('label'),
          title: t.tooltip_html
        });
      }
      return t;
    }

  });

  return FormInputRow;

});

