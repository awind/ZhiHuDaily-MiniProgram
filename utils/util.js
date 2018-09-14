const formatTime = date => {
  const showDay = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
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
  return date.getFullYear() + "-" + formatNumber(date.getMonth() + 1) + "-" + formatNumber(date.getDate())
}

//获取当前时间
function getCurrentMonthFirst() {
  var date = new Date()
  var todate = date.getFullYear() + "-" + formatNumber(date.getMonth() + 1) + "-" + formatNumber(date.getDate())
  return todate
}

module.exports = {
  formatTime: formatTime,
  dateBefore: dateBefore,
  getCurrentMonthFirst: getCurrentMonthFirst,
}
