import React, {Component} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./app.css";

class App extends Component{
  render(){
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 100,
      cssEase: "linear"
    };
    return(
        <div className="mainContainer" align="center">
        <h2 style={{color: 'white', fontSize: '20px', fontFamily:'Ubuntu'}}>100% Open Source</h2>
        <Slider {...settings}>
          <div className="container">
            <img src="/img/logoslider/ubuntu-logo.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/docker-logo.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/kubernetes-logo.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/github-logo.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/githubactions-logo.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/helm-logo.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/chartmusseum-logo.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/nginx-logo.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/prometheus-logo.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/grafana-logo.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/grafana-loki-logo.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/signoz-logo.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/opentelemetry.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/k9s-logo.png" />
          </div>
          <div className="container">
            <img src="/img/logoslider/k6-logo.png" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default App;