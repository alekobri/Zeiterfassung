$("document").ready(function(){

// Setting todays date as default
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
      $("#priceForm").submit(function(e) {
          var value = $("#priceInput").val();
          $("#price").text(value)
          $("#priceInput").removeClass("norm").addClass("done");
          e.preventDefault();
      });
  });

// Delete Button
$("#priceDelete").on("click", function(d) {
      $("#priceInput").val(" ");  
      d.preventDefault(); 
});

  $(function(){
      $("#matForm").submit(function(e) {
          var value = $("#matInput").val();
          $("#mat").text(value)
          $("#matInput").removeClass("opt").addClass("done");
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
          $("#budInput").removeClass("opt").addClass("done");
          e.preventDefault();
      });
  });

// Delete Button
$("#budDelete").on("click", function(d) {
      $("#budInput").val(" ");  
      d.preventDefault(); 
});

$("#twoAdd").on("click", function(add) {
      $("#mat2Form,#bud2Form").removeClass("hide").addClass("show");
      $("#twoAdd").removeClass("show").addClass("hide");
      add.preventDefault(); 
});

  $(function(){
      $("#mat2Form").submit(function(e) {
          var value = $("#mat2Input").val();
          $("#mat2").text(value)
          $("#mat2Input").removeClass("opt").addClass("done");
          e.preventDefault();
      });
  });

// Delete Button
$("#mat2Delete").on("click", function(d) {
      $("#mat2Input").val(" ");  
      d.preventDefault(); 
});

  $(function(){
      $("#bud2Form").submit(function(e) {
          var value = $("#bud2Input").val();
          $("#bud2").text(value)
          $("#bud2Input").removeClass("opt").addClass("done");
          e.preventDefault();
      });
  });

// Delete Button
$("#bud2Delete").on("click", function(d) {
      $("#bud2Input").val(" ");  
      d.preventDefault(); 
});

$("#threeAdd").on("click", function(add) {
      $("#mat3Form,#bud3Form").removeClass("hide").addClass("show");
      $("#threeAdd,#twoDel").removeClass("show").addClass("hide");
      add.preventDefault(); 
});

$("#twoDel").on("click", function(del) {
      $("#twoAdd").removeClass("hide").addClass("show");
      $("#mat2Form,#bud2Form").removeClass("show").addClass("hide");
      $("#mat2,#bud2").text(" ");
      $("#mat2Input,#bud2Input").removeClass("done").addClass("opt");
      del.preventDefault(); 
});

  $(function(){
      $("#mat3Form").submit(function(e) {
          var value = $("#mat3Input").val();
          $("#mat3").text(value)
          $("#mat3Input").removeClass("opt").addClass("done");
          e.preventDefault();
      });
  });

// Delete Button
$("#mat3Delete").on("click", function(d) {
      $("#mat3Input").val(" ");  
      d.preventDefault(); 
});

  $(function(){
      $("#bud3Form").submit(function(e) {
          var value = $("#bud3Input").val();
          $("#bud3").text(value)
          $("#bud3Input").removeClass("opt").addClass("done");
          e.preventDefault();
      });
  });

// Delete Button
$("#bud3Delete").on("click", function(d) {
      $("#bud3Input").val(" ");  
      d.preventDefault(); 
});

$("#fourAdd").on("click", function(add) {
      $("#mat4Form,#bud4Form").removeClass("hide").addClass("show");
      $("#fourAdd,#threeDel").removeClass("show").addClass("hide");
      add.preventDefault(); 
});

$("#threeDel").on("click", function(del) {
      $("#threeAdd").removeClass("hide").addClass("show");
      $("#mat3Form,#bud3Form").removeClass("show").addClass("hide");
      del.preventDefault(); 
});

// Excel-Export Button
$( "#clickExcel" ).click(function() {  
  var exportFile = $("#export").html();    
  window.open("data:application/vnd.ms-excel," + encodeURIComponent($("#export").html()));
});

});