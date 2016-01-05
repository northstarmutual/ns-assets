---
layout: page
title: Layout
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Default Page Layout

The basic page structure.  This basic layout should be done on a app wide basis and not copied over into each seperate program.  [example here]({{ site.baseurl }}/examples/full-page)

{% highlight html %}
<body>
  <div class="container">
    <div class="navbar pg-header">
      <div class="navbar-inner">
        <div class="col-6">
          <h1 class="brand">
            <!-- logo here -->
          </h1>
        </div>
        <div class="col-6">
          <h1 class="pg-title">
            <!-- page title here -->
          </h1>
        </div>
      </div>
    </div>
    <div class="navbar navbar-default app-ribbon">
      <div class="navbar-header">
        <!-- employee menu / agents only here -->
      </div>
      <div class="navbar-collapse collapse">
        <!-- navigation items -->
      </div>
    </div>
    <div class="inner-container docs-layout clearfix">
      <div class="app-container">
        <!-- page content here -->
      </div>
      <div class="contact-container hidden-print hidden-sm hidden-md hidden-xs">
        <!-- contact us here -->
      </div>
    </div>
  </div>
</body>
{% endhighlight %}

## App Container

Start your page content with `.app-container`.

{% highlight html %}
<div class="app-container">
  <!-- contents here -->
</div>
{% endhighlight %}

The container applies `width: 1200px;` and uses horizontal `margin`s to center it.

## Grid

### How it works

The grid is pretty standard—you create rows with `.columns` and individual columns with a column class and fraction class. Here's how it works:

- Add a `.container` to encapsulate everything and provide ample horizontal gutter space.
- Create your outer row to clear the floated columns with `<div class="columns">`.
- Add your columns with individual `<div class="column">`s.
- Add your fractional width classes to set the width of the columns (e.g., `.one-fourth`).
- Use this grid for page layout not form layout.

### Demo

In practice, your columns will look like the example below.

{% example html %}
<div class="row">
  <div class="col-1">.col-1</div>
  <div class="col-1">.col-1</div>
  <div class="col-1">.col-1</div>
  <div class="col-1">.col-1</div>
  <div class="col-1">.col-1</div>
  <div class="col-1">.col-1</div>
  <div class="col-1">.col-1</div>
  <div class="col-1">.col-1</div>
  <div class="col-1">.col-1</div>
  <div class="col-1">.col-1</div>
  <div class="col-1">.col-1</div>
  <div class="col-1">.col-1</div>
</div>
<div class="row">
  <div class="col-8">.col-8</div>
  <div class="col-4">.col-4</div>
</div>
<div class="row">
  <div class="col-4">.col-4</div>
  <div class="col-4">.col-4</div>
  <div class="col-4">.col-4</div>
</div>
<div class="row">
  <div class="col-6">.col-6</div>
  <div class="col-6">.col-6</div>
</div>
{% endexample %}

### Centered

Columns can be [centered](/utilities/#centering-content) by adding `.centered` to the `.column` class.

{% example html %}
<div class="row">
  <div class="col-6 centered">
    .col-6 .centered
  </div>
</div>
{% endexample %}