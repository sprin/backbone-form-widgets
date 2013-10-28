=====================
backbone-form-widgets
=====================

Re-usable Backbone widgets for building dynamic HTML forms. All widgets
bind to a Backbone Model in a bi-directional fashion: when the user changes
an input, the Model is updated, and when a scripted event changes the Model,
the input is updated.

GenericInputView
================

A View to render any kind of simple `input` widget, such as `text` or `number`,
bound to a Backbone Model.

DynamicSelectView
=================

A View to render a `select` control whose choices may be mutable. The choices
are backed by a Backbone Collection, so scripted events can add or remove
choices from the collection, and the `select` control will update itself.

DynamicRadioView
================

A View to render an `input` of type `radio` whose choices may be mutable.
Behaves the same as the `DynamicSelectView` with respect to choices.

FormInputRow
============

A container for a form `input`, `label`, tooltips, inline tips, and errors to be
rendered as a row inside a `form` element. Uses Bootstrap CSS classes for grid
layout and form element styling.

