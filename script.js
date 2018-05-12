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
          $("#cust").text(" ");
		  $("#custInput").val(" ");
		  $("#custInput").removeClass("done").addClass("norm");
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
          $("#street").text(" ");
		  $("#streetInput").val(" ");
		  $("#streetInput").removeClass("done").addClass("norm");
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
          $("#plz").text(" ");
		  $("#plzInput").val(" ");
		  $("#plzInput").removeClass("done").addClass("norm");
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
          $("#region").text(" ");
		  $("#regionInput").val(" ");
		  $("#regionInput").removeClass("done").addClass("norm");
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
          $("#date").text(strDate);
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
          $("#desc").text(" ");
		  $("#descInput").val(" ");
		  $("#descInput").removeClass("done").addClass("norm");		  
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
          $("#time").text(" ");
		  $("#timeInput").val(" ");
		  $("#timeInput").removeClass("done").addClass("norm");	
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

	
	var valueSer = null;
      $(function(){
          $("#priceForm").submit(function(e) {
			  valueSer = $("#priceInput").val();
			  valueSer = Number(valueSer).toFixed(2);
              $("#price,#tot,#tots").text(valueSer);
              $("#priceInput").removeClass("norm").addClass("done");
              e.preventDefault();
          });
      });

    // Delete Button
    $("#priceDelete").on("click", function(d) {
          $("#price").text(null);
		  parseFloat($("#priceInput").val(" "));
		  $("#priceInput").removeClass("done").addClass("norm");
			$("#tot,#tots").text(0.00);
          d.preventDefault(); 
    });

      $(function(){
          $("#matForm").submit(function(e) {
              var value = $("#matInput").val();
              $("#mat").text(value);
              $("#matInput").removeClass("opt").addClass("done");
              e.preventDefault();
          });
      });

    // Delete Button
    $("#matDelete").on("click", function(d) {
          $("#mat").text(" ");
		  $("#matInput").val(" ");
		  $("#matInput").removeClass("done").addClass("opt");	
          d.preventDefault(); 
    });
		
	var valueBud = null;	
	var valueTot = null;
      $(function(){
          $("#budForm").submit(function(e) {
              valueBud = $("#budInput").val();
              $("#bud").text(valueBud);
              $("#budInput").removeClass("opt").addClass("done");
			  valueTot = parseFloat(valueSer) + parseFloat(valueBud);
			  valueTot = valueTot.toFixed(2);
			  $("#tot,#tots").text(valueTot);
              e.preventDefault();
          });
      });

    // Delete Button
    $("#budDelete").on("click", function(d) {
          parseFloat($("#budInput").val(" "));
		  $("#bud").text(null);
		  $("#tot,#tots").text(valueSer);
		  $("#budInput").removeClass("done").addClass("opt");	
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
          $("#mat2").text(" ");
		  $("#mat2Input").val(" ");
		  $("#mat2Input").removeClass("done").addClass("opt");
          d.preventDefault(); 
    });

	var valueBud2 = null;	
	var valueTot2 = null;
      $(function(){
          $("#bud2Form").submit(function(e) {
              var valueBud2 = $("#bud2Input").val();
              $("#bud2").text(valueBud2);
              $("#bud2Input").removeClass("opt").addClass("done");
			  valueTot2 = parseFloat(valueTot) + parseFloat(valueBud2);
			  valueTot2 = valueTot2.toFixed(2);
			  $("#tot,#tots").text(valueTot2);
              e.preventDefault();
          });
      });

    // Delete Button
    $("#bud2Delete").on("click", function(d) {
          $("#bud2").text(null);
		  parseFloat($("#bud2Input").val(" "));
		  $("#tot,#tots").text(valueTot);
		  $("#bud2Input").removeClass("done").addClass("opt");
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
		  $("#tot,#tots").text(valueTot);
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

	var valueBud3 = null;	
	var valueTot3 = null;
      $(function(){
          $("#bud3Form").submit(function(e) {
              var valueBud3 = $("#bud3Input").val();
              $("#bud3").text(valueBud3)
              $("#bud3Input").removeClass("opt").addClass("done");
			  valueTot3 = parseFloat(valueTot2) + parseFloat(valueBud3);
			  valueTot3 = valueTot3.toFixed(2);
			  $("#tot,#tots").text(valueTot3);
              e.preventDefault();
          });
      });

    // Delete Button
    $("#bud3Delete").on("click", function(d) {
		$("#bud3").text(null);
		parseFloat($("#bud3Input").val(" "));
		  $("#tot,#tots").text(valueTot2);
          d.preventDefault(); 
    });

    $("#fourAdd").on("click", function(add) {
          $("#mat4Form,#bud4Form").removeClass("hide").addClass("show");
          $("#fourAdd,#threeDel").removeClass("show").addClass("hide");
          add.preventDefault(); 
    });

    $("#threeDel").on("click", function(del) {
          $("#threeAdd,#twoDel").removeClass("hide").addClass("show");
          $("#mat3Form,#bud3Form").removeClass("show").addClass("hide");
		  $("#tot,#tots").text(valueTot2);
          del.preventDefault(); 
    });
	
      $(function(){
          $("#mat4Form").submit(function(e) {
              var value = $("#mat4Input").val();
              $("#mat4").text(value)
              $("#mat4Input").removeClass("opt").addClass("done");
              e.preventDefault();
          });
      });

    // Delete Button
    $("#mat4Delete").on("click", function(d) {
          $("#mat4Input").val(" ");  
          d.preventDefault(); 
    });
	
	var valueBud4 = null;	
	var valueTot4 = null;
      $(function(){
          $("#bud4Form").submit(function(e) {
              var valueBud4 = $("#bud4Input").val();
              $("#bud4").text(valueBud4);
              $("#bud4Input").removeClass("opt").addClass("done");
			  valueTot4 = parseFloat(valueTot3) + parseFloat(valueBud4);
			  valueTot4 = valueTot4.toFixed(2);
			  $("#tot,#tots").text(valueTot4);
              e.preventDefault();
          });
      });

    // Delete Button
    $("#bud4Delete").on("click", function(d) {
          $("#bud4").text(null);
			parseFloat($("#bud4Input").val(" "));
		  $("#tot,#tots").text(valueTot3);		  
          d.preventDefault(); 
    });
	
	    $("#fiveAdd").on("click", function(add) {
          $("#mat5Form,#bud5Form").removeClass("hide").addClass("show");
          $("#fiveAdd,#fourDel").removeClass("show").addClass("hide");
          add.preventDefault(); 
    });

    $("#fourDel").on("click", function(del) {
          $("#fourAdd,#threeDel").removeClass("hide").addClass("show");
          $("#mat4Form,#bud4Form").removeClass("show").addClass("hide");
		  $("#tot,#tots").text(valueTot3);
          del.preventDefault(); 
    });
	
      $(function(){
          $("#mat4Form").submit(function(e) {
              var value = $("#mat4Input").val();
              $("#mat4").text(value)
              $("#mat4Input").removeClass("opt").addClass("done");
              e.preventDefault();
          });
      });

    // Delete Button
    $("#mat4Delete").on("click", function(d) {
          $("#mat4Input").val(" ");  
          d.preventDefault(); 
    });
      
	var valueBud5 = null;	
	var valueTot5 = null;
	  $(function(){
          $("#bud5Form").submit(function(e) {
              var valueBud5 = $("#bud5Input").val();
              $("#bud5").text(valueBud5);
			  valueTot5 = parseFloat(valueTot4) + parseFloat(valueBud5);
			  valueTot5 = valueTot5.toFixed(2);
			  $("#tot,#tots").text(valueTot5);
              $("#bud5Input").removeClass("opt").addClass("done");
              e.preventDefault();
          });
      });

    // Delete Button
    $("#bud5Delete").on("click", function(d) {
          $("#bud5").text(null);
		parseFloat($("#bud5Input").val(" "));
		  $("#tot,#tots").text(valueTot4);
          d.preventDefault(); 
    });
	
      $(function(){
          $("#mat5Form").submit(function(e) {
              var value = $("#mat5Input").val();
              $("#mat5").text(value)
              $("#mat5Input").removeClass("opt").addClass("done");
              e.preventDefault();
          });
      });

    // Delete Button
    $("#mat5Delete").on("click", function(d) {
          $("#mat5Input").val(" ");  
          d.preventDefault(); 
    });
	
	    $("#sixAdd").on("click", function(add) {
          $("#mat6Form,#bud6Form").removeClass("hide").addClass("show");
          $("#sixAdd,#fiveDel").removeClass("show").addClass("hide");
          add.preventDefault(); 
    });

    $("#fiveDel").on("click", function(del) {
          $("#fiveAdd,#fourDel").removeClass("hide").addClass("show");
          $("#mat5Form,#bud5Form").removeClass("show").addClass("hide");
		  $("#tot,#tots").text(valueTot4);
          del.preventDefault(); 
    });
	
	var valueBud6 = null;	
	var valueTot6 = null;
	  $(function(){
          $("#bud6Form").submit(function(e) {
              var valueBud6 = $("#bud6Input").val();
              $("#bud6").text(valueBud6);
			  valueTot6 = parseFloat(valueTot5) + parseFloat(valueBud6);
			  valueTot6 = valueTot6.toFixed(2);
			  $("#tot,#tots").text(valueTot6);
              $("#bud6Input").removeClass("opt").addClass("done");
              e.preventDefault();
          });
      });

    // Delete Button
    $("#bud6Delete").on("click", function(d) {
          $("#bud6").text(null);
		parseFloat($("#bud6Input").val(" "));
		  $("#tot,#tots").text(valueTot5);
          d.preventDefault(); 
    });
	
      $(function(){
          $("#mat6Form").submit(function(e) {
              var value = $("#mat6Input").val();
              $("#mat6").text(value)
              $("#mat6Input").removeClass("opt").addClass("done");
              e.preventDefault();
          });
      });

    // Delete Button
    $("#mat6Delete").on("click", function(d) {
          $("#mat6Input").val(" ");  
          d.preventDefault(); 
    });
	
	
    $("#sixDel").on("click", function(del) {
          $("#sixAdd,#fiveDel").removeClass("hide").addClass("show");
          $("#mat6Form,#bud6Form").removeClass("show").addClass("hide");
		  $("#tot,#tots").text(valueTot5);
          del.preventDefault(); 
    });
	

    // Excel-Export Button
    $( "#clickExcel" ).click(function() {  
	
      var exportFile = $("#export").html();    
      window.open("data:application/vnd.ms-excel," + encodeURIComponent($("#export").html()));
    });

    });