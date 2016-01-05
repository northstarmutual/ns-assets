---
layout: page
title: Tables
---

Style individual form controls and utilize common layouts.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Basic example
For basic styling—light padding and only horizontal dividers—add the base class `.table` to any `<table>`. It may seem super redundant, but given the widespread use of tables for other plugins like calendars and date pickers, we've opted to isolate our custom table styles.

## Overview

- Use tables for data not for form/page layout.

{% example html %}
<table class="table">
  <caption>Optional table caption.</caption>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Striped rows
Use `.table-striped` to add zebra-striping to any table row within the `<tbody>`.

{% example html %}
<table class="table table-striped">
  <caption>Optional table caption.</caption>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Bordered table
Add `.table-bordered` for borders on all sides of the table and cells.

{% example html %}
<table class="table table-bordered">
  <caption>Optional table caption.</caption>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Hover rows
Add `.table-hover` to enable a hover state on table rows within a `<tbody>`.

{% example html %}
<table class="table table-hover">
  <caption>Optional table caption.</caption>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Contextual classes
Use contextual classes to color table rows or individual cells.

{% example html %}
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Column heading</th>
      <th>Column heading</th>
      <th>Column heading</th>
    </tr>
  </thead>
  <tbody>
    <tr class="active">
      <th scope="row">1</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="success">
      <th scope="row">3</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="info">
      <th scope="row">5</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="warning">
      <th scope="row">7</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="danger">
      <th scope="row">9</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
  </tbody>
</table>
{% endexample %}