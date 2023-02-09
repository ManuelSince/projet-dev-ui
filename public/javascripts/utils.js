class Utils {
  constructor() {

  }
  getByid (selector) {
    return document.getElementById(selector);
  }
  getByClass (selector) {
    return document.getElementsByClassName(selector);
  }

}

export default Utils

