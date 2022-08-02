const today = new Date()
const tenDaysLater = new Date()
tenDaysLater.setDate(today.getDate() + 10)

const ladders = [
  { name: 'UV Ladder', startDate: today, endDate: tenDaysLater},
  { name: '4.0 Ladder', startDate: today, endDate: tenDaysLater},
  { name: '5.0 Mens Ladder', startDate: today, endDate: tenDaysLater},
]

module.exports = ladders