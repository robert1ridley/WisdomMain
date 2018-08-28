export const getLocationFromParams = (url) => {
  url = url.split('/')
  if(url[1] === "") {
    return "/"
  }
  else {
    return url[1]
  }
}

export const getDateFromTimestamp = (timestamp, language) => {
  timestamp = Number(timestamp)
  var date = new Date(timestamp * 1000);
  var year = date.getFullYear();
  var month = ("0"+(date.getMonth()+1)).substr(-2);
  var day = ("0"+date.getDate()).substr(-2);
  var hour = ("0"+date.getHours()).substr(-2);
  var minutes = ("0"+date.getMinutes()).substr(-2);
  var seconds = ("0"+date.getSeconds()).substr(-2);

  if (language === "zh") {
    return year+"年"+month+"月"+day+"日";
  }
  return month+"/"+day+"/"+year;
}