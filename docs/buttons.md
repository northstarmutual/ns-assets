---
layout: page
title: Buttons
---

Buttons are used for **actions**, like in forms, while textual hyperlinks are used for **destinations**, or moving from one page to another.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Default buttons

Use the button classes on an `<a>`, `<button>`, or `<input>` element.

When using a `<button>` element, **always specify a `type`**. When using a `<a>` element, **always add `role="button"` for accessibility**.

As a best practice, we highly recommend using the `<button>` element whenever possible to ensure matching cross-browser rendering.

{% example html %}
<a class="btn btn-default" href="#" role="button">Link</a>
<button class="btn btn-default" type="submit">Button</button>
<input class="btn btn-default" type="button" value="Input">
<input class="btn btn-default" type="submit" value="Submit">
{% endexample %}

You can find them in two sizes: the default `.btn` and the smaller `.btn-sm`.

{% example html %}
<button class="btn" type="button">Button</button>
<button class="btn btn-sm" type="button">Small button</button>
{% endexample %}

## Options
Use any of the available button classes to quickly create a styled button.

{% example html %}
<!-- Standard button -->
<button type="button" class="btn btn-default">Default</button>

<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">Primary</button>

<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">Success</button>

<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">Info</button>

<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="btn btn-link">Link</button>
{% endexample %}

## Sizes
Fancy larger or smaller buttons? Add `.btn-lg`, `.btn-sm`, or `.btn-xs` for additional sizes.

{% example html %}
<p>
  <button type="button" class="btn btn-primary btn-lg">Large button</button>
  <button type="button" class="btn btn-default btn-lg">Large button</button>
</p>
<p>
  <button type="button" class="btn btn-primary">Default button</button>
  <button type="button" class="btn btn-default">Default button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-sm">Small button</button>
  <button type="button" class="btn btn-default btn-sm">Small button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-xs">Extra small button</button>
  <button type="button" class="btn btn-default btn-xs">Extra small button</button>
</p>
{% endexample %}


Create block level buttons—those that span the full width of a parent— by adding `.btn-block.`

{% example html %}
<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" class="btn btn-default btn-lg btn-block">Block level button</button>
{% endexample %}

## Active state
Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. For `<button>` elements, this is done via `:active`. For `<a>` elements, it's done with .active. However, you may use `.active` on `<button>`s (and include the `aria-pressed="true"`
attribute) should you need to replicate the active state programmatically.

### Button Element

No need to add `:active` as it's a pseudo-class, but if you need to force the same appearance, go ahead and add `.active`.

{% example html %}
<button type="button" class="btn btn-primary btn-lg active">Primary button</button>
<button type="button" class="btn btn-default btn-lg active">Button</button>
{% endexample %}

### Anchor Element

Add the `.active` class to `<a>` buttons.

{% example html %}
<a href="#" class="btn btn-primary btn-lg active" role="button">Primary link</a>
<a href="#" class="btn btn-default btn-lg active" role="button">Link</a>
{% endexample %}

## Disabled state
Make buttons look unclickable by fading them back with `opacity`.

### Button element
Add the `disabled` attribute to `<button>` buttons.

{% example html %}
<button type="button" class="btn btn-lg btn-primary" disabled="disabled">Primary button</button>
<button type="button" class="btn btn-default btn-lg" disabled="disabled">Button</button>
{% endexample %}

**Cross-browser compatibility**
If you add the `disabled` attribute to a `<button>`, Internet Explorer 9 and below will render text gray with a nasty text-shadow that we cannot fix.

### Anchor element
Add the `.disabled` class to `<a>` buttons.

{% example html %}
<a href="#" class="btn btn-primary btn-lg disabled" role="button">Primary link</a>
<a href="#" class="btn btn-default btn-lg disabled" role="button">Link</a>
{% endexample %}

We use `.disabled` as a utility class here, similar to the common `.active` class, so no prefix is required

**Link functionality caveat**
This class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized and isn't fully supported in Opera 18 and below, or in Internet Explorer 11. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, use custom JavaScript to disable such links

## With counts

Use the [counter](../utilities/#counter) component within buttons:

{% example html %}
<button class="btn btn-default" type="button">
  Button
  <span class="counter">12</span>
</button>

<button class="btn btn-primary" type="button">
  Button
  <span class="counter">12</span>
</button>

<button class="btn btn-danger" type="button">
  Button
  <span class="counter">12</span>
</button>

<button class="btn btn-link" type="button">
  Button
  <span class="counter">12</span>
</button>
{% endexample %}

