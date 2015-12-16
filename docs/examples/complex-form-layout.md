---
layout: example
title: Complex Form layout
permalink: /examples/complex-form-layout/
---

<div class="row">
  <div class="col-9" style="padding-left:30px;padding-right:20px">
    <div class="alert alert-info">
      <p>Use the fieldset legends where you have to break apart multiple sections on long forms.</p>
    </div>
  </div>
</div>

{% example html %}
<div class="app-container">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3>{{ page.title }}</h3>
    </div>
    <div class="panel-body">
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
    </div>
  </div>
</div>
<!-- The contact piece should be a comman @call routine -->

{% include contact.html %}

{% endexample %}