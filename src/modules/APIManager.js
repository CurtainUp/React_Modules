const remoteURL = "http://localhost:5002"

export default class APIManager {

  get(id) {
    /*
        Since the purpose of this module is to be used by
        all of the more specialized one, then the string
        of `animals` should not be hard coded here.
    */
    return fetch(`${remoteURL}/animals/${id}`).then(data => data.json())
  }

  all() {
    return fetch(`${remoteURL}/animals`).then(data => data.json())
  }

}