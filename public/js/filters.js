edmodo.filter('parseDate', function(){
	return function(badDate){
		var m = moment(badDate).format("dddd MMM Do");
		return m;
	}
});

edmodo.filter('parseStamp', function(){
	return function(badDate){
		var m = moment(badDate).format("dddd MMM Do YYYY hh:mm a");
		return m;
	}
});