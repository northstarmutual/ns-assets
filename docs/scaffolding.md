---
layout: page
title: Scaffolding
---

Scaffolding refers to the global resets and dependencies that the North Star CSS Toolkit is built upon.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## HTML5 doctype

This toolkit makes use of certain HTML elements and CSS properties that **require** the use of the HTML5 doctype. Include it at the beginning of all your pages.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

## Head section
Within the head section we specify the `charset` and set the `X-UA-Compatible` flag to force Internet Explorer to render in the latest version.  We also set the viewport `width=device-width` to control the layout for mobile.  This stylesheet is responsive so as your browser windows shrinks it will adapt to it.


{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ...
  </head>
  <body>
  ...
  </body>
</html>
{% endhighlight %}

## Box-sizing

We reset `box-sizing` to `border-box` for every element. This allows us to more easily assign widths to elements that also have `padding` and `border`s.

## Built on Normalize

For improved cross-browser rendering, we use [Normalize.css](http://necolas.github.io/normalize.css/) to correct small inconsistencies across browsers and devices.
