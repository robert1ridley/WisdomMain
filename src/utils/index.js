export const getLocationFromParams = (url) => {
  url = url.split('/')
  if(url[1] === "") {
    return "/"
  }
  else {
    return url[1]
  }
}