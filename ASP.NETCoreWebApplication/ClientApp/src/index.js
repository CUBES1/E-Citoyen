import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import p5 from 'p5';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const sketch = (s) => {
    s.I = 0;
    
    s.setup = () => {
        s.createCanvas(500, 500);
    }
    
    s.draw = () => {
        s.translate(s.width / 2, s.height / 2);
        s.clear();
        s.background(s.color(0, 0, 0, 0));
        s.stroke("black");
        s.strokeWeight(s.width / 10);
        
        s.point(
            s.cos((s.TWO_PI / 35) * s.I) * (s.width / 2),
            s.sin((s.TWO_PI / 35) * s.I) * (s.width / 2))
        
        s.I++;
    }
};

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);


for (let item of document.getElementsByClassName("loading-component")) {
    new p5(sketch, item);
}
// Uncomment the line above that imports the registerServiceWorker function
// and the line below to register the generated service worker.
// By default create-react-app includes a service worker to improve the
// performance of the application by caching static assets. This service
// worker can interfere with the Identity UI, so it is
// disabled by default when Identity is being used.
//
//registerServiceWorker();

