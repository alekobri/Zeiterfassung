$("document").ready(function(){

var today = new Date();
var strDate = today.getDate() + "." + (today.getMonth()+1) + "." + today.getFullYear();
$("#date").append(strDate);
  
  $(function(){
      $("#custForm").submit(function(e) {
          var value = $("#custInput").val();
          $("#cust").text(value);
          $("#custInput").removeClass("norm").addClass("done");
          e.preventDefault();
      });
  });

// Delete Button
$("#custDelete").on("click", function(d) {
      $("#custInput").val(" ");
      d.preventDefault(); 
});

  $(function(){
      $("#streetForm").submit(function(e) {
          var value = $("#streetInput").val();
          $("#streetInput").removeClass("norm").addClass("done");
          $("#street").text(value);
          e.preventDefault();
      });
  });

// Delete Button
$("#streetDelete").on("click", function(d) {
      $("#streetInput").val(" "); 
      d.preventDefault(); 
});

  $(function(){
      $("#plzForm").submit(function(e) {
          var value = $("#plzInput").val();
          $("#plzInput").removeClass("norm").addClass("done");
          $("#plz").text(value);
          e.preventDefault();
      });
  });

// Delete Button
$("#plzDelete").on("click", function(d) {
      $("#plzInput").val(" ");  
      d.preventDefault(); 
});

  $(function(){
      $("#regionForm").submit(function(e) {
          var value = $("#regionInput").val();
          $("#regionInput").removeClass("norm").addClass("done");
          $("#region").text(value);
          e.preventDefault();
      });
  });

// Delete Button
$("#regionDelete").on("click", function(d) {
      $("#regionInput").val(" ");  
      d.preventDefault(); 
});

  $(function(){
      $("#dateForm").submit(function(e) {
          var value = $("#dateInput").val();
          $("#date").text(value);
          e.preventDefault();
      });
  });

// Delete Button
$("#dateDelete").on("click", function(d) {
      $("#dateInput").val(" ");  
      d.preventDefault(); 
});

  $(function(){
      $("#descForm").submit(function(e) {
          var value = $("#descInput").val();
          $("#desc").text(value)
          $("#descInput").removeClass("norm").addClass("done");
          e.preventDefault();
      });
  });

// Delete Button
$("#descDelete").on("click", function(d) {
      $("#descInput").val(" ");  
      d.preventDefault(); 
});

  $(function(){
      $("#timeForm").submit(function(e) {
          var value = $("#timeInput").val();
          $("#time").text(value)
          $("#timeInput").removeClass("norm").addClass("done");
          e.preventDefault();
      });
  });

// Delete Button
$("#timeDelete").on("click", function(d) {
      $("#timeInput").val(" ");
      d.preventDefault();   
});

  $(function(){
      $("#carForm").submit(function(e) {
          var value = $("#carInput").val();
          $("#car").text(value)
          e.preventDefault();
      });
  });

// Delete Button
$("#carDelete").on("click", function(d) {
      $("#carInput").val("1");
      d.preventDefault();   
});

  $(function(){
      $("#matForm").submit(function(e) {
          var value = $("#matInput").val();
          $("#mat").text(value)
          $("#matInput").removeClass("norm").addClass("done");
          e.preventDefault();
      });
  });

// Delete Button
$("#matDelete").on("click", function(d) {
      $("#matInput").val(" ");  
      d.preventDefault(); 
});

  $(function(){
      $("#budForm").submit(function(e) {
          var value = $("#budInput").val();
          $("#bud").text(value)
          $("#budInput").removeClass("norm").addClass("done");
          e.preventDefault();
      });
  });

// Delete Button
$("#budDelete").on("click", function(d) {
      $("#budInput").val(" ");  
      d.preventDefault(); 
});

// Excel-Export Button
$( "#clickExcel" ).click(function() {  
  var exportFile = $("#export").html();    
  window.open('data:application/vnd.ms-excel,' + encodeURIComponent($("#export").html()));
});

});