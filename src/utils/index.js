export function processResponse(response) {
  const statusCode = response.status;
  const data = response.json();
  return Promise.all([statusCode, data]).then(res => ({
    statusCode: res[0],
    data: res[1]
  }));
}

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

  if (language === "zh") {
    return year+"年"+month+"月"+day+"日";
  }
  return month+"/"+day+"/"+year;
}

export function formatNumber(number, decimals, useGroup) {
  let str = parseFloat(number).toFixed(decimals);
  if (useGroup) {
    if (number < 0) { // 数字小于0
      str = str.substring(1, str.length);
    }
    let array1 = str.split('.')[0].split('').reverse().join('');
    array1 = array1.replace(/(\d{3})(?=[^$])/g, '$1,');
    array1 = array1.split('').reverse().join('');

    if (decimals >= 1) {
      const array2 = str.split('.')[1];
      str = `${array1}.${array2}`;
    } else {
      str = array1;
    }
    if (number < 0) {
      str = `-${str}`;
    }
  }
  return str;
}

export function equalObject(x, y) {
  if (x === y) {
    return true;
  }

  if (!(x instanceof Object) || !(y instanceof Object)) {
    return false;
  }

  if (x.constructor !== y.constructor) {
    return false;
  }

  for (const p in x) {
    if (Object.prototype.hasOwnProperty.call(x, p)) {
      if (!Object.prototype.hasOwnProperty.call(y, p)) {
        return false;
      }

      if (x[p] !== y[p]) {
        if (typeof (x[p]) !== 'object') {
          return false;
        }

        if (!equalObject(x[p], y[p])) {
          return false;
        }
      }
    }
  }
  for (const p in y) {
    if (Object.prototype.hasOwnProperty.call(y, p) && !Object.prototype.hasOwnProperty.call(x, p)) {
      return false;
    }
  }
  return true;
}