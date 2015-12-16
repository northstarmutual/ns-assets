---
layout: page
title: Helper classes
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Helper classes

### Contextual colors

Convey meaning through color with a handful of emphasis utility classes. These may also be applied to links and will darken on hover just like our default link styles.

{% example html %}
<p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
{% endexample %}

### Close icon

Use the generic close icon for dismissing content like modals and alerts.

{% example html %}
<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
{% endexample %}

### Carets

Use carets to indicate dropdown functionality and direction. Note that the default caret will reverse automatically in dropup menus.

{% example html %}
<span class="caret"></span>
{% endexample %}

### Quick floats

Float an element to the left or right with a class. `!important` is included to avoid specificity issues. Classes can also be used as mixins.

{% example html %}
<div class="pull-left">...</div>
<div class="pull-right">...</div>
{% endexample %}

{% highlight scss %}
// Classes
.pull-left {
  float: left !important;
}
.pull-right {
  float: right !important;
}

// Usage as mixins
.element {
  .pull-left();
}
.another-element {
  .pull-right();
}
{% endhighlight %}

### Center content blocks

Set an element to `display: block` and center via `margin`. Available as a mixin and class.

{% highlight html %}
<div class="center-block">...</div>
{% endhighlight %}

{% highlight scss %}
// Class
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

// Usage as a mixin
.element {
  .center-block();
}
{% endhighlight %}

### Clearfix

Easily clear `floats` by adding `.clearfix` **to the parent element**. Utilizes the micro clearfix as popularized by Nicolas Gallagher. Can also be used as a mixin.

{% highlight html %}
<!-- Usage as a class -->
<div class="clearfix">...</div>
{% endhighlight %}

{% highlight scss %}
// Mixin itself
.clearfix() {
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
}

// Usage as a mixin
.element {
  .clearfix();
}
{% endhighlight %}

### Showing and hiding content

Force an element to be shown or hidden with the use of `.show` and `.hidden` classes. These classes use !important to avoid specificity conflicts, just like the quick floats. They are only available for block level toggling. They can also be used as mixins.

Furthermore, `.invisible` can be used to toggle only the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document.

{% highlight html %}
<div class="show">...</div>
<div class="hidden">...</div>
{% endhighlight %}

{% highlight scss %}
// Classes
.show {
  display: block !important;
}
.hidden {
  display: none !important;
}
.invisible {
  visibility: hidden;
}

// Usage as mixins
.element {
  .show();
}
.another-element {
  .hidden();
}
{% endhighlight %}

## Responsive utilities

For faster mobile-friendly development, use these utility classes for showing and hiding content by device via media query. Also included are utility classes for toggling content when printed.

Try to use these on a limited basis and avoid creating entirely different versions of the same site. Instead, use them to complement each device's presentation.

### Available classes

Use a single or combination of the available classes for toggling content across viewport breakpoints.

<table class="table table-bordered"> <thead> <tr> <th style="width: 150px"></th> <th> Extra small devices <small>Phones (&lt;768px)</small> </th> <th> Small devices <small>Tablets (≥768px)</small> </th> <th> Medium devices <small>Desktops (≥992px)</small> </th> <th> Large devices <small>Desktops (≥1200px)</small> </th> </tr> </thead> <tbody> <tr> <th scope="row"><code>.visible-xs-*</code></th> <td class="is-visible">Visible</td> <td class="is-hidden">Hidden</td> <td class="is-hidden">Hidden</td> <td class="is-hidden">Hidden</td> </tr> <tr> <th scope="row"><code>.visible-sm-*</code></th> <td class="is-hidden">Hidden</td> <td class="is-visible">Visible</td> <td class="is-hidden">Hidden</td> <td class="is-hidden">Hidden</td> </tr> <tr> <th scope="row"><code>.visible-md-*</code></th> <td class="is-hidden">Hidden</td> <td class="is-hidden">Hidden</td> <td class="is-visible">Visible</td> <td class="is-hidden">Hidden</td> </tr> <tr> <th scope="row"><code>.visible-lg-*</code></th> <td class="is-hidden">Hidden</td> <td class="is-hidden">Hidden</td> <td class="is-hidden">Hidden</td> <td class="is-visible">Visible</td> </tr> </tbody> <tbody> <tr> <th scope="row"><code>.hidden-xs</code></th> <td class="is-hidden">Hidden</td> <td class="is-visible">Visible</td> <td class="is-visible">Visible</td> <td class="is-visible">Visible</td> </tr> <tr> <th scope="row"><code>.hidden-sm</code></th> <td class="is-visible">Visible</td> <td class="is-hidden">Hidden</td> <td class="is-visible">Visible</td> <td class="is-visible">Visible</td> </tr> <tr> <th scope="row"><code>.hidden-md</code></th> <td class="is-visible">Visible</td> <td class="is-visible">Visible</td> <td class="is-hidden">Hidden</td> <td class="is-visible">Visible</td> </tr> <tr> <th scope="row"><code>.hidden-lg</code></th> <td class="is-visible">Visible</td> <td class="is-visible">Visible</td> <td class="is-visible">Visible</td> <td class="is-hidden">Hidden</td> </tr> </tbody> </table>


### Print classes
Similar to the regular responsive classes, use these for toggling content for print.

<table class="table table-bordered table-striped responsive-utilities"> <thead> <tr> <th>Classes</th> <th>Browser</th> <th>Print</th> </tr> </thead> <tbody> <tr> <th scope="row"> 
  <code>.visible-print</code>
</th> <td class="is-hidden">Hidden</td> <td class="is-visible">Visible</td> </tr> <tr> <th scope="row"><code>.hidden-print</code></th> <td class="is-visible">Visible</td> <td class="is-hidden">Hidden</td> </tr> </tbody> </table>