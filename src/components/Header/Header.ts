import Component from "../Component/Component.js";
// App
export default class Header extends Component {
  #text: string;
  constructor(parentElement: HTMLElement, text: string) {
    super(parentElement, "header");
    this.#text = text;
  }

  render(): void {
    super.render();
    this.domElement.innerHTML = `<img src=${this.#text} alt=logo-pokemon>`;
  }
}
