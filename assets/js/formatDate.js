function padDate(val) {
  val = val < 10 ? '0' + val : val
  return val
}

export function formatDate(val) {
  if(val === 0 || !val || val === '') {
    return ''
  }
  if(typeof val != "number") {
    return val
  }
  var value = new Date(val)
  var year = value.getFullYear()
  var month = padDate(value.getMonth() + 1)
  var day = padDate(value.getDate())
  var hour = padDate(value.getHours())
  var minutes = padDate(value.getMinutes())
  var seconds = padDate(value.getSeconds())
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
}