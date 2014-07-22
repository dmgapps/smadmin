var imageData;
var imageArray = [];


$(document).bind('mobileinit pageinit', function(e)	{




});


$( document ).ready(function() {

	/*

	*/ 


});


function getReports() {

	var url = 'http://dmgdemos.com/mallapp/_server-scripts/getReport.php';
	//params = {type: type};

	$.post(url, function(data) {
		

		$('#ReportsContent').html(data);
		$('body').trigger('create');
		$.mobile.navigate('#Reports', { transition : "flow"});

	});

}


function getReportDetails(id) {

	
	var url = 'http://dmgdemos.com/mallapp/_server-scripts/getReportDetails.php';
	params = {id: id};

	
	$.post(url, params, function(data) {
		
		
		$('#ReportDetailsContent').html(data);
		$('#ReportDetail').trigger('create');
		//$('body').trigger('create');
		$("#reports-table-custom").trigger("create");
		$( "#reports-table-custom" ).table( "refresh" );
		$.mobile.navigate('#ReportDetail', { transition : "flow"});
		

	});
	

}


function markAsRead(id, value) {

	var url = 'http://dmgdemos.com/mallapp/_server-scripts/markAsRead.php';
	params = {id: id, value:value};

	
	$.post(url, params, function(data) {
		
		getReports();

	});

}