---
layout: page
title: Javascript
---

I've included a few of the most used items from the bootstrap library.  For full api reference on the items below please refer to the **Full bootstrap javascript docs** below.

[Full bootstrap javascript docs](http://bootstrapdocs.com/v3.3.5/docs/javascript/) 

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Modals

Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.

[Full Documentation Here](http://bootstrapdocs.com/v3.3.5/docs/javascript/#modals)

{% example html %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        One fine body
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{% endexample %}

### Varying modal content based on trigger button

Have a bunch of buttons that all trigger the same modal, just with slightly different contents? Use event.relatedTarget and HTML data-* attributes (possibly via jQuery) to vary the contents of the modal depending on which button was clicked. See the Modal Events docs for details on relatedTarget,


{% example html %}
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>
...more buttons...
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">New message</h4>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="control-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="control-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
{% endexample %}

{% highlight js %}
<script type="text/javascript">
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
</script>
{% endhighlight %}

<script>
// A $( document ).ready() block.
$( document ).ready(function() {
  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })
});
</script>


## Tabs

Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus. **Nested tabs are not supported.**

[Full Documentation Here](http://bootstrapdocs.com/v3.3.5/docs/javascript/#tabs)

### Markup

{% example html %}
<div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="home">Home</div>
    <div role="tabpanel" class="tab-pane" id="profile">Profile</div>
    <div role="tabpanel" class="tab-pane" id="messages">Messages</div>
    <div role="tabpanel" class="tab-pane" id="settings">Settings</div>
  </div>

</div>
{% endexample %}


### Fade effect
To make tabs fade in, add `.fade` to each `.tab-pane`. The first tab pane must also have `.in` to make the initial content visible.

{% example html %}
<div class="tab-content">
  <div role="tabpanel" class="tab-pane fade in active" id="home">...</div>
  <div role="tabpanel" class="tab-pane fade" id="profile">...</div>
  <div role="tabpanel" class="tab-pane fade" id="messages">...</div>
  <div role="tabpanel" class="tab-pane fade" id="settings">...</div>
</div>
{% endexample %}


## Tooltips

Inspired by the excellent jQuery.tipsy plugin written by Jason Frame; Tooltips are an updated version, which don't rely on images, use CSS3 for animations, and data-attributes for local title storage.

{% example html %}
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
{% endexample %}

### Opt-in functionality
For performance reasons, the **Tooltip** and **Popover** data-apis are opt-in, meaning you must initialize them yourself.

One way to initialize all tooltips on a page would be to select them by their `data-toggle` attribute:

{% highlight js %}
<script type="text/javascript">
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
</script>
{% endhighlight %}


## Popover

Add small overlays of content, like those on the iPad, to any element for housing secondary information.

Popovers whose both title and content are zero-length are never displayed.

{% example html %}
<button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
{% endexample %}

### Opt-in functionality
For performance reasons, the Tooltip and Popover data-apis are opt-in, meaning you must initialize them yourself.

One way to initialize all popovers on a page would be to select them by their data-toggle attribute:

{% highlight js %}
$(function () {
  $('[data-toggle="popover"]').popover()
})
{% endhighlight %}


## Affix

### Example
The affix plugin toggles `position: fixed`; on and off, emulating the effect found with `position: sticky;`. The docs-menu on the right is a live demo of the affix plugin.

### Usage

{% highlight js %}
var $body   = $(document.body);
var $window = $(window);
var $docsMenu = $('.docs-menu');
setTimeout(function () {
  $docsMenu.affix({
    offset: {
      top: function() {
        var offsetTop      = $docsMenu.offset().top
        var sideBarMargin  = parseInt($docsMenu.children(0).css('margin-top'), 20)

        return (this.top = offsetTop - sideBarMargin)
      },
      bottom: function () {
        var offset = $('.pg-footer').outerHeight(true);
        return (this.bottom = offset + 43);
      }
    }
  });
}, 100)
{% endhighlight %}

Equally as important as the JavaScript code above the css sets `position: fixed` when your scrolling down the page and at the bottom.  A width is also needed when using `fixed` positioning. 

{% highlight css %}
.docs-menu {
  width: 250px;
}

.docs-menu.affix {
  position: fixed;
  top: 20px;
}

.docs-menu.affix-bottom {
  position: fixed;
}
{% endhighlight %}


## Alert messages

### Example alerts
Add dismiss functionality to all alert messages with this plugin.

When using a `.close` button, it must be the first child of the `.alert-dismissible` and no text content may come before it in the markup.

{% example html %}
<div class="alert alert-danger alert-dismissible fade in" role="alert">
  <button aria-label="Close" class="close" data-dismiss="alert" type="button">
    <span aria-hidden="true">×</span>
  </button>
  <h4>Oh snap! You got an error!</h4>
  <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
  <p>
    <button class="btn btn-danger" type="button">Take this action</button>
    <button class="btn btn-default" type="button">Or do this</button>
  </p>
</div>
{% endexample %}

### Usage
Just add `data-dismiss="alert"` to your close button to automatically give an alert close functionality. Closing an alert removes it from the DOM.

{% highlight html %}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{% endhighlight %}


## DataTables

Were still using the 1.9 version of datatables due to the fact the newest version is not compatible with server side processing with ice.
[Full documentation for datatables here](http://legacy.datatables.net/index) 

### Basic Example

<div class="docs-example clearfix">
<table class="table table-striped data-table" cellpadding="0" cellspacing="0" border="0" id="exampleTable">
  <thead>
    <tr>
      <th>Rendering engine</th>
      <th>Browser</th>
      <th>Platform(s)</th>
      <th>Engine version</th>
      <th>CSS grade</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd gradeX">
      <td>Trident</td>
      <td>Internet
         Explorer 4.0</td>
      <td>Win 95+</td>
      <td class="center"> 4</td>
      <td class="center">X</td>
    </tr>
    <tr class="even gradeC">
      <td>Trident</td>
      <td>Internet
         Explorer 5.0</td>
      <td>Win 95+</td>
      <td class="center">5</td>
      <td class="center">C</td>
    </tr>
    <tr class="odd gradeA">
      <td>Trident</td>
      <td>Internet
         Explorer 5.5</td>
      <td>Win 95+</td>
      <td class="center">5.5</td>
      <td class="center">A</td>
    </tr>
    <tr class="even gradeA">
      <td>Trident</td>
      <td>Internet
         Explorer 6</td>
      <td>Win 98+</td>
      <td class="center">6</td>
      <td class="center">A</td>
    </tr>
    <tr class="odd gradeA">
      <td>Trident</td>
      <td>Internet Explorer 7</td>
      <td>Win XP SP2+</td>
      <td class="center">7</td>
      <td class="center">A</td>
    </tr>
    <tr class="even gradeA">
      <td>Trident</td>
      <td>AOL browser (AOL desktop)</td>
      <td>Win XP</td>
      <td class="center">6</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Firefox 1.0</td>
      <td>Win 98+ / OSX.2+</td>
      <td class="center">1.7</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Firefox 1.5</td>
      <td>Win 98+ / OSX.2+</td>
      <td class="center">1.8</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Firefox 2.0</td>
      <td>Win 98+ / OSX.2+</td>
      <td class="center">1.8</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Firefox 3.0</td>
      <td>Win 2k+ / OSX.3+</td>
      <td class="center">1.9</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Camino 1.0</td>
      <td>OSX.2+</td>
      <td class="center">1.8</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Camino 1.5</td>
      <td>OSX.3+</td>
      <td class="center">1.8</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Netscape 7.2</td>
      <td>Win 95+ / Mac OS 8.6-9.2</td>
      <td class="center">1.7</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Netscape Browser 8</td>
      <td>Win 98SE+</td>
      <td class="center">1.7</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Netscape Navigator 9</td>
      <td>Win 98+ / OSX.2+</td>
      <td class="center">1.8</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Mozilla 1.0</td>
      <td>Win 95+ / OSX.1+</td>
      <td class="center">1</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Mozilla 1.1</td>
      <td>Win 95+ / OSX.1+</td>
      <td class="center">1.1</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Mozilla 1.2</td>
      <td>Win 95+ / OSX.1+</td>
      <td class="center">1.2</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Mozilla 1.3</td>
      <td>Win 95+ / OSX.1+</td>
      <td class="center">1.3</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Mozilla 1.4</td>
      <td>Win 95+ / OSX.1+</td>
      <td class="center">1.4</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Mozilla 1.5</td>
      <td>Win 95+ / OSX.1+</td>
      <td class="center">1.5</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Mozilla 1.6</td>
      <td>Win 95+ / OSX.1+</td>
      <td class="center">1.6</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Mozilla 1.7</td>
      <td>Win 98+ / OSX.1+</td>
      <td class="center">1.7</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Mozilla 1.8</td>
      <td>Win 98+ / OSX.1+</td>
      <td class="center">1.8</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Seamonkey 1.1</td>
      <td>Win 98+ / OSX.2+</td>
      <td class="center">1.8</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Gecko</td>
      <td>Epiphany 2.20</td>
      <td>Gnome</td>
      <td class="center">1.8</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Webkit</td>
      <td>Safari 1.2</td>
      <td>OSX.3</td>
      <td class="center">125.5</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Webkit</td>
      <td>Safari 1.3</td>
      <td>OSX.3</td>
      <td class="center">312.8</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Webkit</td>
      <td>Safari 2.0</td>
      <td>OSX.4+</td>
      <td class="center">419.3</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Webkit</td>
      <td>Safari 3.0</td>
      <td>OSX.4+</td>
      <td class="center">522.1</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Webkit</td>
      <td>OmniWeb 5.5</td>
      <td>OSX.4+</td>
      <td class="center">420</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Webkit</td>
      <td>iPod Touch / iPhone</td>
      <td>iPod</td>
      <td class="center">420.1</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Webkit</td>
      <td>S60</td>
      <td>S60</td>
      <td class="center">413</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Presto</td>
      <td>Opera 7.0</td>
      <td>Win 95+ / OSX.1+</td>
      <td class="center">-</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Presto</td>
      <td>Opera 7.5</td>
      <td>Win 95+ / OSX.2+</td>
      <td class="center">-</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Presto</td>
      <td>Opera 8.0</td>
      <td>Win 95+ / OSX.2+</td>
      <td class="center">-</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Presto</td>
      <td>Opera 8.5</td>
      <td>Win 95+ / OSX.2+</td>
      <td class="center">-</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Presto</td>
      <td>Opera 9.0</td>
      <td>Win 95+ / OSX.3+</td>
      <td class="center">-</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Presto</td>
      <td>Opera 9.2</td>
      <td>Win 88+ / OSX.3+</td>
      <td class="center">-</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Presto</td>
      <td>Opera 9.5</td>
      <td>Win 88+ / OSX.3+</td>
      <td class="center">-</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Presto</td>
      <td>Opera for Wii</td>
      <td>Wii</td>
      <td class="center">-</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Presto</td>
      <td>Nokia N800</td>
      <td>N800</td>
      <td class="center">-</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>Presto</td>
      <td>Nintendo DS browser</td>
      <td>Nintendo DS</td>
      <td class="center">8.5</td>
      <td class="center">C/A<sup>1</sup></td>
    </tr>
    <tr class="gradeC">
      <td>KHTML</td>
      <td>Konqureror 3.1</td>
      <td>KDE 3.1</td>
      <td class="center">3.1</td>
      <td class="center">C</td>
    </tr>
    <tr class="gradeA">
      <td>KHTML</td>
      <td>Konqureror 3.3</td>
      <td>KDE 3.3</td>
      <td class="center">3.3</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeA">
      <td>KHTML</td>
      <td>Konqureror 3.5</td>
      <td>KDE 3.5</td>
      <td class="center">3.5</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeX">
      <td>Tasman</td>
      <td>Internet Explorer 4.5</td>
      <td>Mac OS 8-9</td>
      <td class="center">-</td>
      <td class="center">X</td>
    </tr>
    <tr class="gradeC">
      <td>Tasman</td>
      <td>Internet Explorer 5.1</td>
      <td>Mac OS 7.6-9</td>
      <td class="center">1</td>
      <td class="center">C</td>
    </tr>
    <tr class="gradeC">
      <td>Tasman</td>
      <td>Internet Explorer 5.2</td>
      <td>Mac OS 8-X</td>
      <td class="center">1</td>
      <td class="center">C</td>
    </tr>
    <tr class="gradeA">
      <td>Misc</td>
      <td>NetFront 3.1</td>
      <td>Embedded devices</td>
      <td class="center">-</td>
      <td class="center">C</td>
    </tr>
    <tr class="gradeA">
      <td>Misc</td>
      <td>NetFront 3.4</td>
      <td>Embedded devices</td>
      <td class="center">-</td>
      <td class="center">A</td>
    </tr>
    <tr class="gradeX">
      <td>Misc</td>
      <td>Dillo 0.8</td>
      <td>Embedded devices</td>
      <td class="center">-</td>
      <td class="center">X</td>
    </tr>
    <tr class="gradeX">
      <td>Misc</td>
      <td>Links</td>
      <td>Text only</td>
      <td class="center">-</td>
      <td class="center">X</td>
    </tr>
    <tr class="gradeX">
      <td>Misc</td>
      <td>Lynx</td>
      <td>Text only</td>
      <td class="center">-</td>
      <td class="center">X</td>
    </tr>
    <tr class="gradeC">
      <td>Misc</td>
      <td>IE Mobile</td>
      <td>Windows Mobile 6</td>
      <td class="center">-</td>
      <td class="center">C</td>
    </tr>
    <tr class="gradeC">
      <td>Misc</td>
      <td>PSP browser</td>
      <td>PSP</td>
      <td class="center">-</td>
      <td class="center">C</td>
    </tr>
    <tr class="gradeU">
      <td>Other browsers</td>
      <td>All others</td>
      <td>-</td>
      <td class="center">-</td>
      <td class="center">U</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Rendering engine</th>
      <th>Browser</th>
      <th>Platform(s)</th>
      <th>Engine version</th>
      <th>CSS grade</th>
    </tr>
  </tfoot>
</table>
</div>

<script type="text/javascript">

$(document).ready(function() {
  var exampleTable = $("#exampleTable").dataTable({
    "sDom": "<'row'<'col-12'f><'col-6'l>r>t<'row'<'col-6'i><'col-6'p>>",
    "sPaginationType": "bs_normal",
    "oLanguage": {
      "sSearch": ""
    },
    "bLengthChange": false,
    "iDisplayLength": 10,
  });
  var searchInput = $('#exampleTable_filter input');
  searchInput.attr('placeholder', 'Search');
  searchInput.addClass('form-control');
  var searchLabel = $('#exampleTable_filter label');
  searchLabel.addClass('pull-left');
});

</script>

{% highlight html %}
<table cellpadding="0" cellspacing="0" border="0" class="table table-striped data-table" id="exampleTable">
  <thead>
    <tr>
      <th>Rendering engine</th>
      <th>Browser</th>
      <th>Platform(s)</th>
      <th>Engine version</th>
      <th>CSS grade</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd gradeX">
      <td>Trident</td>
      <td>Internet
         Explorer 4.0</td>
      <td>Win 95+</td>
      <td class="center"> 4</td>
      <td class="center">X</td>
    </tr>
    <tr class="even gradeC">
      <td>Trident</td>
      <td>Internet
         Explorer 5.0</td>
      <td>Win 95+</td>
      <td class="center">5</td>
      <td class="center">C</td>
    </tr>
    ...
  </tbody>
  <tfoot>
    <tr>
      <th>Rendering engine</th>
      <th>Browser</th>
      <th>Platform(s)</th>
      <th>Engine version</th>
      <th>CSS grade</th>
    </tr>
  </tfoot>
</table>
{% endhighlight %}

**This example will only work webscript enabled `@brk,,y` and not the classic `[html]` brackets.**

{% highlight js %}

$(document).ready(function() {
  var exampleTable = $("#exampleTable").dataTable({
    "sDom": "<'row'<'col-12'f><'col-6'l>r>t<'row'<'col-6'i><'col-6'p>>",
    "sPaginationType": "bs_normal",
    "oLanguage": {
      "sSearch": ""
    },
    "bLengthChange": false,
    "iDisplayLength": 10,
  });
  var searchInput = $('#exampleTable_filter input');
  searchInput.attr('placeholder', 'Search');
  searchInput.addClass('form-control');
  var searchLabel = $('#exampleTable_filter label');
  searchLabel.addClass('pull-left');
});


{% endhighlight %}

## Datepicker

Use this whenver you need to give a user a datepicker.

[Full demo/options here](http://eternicode.github.io/bootstrap-datepicker/)

This functionality is included in `main.js`

<div class="docs-example clearfix">
  <form class="grid-form-show">
    <div data-row-span="4">
      <div data-field-span="1" class="datepick-container">
        <label for="effdate">Effective Date</label>
        <div class="input-group date">
          <input type="text">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-calendar"></i>
            </span>
        </div>
      </div>
    </div>
  </form>
</div>

<script>

  $('.input-group.date').datepicker({
    calendarWeeks: true,
    todayHighlight: true,
    orientation: 'bottom left',
    autoclose: true
  });

</script>

{% highlight html %}
<div class="docs-example clearfix">
  <form class="grid-form-show">
    <div data-row-span="4">
      <div data-field-span="1" class="datepick-container">
        <label for="effdate">Effective Date</label>
        <div class="input-group date">
          <input type="text">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-calendar"></i>
            </span>
        </div>
      </div>
    </div>
  </form>
</div>

{% endhighlight %}

{% highlight js %}
<script>

  $('.input-group.date').datepicker({
    calendarWeeks: true,
    todayHighlight: true,
    orientation: 'bottom left',
    autoclose: true
  });

</script>
{% endhighlight %}

## Input masks

{% example html %}
<form class="grid-form-show">
  <div data-row-span="4">
    <div data-field-span="1">
      <label for="effdate">Phone:</label>
      <div class="input-group">
        <input type="text" name="phone" id="phone">
      </div>
    </div>
  </div>
  <div data-row-span="4">
    <div data-field-span="1">
      <label for="effdate">Date:</label>
      <div class="input-group">
        <input type="text" name="date" id="date">
      </div>
    </div>
    <div data-field-span="3">
      <label>&nbsp;</label>
      <p class="help-block">Use this where it's not practical to use a date picker, for example a date of loss date where the timeframe is too large.  Can also be combined with datepicker above.</p>
    </div>
  </div>
  <div data-row-span="4">
    <div data-field-span="1">
      <label for="amount">Currency:</label>
      <div class="input-group">
        <div class="input-group-addon">$</div>
        <input type="text" name="amount" id="amount">
      </div>
    </div>
    <div data-field-span="3">
      <label>&nbsp;</label>
      <p class="help-block">Losing focus on this field automatically formats the number.</p>
    </div>
  </div>
</form>
{% endexample %}


<script>
// Mask the date field
$("#date").inputmask("mm/dd/yyyy");

// Mask the phone number field
$("#phone").inputmask("999-999-9999");

// Consistent amount formatting
$("#amount").on("blur", function() {
  $(this).formatCurrency({ symbol: ""});
});
</script>

{% highlight js %}

// Mask the date field
$("#date").inputmask("mm/dd/yyyy");

// Mask the phone number field
$("#phone").inputmask("999-999-9999");

// Consistent amount formatting
$("#amount").on("blur", function() {
  $(this).formatCurrency({ symbol: ""});
});

{% endhighlight %}


## Loading button

Sometimes it's helpful to have a button show loading while waiting for an action.  If something is going to take more than a couple of seconds I would consider adding this feature to it.

{% example html %}
<button type="button" id="submit-btn" class="btn btn-primary" autocomplete="off">
  Submit
</button>
{% endexample %}

<script>
var $submitBtn = $("#submit-btn");

$submitBtn.on("click",function(event) {
  event.preventDefault();
  setTimeout(resetBtn, 4000); // Put it back to the way it was
  $submitBtn.prop("disabled", true)
    .html('<span class="glyphicon" id="spin"></span>Loading...');

  // Create the Spinner with options
  var opts = {
    lines: 9, // The number of lines to draw
    length: 1, // The length of each line
    width: 2, // The line thickness
    radius: 5, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    color: "#fff", // #rgb or #rrggbb or array of colors
    speed: 1, // Rounds per second
    className: "spinner", // The CSS class to assign to the spinner
    zIndex: 0 // The z-index (defaults to 2000000000)
  }
  var target  = document.getElementById("spin");
  var spinner = new Spinner(opts).spin(target);

  // Submit the form here...
  // $('#my-form').submit();
});

function resetBtn() {
  $("#submit-btn").prop("disabled", false).html('Submit');
}
</script>

{% highlight js %}
<script>
var $submitBtn = $("#submit-btn");

$submitBtn.on("click",function(event) {
  event.preventDefault();
  setTimeout(resetBtn, 4000); // Put it back to the way it was.  Not need if submitting form
  $submitBtn.prop("disabled", true)
    .html('<span class="glyphicon" id="spin"></span> Loading...');

  // Create the Spinner with options
  var opts = {
    lines: 9, // The number of lines to draw
    length: 1, // The length of each line
    width: 2, // The line thickness
    radius: 5, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    color: "#fff", // #rgb or #rrggbb or array of colors
    speed: 1, // Rounds per second
    className: "spinner", // The CSS class to assign to the spinner
    zIndex: 0 // The z-index (defaults to 2000000000)
  }
  var target  = document.getElementById("spin");
  var spinner = new Spinner(opts).spin(target);

  // Submit the form here...
  // $('#my-form').submit();
});

function resetBtn() {
  $("#submit-btn").prop("disabled", false).html('Submit');
}
</script>
{% endhighlight %}



## Add another

In the quoting systems we inputs where you can have multiple for a given type.  This is where the **Add another** button comes in handy.  With the example below there is the potential for stat numbers to have gaps between `01` and highest stat number, so you'll need to account for that in the server side code.


{% example html %}
<form class="grid-form-show">
  <div class="rec-container">
    <div data-row-span="7" class="rec-group" data-stat="01" id="rec-group01">
      <div data-field-span="2">
        <label>Record A:</label>
        <input type="text" name="recA01" id="recA01" data-stat="01">
      </div>
      <div data-field-span="2">
        <label>Record B:</label>
        <input type="text" name="recB01" id="recB01" data-stat="01">
      </div>
      <div data-field-span="1">
        <label>Record C:</label>
        <input type="text" name="recC01" id="recC01" data-stat="01">
      </div>
      <div data-field-span="1">
        <label>&nbsp;</label>
        <button type="button" id="rec-del-btn01" class="btn btn-danger hide" data-stat="01">Delete</button>
      </div>
    </div>
  </div>
  <div data-row-span="10">
    <div data-field-span="1">
      <input type="hidden" id="highstat" name="highstat" value="01">
      <!-- Will start as 01.  JavaScript will increment this and then ICE should set this on page load -->
      <button type="button" id="addAnother" class="btn btn-success">Add Another</button>
    </div>
    <div data-field-span="1">
      <!-- For demo purposes only -->
      <input type="text" id="highstat-ro" name="highstat-ro" readonly value="01">High Stat
    </div>
  </div>
</form>
{% endexample %}


<script type="text/javascript">

var baseStat = 01;
$("#addAnother").on("click", addAnother);

function pad (str, max) {
  str = str + "";
  return str.length < max ? pad("0" + str, max) : str;
}

function addAnother() {

  // Make a copy of the first one
  var copy = $(".rec-group:first").clone();

  // If on display add another and update stat numbers
  stat = $("#highstat").val();
  stat ++;
  stat = pad(stat, 2);
  baseStat = pad(baseStat, 2);
  copy[0].id = "rec-group" + stat;
  copy.attr("data-stat", stat).removeClass('has-error')
  copy.find("#recA" + baseStat).attr("id", "recA" + stat)
    .attr("name", "recA" + stat).val('').attr("data-stat", stat).prop("disabled", false);
  copy.find("#recB" + baseStat).attr("id", "recB" + stat)
    .attr("name", "recB" + stat).val('').attr("data-stat", stat).prop("disabled", false);
  copy.find("#recC" + baseStat).attr("id", "recC" + stat)
    .attr("name", "recC" + stat).val('').attr("data-stat", stat).prop("disabled", false);
  copy.find('#rec-del-btn' + baseStat).attr("id", "rec-del-btn" + stat)
    .attr("data-stat", stat).removeClass("hide");
  $(copy).appendTo(".rec-container"); // Add to screen
  $("#highstat").val(stat);
  $("#highstat-ro").val(stat);  // For demo purposes only
  $("#rec-del-btn" + stat).on("click", function() {
    stat = $(this).data("stat");
    stat = pad(stat, 2);
    removeSection(stat);
  });
}

function removeSection(stat) {
  $("#rec-group" + stat).remove();
  var lstat = $(".rec-group:last").data("stat");
  lstat = pad(lstat, 2);
  $("#highstat").val(lstat);
  $("#highstat-ro").val(lstat);  // For demo purposes only
}

</script>



{% highlight js %}
<script type="text/javascript">

var baseStat = 01;

// Attach event to Add Another button
$("#addAnother").on("click", addAnother);

// Zero fills the stat number
function pad (str, max) {
  str = str + "";
  return str.length < max ? pad("0" + str, max) : str;
}

function addAnother() {

  // Make a copy of the first one
  var copy = $(".rec-group:first").clone();

  // Get the current high stat number
  stat = $("#highstat").val();
  stat ++;
  stat = pad(stat, 2);
  baseStat = pad(baseStat, 2);
  copy[0].id = "rec-group" + stat;
  copy.attr("data-stat", stat).removeClass('has-error')
  copy.find("#recA" + baseStat).attr("id", "recA" + stat)
    .attr("name", "recA" + stat).val('').attr("data-stat", stat).prop("disabled", false);
  copy.find("#recB" + baseStat).attr("id", "recB" + stat)
    .attr("name", "recB" + stat).val('').attr("data-stat", stat).prop("disabled", false);
  copy.find("#recC" + baseStat).attr("id", "recC" + stat)
    .attr("name", "recC" + stat).val('').attr("data-stat", stat).prop("disabled", false);
  copy.find('#rec-del-btn' + baseStat).attr("id", "rec-del-btn" + stat)
    .attr("data-stat", stat).removeClass("hide");
  $(copy).appendTo(".rec-container"); // Add to container
  $("#highstat").val(stat);  //Update the highest stat number for new record

  // Attach even to delete button for this record
  $("#rec-del-btn" + stat).on("click", function() {
    stat = $(this).data("stat");
    stat = pad(stat, 2);
    removeSection(stat);
  });
}

function removeSection(stat) {
  $("#rec-group" + stat).remove();  // Remove the whole rec-group
  var lstat = $(".rec-group:last").data("stat");  // Gets highest stat off of last record
  lstat = pad(lstat, 2);
  $("#highstat").val(lstat);
}
</script>
{% endhighlight %}
