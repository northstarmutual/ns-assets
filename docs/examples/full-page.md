---
layout: full-page-example
title: Full Page Example
permalink: /examples/full-page/
---


{% example html %}
<div class="container">
  <div class="navbar pg-header">
    <div class="navbar-inner">
      <div class="col-6">
        <h1 class="brand">
          <a href="{{ site.baseurl }}/">
            <img src="{{ site.baseurl }}/images/NSM-logo-web.gif" alt="North Star Mutual Insurance Company"
              class="img-responsive" title="North Star Mutual Insurance Company">
          </a>
        </h1>
      </div>
      <div class="col-6">
        <h1 class="pg-title">
          {{ page.title }}
        </h1>
      </div>
    </div>
  </div>
  <div class="navbar navbar-default app-ribbon">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="{{ site.baseurl }}/">
        <span class="glyphicon glyphicon-home"></span>
        Style Guide
      </a>
    </div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li><a {% if page.layout == "page" %}class="active"{% endif %} href="{{ site.baseurl }}/scaffolding">Docs</a></li>
      </ul>
      <ul class="nav navbar-nav">
        <li><a {% if page.title == "About" %}class="active"{% endif %} href="{{ site.baseurl }}/about">About</a></li>
      </ul>
      <ul class="nav navbar-nav">
        <li><a href="{{ site.gitlab.repo }}" target="_blank">Gitlab</a></li>
      </ul>
      <ul class="nav navbar-nav">
        <li><a href="{{ site.github.repo }}/blob/master/README.md#install" target="_blank">Install</a></li>
      </ul>
    </div>
  </div>
  <div class="inner-container clearfix">
    <ol class="breadcrumb hidden-print">
      <li class="active">
        <a href="{{ site.baseurl }}/examples/">Examples</a>
      </li>
    </ol>
    <div class="app-container">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>{{ page.title }}</h3>
        </div>
        <div class="panel-body">
        <form class="grid-form-show">
        ...
        </form>
        </div>
      </div>
    </div>
    <!-- The contact piece should be a comman @call routine -->
    {% include contact.html %}
  </div>
</div><!-- .container -->
{% endexample %}
