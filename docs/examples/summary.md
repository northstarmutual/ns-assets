---
layout: example
title: Summary page
permalink: /examples/summary-page/
---

<div class="row hidden-print">
  <div class="col-9" style="padding-left:30px;padding-right:20px">
    <div class="alert alert-info">
      <p>Try print preview (ctrl + p) to see the <code>.visible-print</code> and <code>.hidden-print</code> classes at work.</p>
    </div>
  </div>
</div>



{% example html %}
<div class="app-container">
  <div class="row visible-print">
    <div class="col-6">
      <img src="https://quotedev.nstarco.com/assets/common/images/NSM-logo-web.gif" class="print-logo"
      alt="North Star Mutual Insurance Company">
    </div>
    <div class="col-6">
      <h1 class="print-title">
        Umbrella Quote
        <img src="https://quotedev.nstarco.com/assets/images/umbrella.png" title="Umbrella Quoting System">
      </h1>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <div class="panel panel-default panel-pg-hdg">
        <div class="panel-heading">
          <strong> Application: UL42005</strong>
          <strong class="pull-right">
            Effective:
            <a href="#" title="Change effective date">
            07/25/2015
            </a>
          </strong>
        </div>
        <div class="panel-body">
          <address>
            <a href="#">
              PEARL BAUMAN
            </a>
            <br>
            500 E LINCOLN ST APT 103 <br>
            HENDRICKS, MN 56136-9561 <br>
          </address>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="panel panel-default panel-pg-hdg">
        <div class="panel-heading">
          <strong>  NORTH STAR INSURANCE AGENCY (365)  </strong>
        </div>
        <div class="panel-body">
          <address>
            <strong>NORTH STAR INSURANCE AGENCY</strong><BR>
            PO BOX 48<br>
            COTTONWOOD, MN 56229 <br>
            <abbr title="Phone">Phone:</abbr>  (507) 423-6262
            <BR>
            <abbr title="Fax">Fax:</abbr>  (507) 423-6323
          </address>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <div class="row">
            <div class="half-lg-full-sm qte-btns">
              <h3 class="summary-hdg">Umbrella App Details</h3>
            </div>
            <div class="half-lg-full-sm qte-btns">
              <h3 class="label label-success summary-hdg-sm">
                Premium for this Quote is: $ 178.00
              </h3>
            </div>
          </div>
          <div class="row">
            <div class="col-3 qte-btns">
              <a href="#" id="activePDF-trigger" style="margin-right: 2em;"
                class="btn btn-sm btn-default hidden-print btn-block">
                Print Summary Details
              </a>
            </div>
            <div class="col-3 col-offset-6 qte-btns">
              <a href="#" class="btn btn-default btn-sm pull-right hidden-print btn-block">
                Complete App
              </a>
            </div>
          </div>
        </div>
        <div class="panel-body">
        <div class="row">
          <div id="item-detail-view-details">
            <div id="list-items-title">
              <span class="list-item-name"> Policy Limits </span>
              <span class="list-item-qty"> &nbsp; </span>
              <span class="list-item-total"> &nbsp; </span>
            </div>
            <ul id="list-items-container">
              <li class="list-item">
                <span class="list-item-name">
                  <a href="#">Personal Umbrella  Limit</a>
                </span>
                <span class="list-item-qty"> $1,000,000 </span>
                <span class="list-item-total"> &nbsp; </span>
              </li>
              <li class="list-item">
                <span class="list-item-name">
                  <a href="#" title="Change effective date">
                    Effective Date: 07/25/2015
                  </a>
                </span>
                <span class="list-item-qty">
                </span>
                <span class="list-item-total"> &nbsp; </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div id="item-detail-view-details">
            <div id="list-items-title">
              <span class="list-item-name"> Underlying Limits </span>
              <span class="list-item-qty"></span>
            </div>
            <ul id="list-items-container">
              <li class="list-item">
                <span class="list-item-name">
                  <a href="#">Auto Limits</a>
                </span>
                <span class="list-item-qty">250/500/100</span>
              </li>
              <li class="list-item">
                <span class="list-item-name">
                  <a href="#">Company</a>
                </span>
                <span class="list-item-qty">North Star Mutual</span>
                <span class="list-item-total"></span>
              </li>
              <li class="list-item">
                <span class="list-item-name">
                  <a href="#">Uninsured/Underinsured</a>
                </span>
                <span class="list-item-qty">Not Included</span>
                <span class="list-item-total"></span>
              </li>
              <li class="list-item">
                <span class="list-item-name">
                  <a href="#">Primary Residence</a>
                </span>
                <span class="list-item-qty"> 300,000 </span>
                <span class="list-item-total"></span>
              </li>
            </ul>
          </div>
        </div>
          <div class="row">
            <div id="item-detail-view-details">
              <div id="list-items-title">
                <span class="list-item-name">Residence</span>
                <span class="list-item-qty">Qty/Present</span>
                <span class="list-item-total">Premium</span>
              </div>
              <ul id="list-items-container">
                <li class="list-item">
                  <span class="list-item-name">
                    <a href="#">Locations</a>
                  </span>
                  <span class="list-item-qty">1</span>
                  <span class="list-item-total">115.00</span>
                </li>
                <li class="list-item" style="border-bottom:0">
                  <span class="list-item-name">&nbsp;</span>
                  <span class="list-item-qty">Total:</span>
                  <span class="list-item-total">115.00</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div id="item-detail-view-details">
              <div id="list-items-title">
                <span class="list-item-name">Drivers</span>
                <span class="list-item-qty">Qty</span>
                <span class="list-item-total">Premium</span>
              </div>
              <ul id="list-items-container">
                <li class="list-item">
                  <span class="list-item-name">
                    <a href="#">Drivers 25 and Over</a>
                  </span>
                  <span class="list-item-qty">2</span>
                  <span class="list-item-total">0.00</span>
                </li>
                <li class="list-item" style="border-bottom:0">
                  <span class="list-item-name text-right">Total:</span>
                  <span class="list-item-qty">2</span>
                  <span class="list-item-total">0.00</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="row ">
            <div id="item-detail-view-details">
              <div id="list-items-title">
                <span class="list-item-name">Vehicles </span>
                <span class="list-item-qty">Qty</span>
                <span class="list-item-total">Premium</span>
              </div>
              <ul id="list-items-container">
                <li class="list-item">
                  <span class="list-item-name">
                    <a href="#">Automobiles</a>
                  </span>
                  <span class="list-item-qty">3</span>
                  <span class="list-item-total">63.00</span>
                </li>
                <li class="list-item" style="border-bottom:0">
                  <span class="list-item-name text-right">Total:</span>
                  <span class="list-item-qty">3</span>
                  <span class="list-item-total">63.00</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="row hidden-print">
            <div id="item-detail-view-details">
              <div id="list-items-title">
                <span class="list-item-name">Watercraft</span>
                <span class="list-item-qty">Qty</span>
                <span class="list-item-total">Premium</span>
              </div>
              <ul id="list-items-container">
                <li class="list-item" style="border-bottom:0">
                  <span class="list-item-name">
                    <a href="#" class="btn btn-success">Add</a>
                  </span>
                </li>
              </ul>
            </div>
          </div><!-- /.row -->
          <div class="row hidden-print">
            <div id="item-detail-view-details">
              <div id="list-items-title">
                <span class="list-item-name">Recreational Vehicles</span>
                <span class="list-item-qty">Qty</span>
                <span class="list-item-total">Premium</span>
              </div>
              <ul id="list-items-container">
                <li class="list-item" style="border-bottom:0">
                  <a href="#" class="btn btn-success">Add</a>
                </li>
              </ul>
            </div>
          </div><!-- /.row -->
          <div class="row">
            <div id="item-detail-view-details">
              <ul id="list-items-container">
                <li class="list-item">&nbsp;</li>
                <li class="list-item" style="border-bottom:0">
                  <span class="list-item-name">&nbsp;</span>
                  <span class="list-item-qty"><strong>Total Premium:</strong></span>
                  <span class="list-item-total"><strong>178.00</strong></span>
                </li>
              </ul>
            </div>
          </div><!-- /.row -->
          <div class="row hidden-print top-margin" style="margin-top: 30px;">
            <div class="col-12">
              <div class="col-3 col-1-offset qte-btns first-btn">
                <a href="#" class="btn btn-default fill">New App</a>
              </div>
              <div class="col-3 col-1-offset qte-btns">
                <a href="#" class="btn btn-default fill">
                  Change As New
                </a>
              </div>
              <div class="col-3 col-1-offset qte-btns">
              </div>
              <div class="col-3 col-1-offset qte-btns">
                <a href="#" class="btn btn-primary fill">
                  Complete App
                </a>
              </div>
            </div>
          </div>
        </div><!-- .panel-body -->
      </div>
    </div>
  </div><!-- .row -->
  <div class="visible-print row col-12">
    <p>North Star Mutual Insurance Company &#8226;
    269 Barstad Road South, PO Box 48 &#8226; Cottonwood, MN 56229 &#8226; 800-622-5230</p>
  </div>
</div><!-- .app-container -->

<!-- The contact piece should be a comman @call routine -->
{% include contact.html %}
{% endexample %}