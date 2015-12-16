---
layout: example
title: Form layout
permalink: /examples/form-layout/
---

{% example html %}
<div class="app-container">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3>{{ page.title }}</h3>
    </div>
    <div class="panel-body">
    <form class="grid-form-show">
      <fieldset>
        <div data-row-span="2">
          <div data-field-span="1">
            <label>Field 1</label>
            <input type="text">
          </div>
          <div data-field-span="1">
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