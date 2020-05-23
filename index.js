const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(record) {
  if record.find(function(s) { return s === "W"}){
    return record.find(function(s) { return s === "W"}).year
    }
    return undefined
}