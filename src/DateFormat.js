function DateFormat() {
};

DateFormat.prototype.dateFormat = function(amount) {
  var date = new Date;
  var day = date.getDate().toString();
  var month = (date.getMonth() + 1).toString();
  var year = date.getFullYear().toString();
  if(month.length == 1) {
    month = "0" + month;
  }
  if(day.length == 1) {
    day = "0" + day;
  }

  return day + '/' + month + '/' + year
};


