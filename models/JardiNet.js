const Sensor = require('./sensor.js');

module.export = class Device {
  constructor(user) {
    this._user = user;
    this.sensors = []
  }
  launchSensors() {
    for(let sensor of this._sensors) {
      sensor.start()
    }
  }

  instantiateSensor(name) {
    return new Sensor(name)
  }

  addSensor(name) {
    this.sensors.push(this.instantiateSensor(name));
  }
  setData(payload){
    this._data.push(payload)
  }

  getData(rangeTime) {
    for(let sensor of this._sensors) {
      sensor.getData()
    }
    return range(rangeTime)
  }

}