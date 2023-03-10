import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("connected")
    this.element.reset();
  }
  submit(e) {
    e.preventDefault();
    this.element.requestSubmit();
  }
}
