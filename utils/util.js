const formatTime = date => {
  const showDay = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六')
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekDay = date.getDay()
  const week = showDay[weekDay]
  return formatNumber(month) + "月" + formatNumber(day) + "日 " + week
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function dateBefore(dates, before) {
  let date = new Date(dates)
  date.setDate(date.getDate() - before)
  return date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth()+1) + "-" + (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate())
}

//获取当前时间
function getCurrentMonthFirst() {
  var date = new Date()
  var todate = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth()+1) + "-" + (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate())
  return todate
}

//获取d当前时间多少天后的日期和对应星期
//todate默认参数是当前日期，可以传入对应时间
function getDates(days,todate=getCurrentMonthFirst()) {
  var dateArry = []
  for (var i = 0; i < days; i++) {
    const dateObj = dateBefore(todate, i)
    dateArry.push(dateObj)
  }
  return dateArry
}

module.exports = {
  formatTime: formatTime,
  dateBefore: dateBefore,
  getCurrentMonthFirst: getCurrentMonthFirst,
}
