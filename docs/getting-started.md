---
layout: page
title: Getting started
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Main stylesheet bundle

The `main` stylesheet for the front end toolkit is named... `main` :)  Have a look at the following section of code to see how to add this to your page.

{% highlight bis %}
<head>
@     call,NSEXTASSETS_ 0011 ('Stylesheet','main','') .
</head>
{% endhighlight %}

Using the `NSEXTASSETS_` routine isolates you from hardcoding the actual path to the file.  This way the version of the file can be updated without making changes to the codebase.

### Contents

The contents of the `main` bundle includes the css for all of the components associated with this styleguide.  Any new components should be added to the `main` bundle for use by all other pages.  

*By adding all the styles in one file we can cache and gzip it, so the user should only have to download this file one time.  For every other request the users computer should grab it from its cache without having to download it.  This speeds up the load time of the site.*

{% highlight bash %}
stylesheets
├── main.css
│   ├── main.scss
│   ├──── variables.scss
│   ├──── ns-bootstrap.scss
│   ├────── mixins.scss
│   ├────── variables.scss
│   ├────── normalize.scss
│   ├────── print.scss
│   ├────── scaffolding.scss
│   ├────── type.scss
│   ├────── grid.scss
│   ├────── tables.scss
│   ├────── forms.scss
│   ├────── buttons.scss
│   ├────── glyphicons.scss
│   ├────── dropdowns.scss
│   ├────── input-groups.scss
│   ├────── list-group.scss
│   ├────── navs.scss
│   ├────── navbar.scss
│   ├────── breadcrumbs.scss
│   ├────── pagination.scss
│   ├────── labels.scss
│   ├────── badges.scss
│   ├────── jumbotron.scss
│   ├────── alerts.scss
│   ├────── panels.scss
│   ├────── wells.scss
│   ├────── close.scss
│   ├────── modals.scss
│   ├────── tooltip.scss
│   ├────── popovers.scss
│   ├────── utilities.scss
│   ├────── responsive-utilities.scss
│   ├────── responsive-embed.scss
│   ├────── progress-bars.scss
│   ├──── layout.scss
│   ├──── utility.scss
│   ├──── responsive.scss
│   ├──── swatches.scss
│   ├──── bulletin.scss
│   ├──── print.scss
│   ├──── menu.scss
│   ├──── overrides.scss
│   ├──── summary.scss
│   ├──── file-upload.scss
│   ├──── upload-progress.scss
│   ├──── bootstrap-datepicker.scss
│   ├──── gridforms-show.scss
│   └──── data-tables.scss
{% endhighlight %}

## Employee Menu bundle

The `menu` bundle is only used for the Employee Menu.  This also requires the `main` bundle.

{% highlight bash %}
├── menu.css 
    ├── menu.scss
    ├────── variables.scss
{% endhighlight %}

## Supporting IE7

If you need support for IE7 add the following file to your page.  Will also need to add `oldie` JavaScript file to your page as well...

*  Applies IE7-specific styles to Bootstrap components and HTML elements.
*  Includes bug fixes for the usual suspects: hasLayout, inline-block bug, z-index bug., etc

{% highlight bis %}
<!--[if lt IE 9  ]>
@     call,NSEXTASSETS_ 0011 ('Stylesheet','oldie','') .
<![endif]-->
{% endhighlight %}

{% highlight bash %}
├── oldie.css
    ├── bootstrap-ie7fix.css
{% endhighlight %}

## Main JavaScript bundle

If you are going to use any of the JavaScript plugins you'll also have to include the `main` JavaScript file.  

{% highlight bis %}
<head>
@     call,NSEXTASSETS_ 0011 ('JavaScript','main','') .
</head>
{% endhighlight %}

### Contents

Here is the contents of the `main` JavaScript bundle.  For complete up-to-date reference please have a look at the [bower.json](http://gitlab.galaxy.local/onlinequoting/ns-assets/blob/master/bower.json) file.

{% highlight bash %}
├── main.js
    ├── jquery.js 
    ├── bootstrap.js
    │   ├────── alert.js
    │   ├────── dropdown.js
    │   ├────── tooltip.js
    │   ├────── modal.js
    │   ├────── transition.js
    │   ├────── button.js
    │   ├────── popover.js
    │   ├────── collapse.js
    │   ├────── tab.js
    │   ├────── affix.js
    │   ├────── scrollspy.js
    ├── datepicker.js
    ├── inputmask.js
    ├── formatCurrency.js
{% endhighlight %}


* jquery.js (Version ~1.11.3)
    * Required for many of the plugins listed.  As well as very handy
* bootstrap.js (Version ~3.3.5)
    * Needed for bootstrap javascript plugins 
        * [modals]({{ site.baseurl }}/javascript#modals)
        * [tabs]({{ site.baseurl }}/javascript#tabs)
        * [tooltips]({{ site.baseurl }}/javascript.md#tooltips)
        * [popover]({{ site.baseurl }}/#popover)
        * [affix]({{ site.baseurl }}/#affix)
        * [alert-messages]({{ site.baseurl }}/#alert-messages)
* datepicker.js (Version ~1.5.0)
    * Used for jquery datepicker. [example]({{ site.baseurl }}/#datepicker)
* inputmask.js (Version ~3.2.5)
    * input masks for phone, date, etc.  [example]({{ site.baseurl }}/#input-masks)
* formatCurrency.js (Version ~1.4.0)
    * [example]({{ site.baseurl }}/#input-masks)

## Other JavaScript bundles

There are a few other JavaScript bundles that are used throughout our site.

### oldie

The `oldie` JavaScript bundle should be included for browsers older than IE 9.

{% highlight bis %}
<!--[if lt IE 9  ]>
@     call,NSEXTASSETS_ 0011 ('JavaScript','oldie','') .
<![endif]-->
{% endhighlight %}

This includes the following files which adds support for HTML5 elements and allows media queries to work with old IE.

{% highlight bash %}
├── oldie.js
    ├── html5shiv.js
    └── respond.js
{% endhighlight %}

### dataTables

To get `dataTables` working on your page inclde the `dataTables` bundle.  **You must first include the `main` bundle for this to work**

{% highlight bis %}
@     call,NSEXTASSETS_ 0011 ('JavaScript','dataTables','') .
{% endhighlight %}

#### Contents

[Docs for legacy dataTables](http://legacy.datatables.net/)  

The file `dataTables-1.9.3` is is a special version of `dataTables` that has been modified to work with **ICE**.

The `dt_bootstrap-1.0.0.js` allows the pagination routine to use the bootstrap styles.

[Example]({{ site.baseurl }}/javascript#datatables)

{% highlight bash %}
├── dataTables.js
    ├── dataTables-1.9.3.js
    └── dt_bootstrap-1.0.0.js
{% endhighlight %}

### fileUpload

To use the jquery file upload plugin add the `fileUpload` bundle to your page.  **You must first include the `main` bundle for this to work**

{% highlight bis %}
@     call,NSEXTASSETS_ 0011 ('JavaScript','fileUpload','') .
{% endhighlight %}

{% highlight bash %}
├── dataTables.js
    ├── jquery-ui.min.js
    ├── jquery.tmpl.min.js
    ├── jquery.iframe-transport.js
    ├── jquery.fileupload.js
    ├── jquery.fileupload-process.js
    ├── jquery.fileupload-validate.js
    ├── jquery.fileupload-ui.js
    ├── jquery.fileupload-jquery-ui.js
    ├── file_upload-1.0.6.js
{% endhighlight %}

## Other Legacy Files

There are numerous other legacy JavaScript and CSS files that can be found in `23b210` and `23b410`.

Most of these are for one off use cases... Should the need arise to use one of them again just use the `NSEXTASSETS_` routine to add them to your page.  