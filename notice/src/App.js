import React, { Component } from 'react';
import "./Component/CSS/fullpage.css";
import "./Component/CSS/examples.css";
import "./Component/fullpage.js";
import "./Component/examples.js";

class App extends Component {

  script = () => {
    var myFullpage = new fullpage('#fullpage', {
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
      css3: false
    });
  }

  componentDidMount() {
    const scriptA = document.createElement("script");
    const scriptB = document.createElement("script");
    const scriptC = document.createElement("script");

    scriptA.src = "./Component/fullpage.js"
    scriptA.type = 'text/javascript';
    scriptB.src = "./Component/examples.js";
    scriptB.type = 'text/javascript';
    scriptC.appendChild(() => {this.script})
  }

  render() {
    return (
        <div id="fullpage" class="fullpage-wrapper">
          <div class="section fp-section fp-table active fp-completely" id="section0" data-fp-styles="null">
            <h1>fullPage.js</h1>
            <p>CSS3 is active by default</p>
          </div>
          <div class="section fp-section fp-table" id="section1" data-fp-styles="null"><div class="fp-tableCell">
            <div class="intro">
              <h1>Speed on mobile</h1>
              <p>
                If CSS3 transforms are supported (e.g. on mobile devices) they will be used for animations, usually a good
                choice if the animation on mobile devices is slow.
              </p>
            </div>
          </div></div>
          <div class="section fp-section fp-table" id="section2" data-fp-styles="null"><div class="fp-tableCell">
            <div class="intro">
              <h1>No CSS3? No problem!</h1>
              <p>If CSS3 is not available, animations will fall back to javascript driven animations.</p>
            </div>
          </div></div>
        </div>
    );
  }
}

export default App;
