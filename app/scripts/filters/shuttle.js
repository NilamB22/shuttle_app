'use strict';

app.filter('date_filter', function($filter){
  return function(input){
    if(input == null){ return ""; }

    var _date = $filter('date')(new Date(input),'yyyy-MM-dd');
    return _date.toUpperCase();

  };
}).filter('time_filter', function($filter){
  return function(input){
    if(input == null){ return ""; }

    var _date = $filter('date')(new Date(input),'h:mm a');
    return _date.toUpperCase();

  };
});
