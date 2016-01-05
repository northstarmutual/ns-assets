---
layout: page
title: Typography
---

Headings, paragraphs, blockquotes, lists, and more have some global resets. It's worth noting these aren't the same as our Markdown styles.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Headings

{% example html %}
<h1>h1. Heading</h1>
<h2>h2. Heading</h2>
<h3>h3. Heading</h3>
<h4>h4. Heading</h4>
<h5>h5. Heading</h5>
<h6>h6. Heading</h6>
{% endexample %}

{% example html %}
<h1>h1. Heading <small>Secondary text</small></h1>
<h2>h2. Heading <small>Secondary text</small></h2>
<h3>h3. Heading <small>Secondary text</small></h3>
<h4>h4. Heading <small>Secondary text</small></h4>
<h5>h5. Heading <small>Secondary text</small></h5>
<h6>h6. Heading <small>Secondary text</small></h6>
{% endexample %}

## Page Header

{% example html %}
<h1 class="page-header">This is a page header</h1>
{% endexample %}


## Body text

{% example html %}
<p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
{% endexample %}

## Lead

Make a paragraph stand out by adding `.lead`.

{% example html %}
<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
{% endexample %}

## Inline text elements

Styling for common inline HTML5 elements.

{% example html %}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
{% endexample %}

## Alignment classes

{% example html %}
<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>
{% endexample %}

## Transformation classes

{% example html %}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">Capitalized text.</p>
{% endexample %}

## Addresses
Present contact information for the nearest ancestor or the entire body of work. Preserve formatting by ending all lines with <br>.

{% example html %}
<address>
  <strong>Twitter, Inc.</strong><br>
  1355 Market Street, Suite 900<br>
  San Francisco, CA 94103<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>

<address>
  <strong>Full Name</strong><br>
  <a href="mailto:#">first.last@example.com</a>
</address>
{% endexample %}


## Blockquotes

Wrap `<blockquote>` around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote. For straight quotes, we recommend a `<p>`.

{% example html %}
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{% endexample %}

## Unordered List

A list of items in which the order does *not* explicitly matter.

{% example html %}
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
{% endexample %}

## Ordered List

A list of items in which the order *does* explicitly matter.

{% example html %}
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ol>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ol>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>
{% endexample %}

## Description

A list of terms with their associated descriptions.

{% example html %}
<dl> 
  <dt>Description lists</dt> 
  <dd>A description list is perfect for defining terms.</dd> 
  <dt>Euismod</dt> 
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd> 
  <dd>Donec id elit non mi porta gravida at eget metus.</dd> 
  <dt>Malesuada porta</dt> 
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd> 
</dl>
{% endexample %}

## Horizontal description

Make terms and descriptions in `<dl>` line up side-by-side. Starts off stacked like default `<dl>`s, but when the navbar expands, so do these.

{% example html %}
<dl class="dl-horizontal"> 
  <dt>Description lists</dt> 
  <dd>A description list is perfect for defining terms.</dd> 
  <dt>Euismod</dt> 
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd> 
  <dd>Donec id elit non mi porta gravida at eget metus.</dd> 
  <dt>Malesuada porta</dt> 
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd> 
  <dt>Felis euismod semper eget lacinia</dt> 
  <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd> 
</dl>
{% endexample %}

## Small text

For de-emphasizing inline or blocks of text, use the <small> tag to set text at 85% the size of the parent. Heading elements receive their own font-size for nested <small> elements.

You may alternatively use an inline element with .small in place of any <small>.

{% example html %}
<small>This line of text is meant to be treated as fine print.</small>
{% endexample %}



