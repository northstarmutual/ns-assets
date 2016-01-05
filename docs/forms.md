---
layout: page
title: Forms
---

Style individual form controls and utilize common layouts.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Overview

- Always declare a `type` on your `<button>`s.
- For form submits use `btn-primary`.
- For new development use Grid Forms 
- Always surround attributes with `""` for example `id="elementId"`.
- Labels surrounding `checkboxes` and `radios` should be `clickable`.

## Gridforms
An effort to make beautiful forms for web applications that make data entry less painful. Gridforms is a front-end library which handles the boilerplate necessary to build grid based forms.

Gridforms originally from [gridforms](https://github.com/kumailht/gridforms)

### Markup your Gridform
{% example html %}
<form class="grid-form-show">
  <fieldset>
    <legend>Form Section</legend>
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
{% endexample %}

Marking up a Gridform is quite intuitive, you'll get a handle on it quickly.
Start by giving your `<form>` element a `grid-form-show` class to turn it into a Gridform.

**rows**: A `<div>` element with the `data-row-span` attribute makes up a row. Give the attribute a value of `2` to divide it into 2 columns, give it a value of `3` to divide it into 3 columns and so on.

**fields**: Each row has a set of fields. Fields are wrapped in `div` elements and have a `data-field-span` attribute attached to it. Set to "1" in this example, which means the field spans 1 columns.

Optionally use a `fieldset` with a `legend` to divide your form into sections.

## Controlling field width
Give an element a percentage of the width by making the `data-row-span` greater than the `data-field-span`.  For example setting the `row-span` to `2` and the field span of `1` will make the field `50`% width.  Setting `row-span` to `3` and making the `field-span` of `1` will make it `33`%.

{% example html %}
<form class="grid-form-show">
  <div data-row-span="2">
    <div data-field-span="1">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" id="exampleInputEmail1" placeholder="Email">
    </div>
  </div>
  <div data-row-span="2">
    <div data-field-span="1">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" id="exampleInputPassword1" placeholder="Password">
    </div>
  </div>
  <div data-row-span="3">
    <div data-field-span="1">
      <label for="exampleInputPassword2">Re-Type</label>
      <input type="password" id="exampleInputPassword2" placeholder="Re-Type Password">
    </div>
  </div>
  <div data-row-span="1">
    <div data-field-span="1">
      <label for="exampleInputFile">File input</label>
      <span class="btn btn-success fileinput-button">
          <i class="glyphicon glyphicon-plus"></i>
          <span>Add files...</span>
          <input type="file" name="files" multiple="" >
      </span>
      <p class="help-block">Example block-level help text here.</p>
    </div>
  </div>
  <div data-row-span="1">
    <div data-field-span="1">
      <label>&nbsp;</label>
      <label><input type="checkbox"> Check me out</label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{% endexample %}

## Addons

{% example html %}
<form class="grid-form-show">
  <fieldset>
    <legend>Form Section</legend>
    <div data-row-span="6">
      <div data-field-span="3">
        <label>Amount 1</label>
        <div class="input-group">
          <div class="input-group-addon">$</div>
          <input type="text" placeholder="Amount">
          <div class="input-group-addon">.00</div>
        </div>
      </div>
      <div data-field-span="2">
        <label>Amount 2</label>
        <div class="input-group">
          <div class="input-group-addon">$</div>
          <input type="text" placeholder="Amount2">
          <div class="input-group-addon">.00</div>
        </div>
      </div>
      <div data-field-span="1">
        <label>Amount 3</label>
        <div class="input-group">
          <div class="input-group-addon">$</div>
          <input type="text" placeholder="Amount3">
          <div class="input-group-addon">.00</div>
        </div>
      </div>
    </div>
    <div data-row-span="1">
      <div data-field-span="1">
        <button type="button" class="btn btn-primary"> Submit </button>
      </div>
    </div>
  </fieldset>
</form>
{% endexample %}

## Focus

You can use the `autofocus` attribute on your form input if you'd like that field to have input on page load.

{% highlight html %}
<input type="text" name="someinput" autofocus>
{% endhighlight %}

## Checkboxes and radios

Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

**When using checkboxes or radio buttons please wrap them in a label.  This allows you to click on the words next to the input making it easier to hit.**

Disabled checkboxes and radios are supported, but to provide a "not-allowed" cursor on hover of the parent `<label>`, you'll need to add the `.disabled` class to the parent element.  

{% example html %}
<form class="grid-form-show">
  <div data-row-span="1">
    <div data-field-span="1">
      <label>Checkbox Group Vertical</label>
      <label>
        <input type="checkbox" value="">
        Option one is this and that&mdash;be sure to include why it's great
      </label>
      <br>
      <label class="disabled">
        <input type="checkbox" value="" disabled>
        Option two is disabled
      </label>
    </div>
  </div>
  <div data-row-span="1">
    <div data-field-span="1">
      <label>Checkbox Group Horizontal</label>
      <label>
        <input type="checkbox" value="">
        Option A 
      </label>
      <label>
        <input type="checkbox" value="">
        Option B
      </label>
      <label>
        <input type="checkbox" value="">
        Option C
      </label>
    </div>
  </div>
  <div data-row-span="1">
    <div data-field-span="1">
      <label>Radio Group Vertical</label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Option one is this and that&mdash;be sure to include why it's great
      </label>
      <br>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        Option two can be something else and selecting it will deselect option one
      </label>
      <br>
      <label class="disabled">
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        Option three is disabled
      </label>
    </div>
  </div>
  <div data-row-span="1">
    <div data-field-span="1">
      <label>Radio Group Horizontal</label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Apple
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        Pear
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">
        Bananner
      </label>
    </div>
  </div>
</form>
{% endexample %}


## Validation

Bootstrap includes validation styles for error, warning, and success states on form controls. To use, add .has-warning, .has-error, or .has-success to the parent element. 

{% example html %}
<form class="grid-form-show">
  <div data-row-span="2">
    <div data-field-span="1" class="has-success">
      <label> Input with success</label>
      <input type="text">
      <span id="helpBlock2" class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
    </div>
  </div>
  <div data-row-span="2">
    <div data-field-span="1" class="has-warning">
      <label> Input with warning</label>
      <input type="text">
    </div>
  </div>
  <div data-row-span="2">
    <div data-field-span="1" class="has-error">
      <label> Input with error</label>
      <input type="text">
    </div>
  </div>
  <div data-row-span="1">
    <div data-field-span="1">
      <label>Individual Checkboxes Validation</label>
      <label class="has-success">
        <input type="checkbox" value="">
        Checkbox with success
      </label>
      <label class="has-warning">
        <input type="checkbox" value="">
        Checkbox with warning
      </label>
      <label class="has-error">
        <input type="checkbox" value="">
        Checkbox with error
      </label>
    </div>
  </div>
  <div data-row-span="1">
    <div data-field-span="1" class="has-error">
      <label>Checkboxes Group Validation</label>
      <label>
        <input type="checkbox" value="">
        Checkbox with success
      </label>
      <label>
        <input type="checkbox" value="">
        Checkbox with warning
      </label>
      <label>
        <input type="checkbox" value="">
        Checkbox with error
      </label>
    </div>
  </div>
  <div data-row-span="1">
    <div data-field-span="1" class="has-error">
      <label>Radio Group Horizontal</label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1">
        Option 1
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        Option 2
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">
        Option 3
      </label>
    </div>
  </div>
  </div>
</form>
{% endexample %}

## Disabled state
Add the `disabled` boolean attribute on an input to prevent user interactions. Disabled inputs appear lighter and add a `not-allowed `cursor.

{% example html %}
<form class="grid-form-show">
  <div data-row-span="2">
    <div data-field-span="1">
      <input type="text" placeholder="Disabled input here…" disabled>
    </div>
  </div>
</form>
{% endexample %}

## Readonly state
Add the `readonly` boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

{% example html %}
<form class="grid-form-show">
  <div data-row-span="2">
    <div data-field-span="1">
      <input type="text" placeholder="Readonly input here…" readonly>
    </div>
  </div>
</form>
{% endexample %}


## Kitchen Sink Example

This example shows multiple form fields, and input types.

{% example html %}
  <h2>Personal Bank Account Initial Application</h2>
  <form class="grid-form-show">
    <fieldset>
      <legend>Please open an account at</legend>
      <div data-row-span="1">
        <div data-field-span="1">
          <label>Branch Name</label>
          <input type="text">
        </div>
      </div>
    </fieldset>
    <fieldset>
      <legend>Personal Details (Sole/First Accountholder/Minor)</legend>
      <div data-row-span="4">
        <div data-field-span="1">
          <label>Title</label>
          <input id="r1" name="customer-title" type="radio"><label for="r1"> Mr.</label>
          <input id="r2" name="customer-title" type="radio"><label for="r2"> Mrs.</label>  
          <input id="r3" name="customer-title" type="radio"><label for="r3"> Ms.</label>
        </div>
        <div data-field-span="3">
          <label>Full Name</label>
          <input type="text">
        </div>
      </div>
      <div data-row-span="2">
        <div data-field-span="1">
          <label>Date of birth</label>
          <input type="text">
        </div>
        <div data-field-span="1">
          <label>Nationality</label>
          <select>
            <option value="United States" title="United States">United States</option>
          </select>
        </div>
      </div>
      <div data-row-span="4">
        <div data-field-span="2" data-field-error="Please enter a valid email address">
          <label>E-mail</label>
          <input type="text">
        </div>
        <div data-field-span="1">
          <label>Mobile No.</label>
          <input type="text">
        </div>
        <div data-field-span="1">
          <label>Existing Bank Account No. (if any)</label>
          <input type="text">
        </div>
      </div>
      <div data-row-span="2">
        <div data-field-span="1">
          <label>In case of a minor please provide details (Name of parent and natural guardian)</label>
          <input type="text">
        </div>
        <div data-field-span="1">
          <label>Name of father/spouse</label>
          <input type="text">
        </div>
      </div>
      <br>
      <fieldset>
        <legend>Residential address</legend>
        <div data-row-span="2">
          <div data-field-span="1">
            <label>Flat no. and bldg. name</label>
            <input type="text">
          </div>
          <div data-field-span="1">
            <label>Road no./name</label>
            <input type="text">
          </div>
        </div>
        <div data-row-span="4">
          <div data-field-span="3">
            <label>Area and landmark</label>
            <input type="text">
          </div>
          <div data-field-span="1">
            <label>City</label>
            <input type="text">
          </div>
        </div>
        <div data-row-span="4">
          <div data-field-span="1">
            <label>Telephone Residence</label>
            <input type="text">
          </div>
          <div data-field-span="1">
            <label>Office</label>
            <input type="text">
          </div>
          <div data-field-span="1">
            <label>Fax</label>
            <input type="text">
          </div>
          <div data-field-span="1">
            <label>Pin code</label>
            <input type="text">
          </div>
        </div>
      </fieldset>
    </fieldset>
    <br>
    <fieldset>
      <legend>Mailing Address (If different from the First Accountholder's address)</legend>
      <div data-row-span="1">
        <div data-field-span="1">
          <label>Company name and department/ Flat no. and bldg. name</label>
          <input type="text">
        </div>
      </div>
      <div data-row-span="4">
        <div data-field-span="1">
          <label>Road no./name</label>
          <input type="text">
        </div>
        <div data-field-span="1">
          <label>Area and landmark</label>
          <input type="text">
        </div>
        <div data-field-span="1">
          <label>City</label>
          <input type="text">
        </div>
        <div data-field-span="1">
          <label>Pin Code</label>
          <input type="text">
        </div>
      </div>
      <div data-row-span="4">
        <div data-field-span="1">
          <label>Telephone Residence</label>
          <input type="text">
        </div>
        <div data-field-span="1">
          <label>Office</label>
          <input type="text">
        </div>
        <div data-field-span="1">
          <label>Fax</label>
          <input type="text">
        </div>
        <div data-field-span="1">
          <label>Mobile No.</label>
          <input type="text">
        </div>
      </div>
      <div data-row-span="1">
        <div data-field-span="1">
          <label>E-mail</label>
          <input type="text">
        </div>
      </div>
    </fieldset>
    <br><br>
    <fieldset>
      <legend>Details of Introduction by Existing Customer (If applicable)</legend>
      <div data-row-span="2">
        <div data-field-span="1">
          <label>Customer Name</label>
          <input type="text">
        </div>
        <div data-field-span="1">
          <label>Account No.</label>
          <input type="text">
        </div>
      </div>
      <div data-row-span="1">
        <div data-field-span="1">
          <label>Introducer's signature</label>
          <textarea></textarea>
        </div>
      </div>
    </fieldset>
    <br><br>
    <fieldset>
      <legend>Account Details</legend>
      <div data-row-span="2">
        <div data-field-span="1">
          <label>Choice of account</label>
          <label><input type="checkbox"> Savings</label> &nbsp;
          <label><input type="checkbox"> Current</label> &nbsp;
          <label><input type="checkbox"> Fixed deposits</label>
        </div>
        <div data-field-span="1">
          <label>Mode of funding</label>
          <label><input type="checkbox"> Cash</label> &nbsp;
          <label><input type="checkbox"> Cheque</label> &nbsp;
          <label><input type="checkbox"> NEFT</label>
        </div>
      </div>
      <div data-row-span="1">
        <div data-field-span="1">
          <label>Amount</label>
          <input type="text">
        </div>
      </div>
      <br>
      <fieldset>
        <legend>Details of Fixed Deposit</legend>
        <div data-row-span="2">
          <div data-field-span="1">
            <label>Types of deposit</label>
            <label><input type="checkbox"> Ordinary</label> &nbsp;
            <label><input type="checkbox"> Cumulative</label>
          </div>
          <div data-field-span="1">
            <label>Mode of funding</label>
            <label><input type="checkbox"> Cash</label> &nbsp;
            <label><input type="checkbox"> Cheque</label> &nbsp;
            <label><input type="checkbox"> NEFT</label>
          </div>
        </div>
        <div data-row-span="4">
          <div data-field-span="2">
            <label>Amount</label>
            <input type="text">
          </div>
          <div data-field-span="1">
            <label>No. of deposits</label>
            <input type="text">
          </div>
          <div data-field-span="1">
            <label>Individual Deposit Amount</label>
            <input type="text">
          </div>
        </div>
      </fieldset>
    </fieldset>
    <br><br>
    <fieldset>
      <legend>Personal Details</legend>
      <div data-row-span="1">
        <div data-field-span="1">
          <label>Occupation</label>
          <label><input type="checkbox"> Non-executive</label> &nbsp;
          <label><input type="checkbox"> Housewife</label> &nbsp;
          <label><input type="checkbox"> Retired</label> &nbsp;
          <label><input type="checkbox"> Student</label> &nbsp;
          <label><input type="checkbox"> Other</label> &nbsp;
          <label><input type="checkbox"> Unemployed</label>
        </div>
      </div>
      <div data-row-span="1">
        <div data-field-span="1">
          <label>Job Title</label>
          <input type="text">
        </div>
      </div>
      <div data-row-span="2">
        <div data-field-span="1">
          <label>Department</label>
          <input type="text">
        </div>
        <div data-field-span="1">
          <label>Nature of business</label>
          <input type="text">
        </div>
      </div>
      <div data-row-span="2">
        <div data-field-span="1">
          <label>Education</label>
          <label><input type="checkbox"> Under graduate</label> &nbsp;
          <label><input type="checkbox"> Graduate</label> &nbsp;
          <label><input type="checkbox"> Others</label>
        </div>
        <div data-field-span="1">
          <label>Monthly Income</label>
          <label><input type="checkbox"> Zero Income</label> &nbsp;
          <label><input type="checkbox"> Less than $10,000</label> &nbsp;
          <label><input type="checkbox"> $10,000+</label>
        </div>
      </div>
      <div data-row-span="2">
        <div data-field-span="1">
          <label>Maritial Status</label>
          <label><input type="checkbox"> Married</label> &nbsp;
          <label><input type="checkbox"> Single</label>
        </div>
        <div data-field-span="1">
          <label>Spouse name</label>
          <input type="text">
        </div>
      </div>
      <br>
      <fieldset>
        <legend>Other existing bank accounts, if any</legend>
        <div data-row-span="2">
          <div data-field-span="1">
            <label>Name of the Bank / branch</label>
            <input type="text">
          </div>
          <div data-field-span="1">
            <label>Name of the Bank / branch</label>
            <input type="text">
          </div>
        </div>
      </fieldset>
    </fieldset>
    <br><br>
    <fieldset>
      <legend>Reason for Account opening</legend>
      <div data-row-span="2">
        <div data-field-span="1">
          <label>Please specify</label>
          <input type="text">
        </div>
      </div>
    </fieldset>
    <br><br>
    <fieldset>
      <legend>Terms And Conditions</legend>
      <div data-row-span="1">
        <div data-field-span="1">
          <label></label>
          <label><input type="checkbox"> I/We confirm having read and understood the account rules of The Banking Corporation Limited ('the Bank'), and hereby agree to be bound by the terms and conditions and amendments governing the account(s) issued by the Bank from time-to-time.</label>
        </div>
      </div>
    </fieldset>
  </form>
{% endexample %}
