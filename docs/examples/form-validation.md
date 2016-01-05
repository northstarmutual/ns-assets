---
layout: example
title: Form validation
permalink: /examples/form-validation/
---

<style type="text/css">
 .panel-body ul {
   padding-left: 2em !important;
 }
</style>

{% example html %}
<div class="app-container">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3>{{ page.title }}</h3>
    </div>
    <div class="panel-body">
    <div class="panel panel-danger">
      <div class="panel-heading">
        <h3 class="panel-title">
          There are 2 outstanding errors
        </h3>
      </div>
      <div class="panel-body">
        <ul>
          <li>Field 1 cannot be blank</li>
          <li>Field 2 cannot be blank</li>
        </ul>
      </div>
    </div>
    <form class="grid-form-show">
      <fieldset>
        <div data-row-span="2">
          <div data-field-span="1" class="has-error">
            <label>Field 1</label>
            <input type="text">
          </div>
          <div data-field-span="1" class="has-error">
            <label>Field 2</label>
            <input type="text">
          </div>
        </div>
        <div data-row-span="3">
          <div data-field-span="1">
            <button type="button" class="btn btn-primary"> Submit </button>
          </div>
        </div>
      </fieldset>
    </form>
    </div>
  </div>
</div>
<!-- The contact piece should be a comman @call routine -->
{% include contact.html %}
{% endexample %}