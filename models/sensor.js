const time_range = [
  "midDay",
  "day",
  "week",
  "month",
  "year",
  "2years",
  "5years",
  "10years"
]
const status = [
  'on',
  'off',
  'unfunctionnal'
]

module.export = class Sensor {
  constructor(name) {
    this._name = name;
    this._data = []
    this._status = null
  }

  getName() {
    return this._name
  }

  setName(name) {
    console.log(name);
    this._name = name;
  }

  getStatus() {
    return this._name
  }

  setStatus(status) {
    console.log(status);
    this._status = status;
  }

  getData(rangeTime) {

    return this._data.slice()
  }

  setData(payload) {
    console.log(payload);
    this._data.push(payload);
  }

  range(rangeTime) {
    if(time_range.includes(rangeTime)){
      //do something to get a slice from indexes from 5years as an example
    }
    return this._data.splice(-1, rangeTime)
  }


}