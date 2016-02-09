
$(document).ready(function() {
  'use strict';

  // Initialize the ICE Service Vars
  var GUrlCat = $("#GUrlCat").val();
  var Service  = $("#Service").val();
  var svcUrl = GUrlCat + Service;

  //Initialize the jQuery File Upload widget:
  var uploadObj = $('#fileupload').fileupload({
    url: svcUrl,
    start: function (e) {
      $("#processing-text").html("Processing...").show();
    },
    always: function (e, data) {
      $("#processing-text").html("").hide();
    }
  });


  uploadObj.fileupload('option', {
      autoUpload: true,
      sequentialUploads: true,  // ICE Doesn't do that well with multiple simultaneous requests
      maxFileSize: 10000000, // 10mb max file upload size (in bytes)
      acceptFileTypes: /(\.|\/)(gif|jpeg|jpg|png|docx|xls|xlsx|doc|pdf|tif|txt|rtf)$/i
  })

  // Load existing files:
  // $('#fileupload').addClass('fileupload-processing');
  $.ajax({
      url: svcUrl + '&action=retrieve',
      dataType: 'json',
      context: uploadObj[0]
  }).always(function () {
      $(this).removeClass('fileupload-processing');
      $("#processing-text").hide();
  }).fail(function (jqXHR, textStatus, errorThrown){
      // console.log(jqXHR, textStatus, errorThrown);
  }).done(function (result) {
      $(this).fileupload('option', 'done')
          .call(this, $.Event('done'), {result: result});
  });

  $(".delete").on("click", function() {
    var delLink = this;
    $.ajax({
      url: $(delLink).data("url")
    }).fail(function (jqXHR, textStatus, errorThrown){
      alert(errorThrown);
    }).done(function (result) {
      $(delLink).parents("tr:first").remove();
      if ( $(".uploaded tbody").children("tr").length == 0 ) {
        $("#already-uploaded").hide();
      }
    });
  });

});