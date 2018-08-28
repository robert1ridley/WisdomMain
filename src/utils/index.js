export const getLocationFromParams = (url) => {
  url = url.split('/')
  if(url[1] === "") {
    return "/"
  }
  else {
    return url[1]
  }
}

// export const getPublishDate = (timestamp) => {
//   var date = new Date(timestamp);
//   console.log(date)
//   // return date;
// }