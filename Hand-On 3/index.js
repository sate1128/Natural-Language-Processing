var currentTab = 0; // Current tab is set to be the first tab (0)
var start = 0;
showTab(currentTab); // Display the crurrent tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
        document.getElementById("nextBtn").style.display = "inline";
    } else if (n == (x.length - 1)) {
        document.getElementById("prevBtn").style.display = "inline";
        document.getElementById("nextBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
        document.getElementById("nextBtn").style.display = "inline";
        if (start == 0){
            start = 1;
        }
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("mturk_form").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}

$(document).ready(function () {
	
	//check if accepted
	if(gup("assignmentId") === "ASSIGNMENT_ID_NOT_AVAILABLE") {
		
		$("body").empty();
		$("body").css("background", "#f1f1f1");
		
		var noteDiv = $("<div>This HIT is for <strong>specific workers only</strong>.<br><br>Only accept this HIT if <strong>you've been contacted by us.</strong></div>");
		$(noteDiv).css("margin-left", "auto");
		$(noteDiv).css("margin-right", "auto");
		$(noteDiv).css("margin-top", "50px");
		$(noteDiv).css("font-size", "30px");
		$(noteDiv).css("text-align", "center");
		$(noteDiv).css("font-family", "Raleway");
		$("body").append(noteDiv);
        var img = $("<div><img src=\"thank.jpg\" width=\"600\"></div>");
		$(img).css("margin-left", "auto");
		$(img).css("margin-right", "auto");
		$(img).css("margin-top", "50px");
		$(img).css("text-align", "center");
		$("body").append(img);
		$(".color").css("color", "blue");
		$(".color").css("font-weight", "600");
		
		$('input').attr("DISABLED", "true");
        _allowSubmit = false;
        
        return false;
        
    } else {
        _allowSubmit = true;
    }
	
	if(1){
		
		if (gup("assignmentId") != "") {
	        // create form
	        //$('#instructions').append($('<div id="legion-submit-div"><p id="legion-submit-instructions">The HIT is now over. Please submit it for payment. If the button below is disabled, then you did not accumulate enough money to be paid.</p><form id="legion-submit-form"><input type="hidden" name="money" value="0" id="legion-money-field"><input type="hidden" name="assignmentId" id="legion-assignmentId"><input id="legion-submit" type="button" value="Submit HIT"></div>'));

	        var jobkey = gup("assignmentId");
	        if (gup("hitId") != "") {
	            jobkey += "|" + gup("hitId");
	        }

	        if (gup("assignmentId") == "ASSIGNMENT_ID_NOT_AVAILABLE") {
	            $('input').attr("DISABLED", "true");
	            _allowSubmit = false;
	        } else {
	            _allowSubmit = true;
	        }
	        $('#compensate-form-assignmentId').attr('value', gup("assignmentId"));
	        $("#compensate-form").attr('method', 'POST');


	        if (gup("turkSubmitTo") != "") {
	            $("#compensate-form").attr('action', gup("turkSubmitTo") + '/mturk/externalSubmit');
	        }

	        //$('#legion-submit').removeAttr('disabled');
	        //$("#legion-submit").click(submitToTurk);
	    } else {
	        //alert("not unlocking:: " + gup("assignmentId"))
	    }
		
	}else{
		
		$("body").empty();
		$("body").css("background", "white");
		
		var noteDiv = $("<div>This HIT is for <span class='highlight'>specific workers only</span>.<br><br><span class=\"highlight-strong\">Please return this HIT.</span></div>");
		$(noteDiv).css("margin-left", "auto");
		$(noteDiv).css("margin-right", "auto");
		$(noteDiv).css("margin-top", "50px");
		$(noteDiv).css("font-size", "30px");
		$(noteDiv).css("text-align", "center");
		$("body").append(noteDiv);
		$(".color").css("color", "blue");
		$(".color").css("font-weight", "600");
		
		$('input').attr("DISABLED", "true");
        _allowSubmit = false;
        
        return false;
        
	}
	
	/*
	$("#submit-btn").on("click", function(){
		//$("#comment").val();
		$("#compensate-form").submit();
		return false;
	});
	*/
	
	
});

function isValidWorker(){
	
	var nowWorkerId = gup("workerId");
	
	var nowWorkers = gup("workers");
	
	var workers = nowWorkers.split(",");
	
	for(var i=0;i<workers.length;i++){
		if(nowWorkerId.trim().toUpperCase()==workers[i].trim().toUpperCase()){
			return true;
		}
	}

	return false;
	
}

//function for getting URL parameters
function gup(name) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if(results == null)
	    return "";
    else
	    return unescape(results[1]);
}


function submitToTurk(){ 
	  if(gup("assignmentId")!="") { 
		
	        var jobkey = gup("assignmentId"); 
	        if(gup("hitId")!="") { 
	          jobkey += "|" + gup("hitId"); 
	        } 
	
	        if(gup("assignmentId") == "ASSIGNMENT_ID_NOT_AVAILABLE") { 
	          //$('input').attr("DISABLED", "true"); 
	          //_allowSubmit = false; 
              $("body").empty(); 
              $("body").css("background", "white"); 
                 
              var noteDiv = $("<div class='container'><h3>Please accept the HIT.</h3></div>"); 
              $(noteDiv).css("margin‐left", "auto"); 
              $(noteDiv).css("margin‐right", "auto"); 
                 
              $(noteDiv).css("text‐align", "center"); 
                 
              var img = $("<img></img>") 
              $(img).attr("src", 
            "https://c2.staticflickr.com/4/3665/11276962563_8fc141d195.jpg"); 
              /* image from https://flic.kr/p/ibvo62 */ 
              $(img).css("width", "600px"); 
                 
              $(noteDiv).append(img); 
                 
              $("body").append(noteDiv); 
                   
              $('input').attr("DISABLED", "true"); 
                     
              _allowSubmit = false; 
	        } else { 
	          _allowSubmit = true; 
	        } 	
	
	        $('#mturk‐assignmentId').attr('value', gup("assignmentId")); 
	        $("#mturk_form").attr('method', 'POST'); 
	
	        if(gup("turkSubmitTo")!="") { 
	            $("#mturk_form").attr('action', gup("turkSubmitTo") ); 
	        } 	
	    } 
}

var time=10000;//設定倒數10秒　
function DisableEnable(objid){　
　　if(time<=0){　
　　　  document.getElementById(objid).value='Submit';　
　　　  document.getElementById(objid).disabled=false;　
　　}else{　
        document.getElementById(objid).disabled = true;　
　　　  document.getElementById(objid).value = (time/1000) + " sec...";　
　　　  setTimeout("DisableEnable('" + objid + "')",1000);　
　　}
    if(start) time-=1000;　　
 }　
 