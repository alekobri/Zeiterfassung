    // Excel-Export Button
    $( "#clickExcel" ).click(function() {  
	
      var exportFile = $("#export").html();    
      window.open("data:application/vnd.ms-excel," + encodeURIComponent($("#export").html()));
    });