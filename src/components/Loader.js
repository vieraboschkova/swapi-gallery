export default class Loader {
  constructor() {
    this.component = `
    <div class="loader">
        <div class="droid">
            <div class="radios">
                <div class="radio short"></div>
                <div class="radio long"></div>
            </div>
            <div class="head">
                <div class="band one"></div>
                <div class="band two"></div>
                <div class="eyes">
                    <div class="eye one"></div>
                    <div class="eye two"></div>
                </div>
                <div class="band three"></div>
            </div>
                <div class="body">
                <div class="lines one"></div>
                <div class="lines two"></div>
                <div class="circle one"></div>
                <div class="circle two"></div>
                <div class="circle three"></div>
            </div>
        </div>
        <div class="text"><span>LOADING</span></div>
    </div>
    `;
  }
}
