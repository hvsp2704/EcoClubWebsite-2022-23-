import React from "react";
import "./Hero.css";

import p5 from "p5";
import TOPOLOGY from "vanta/dist/vanta.topology.min.js";
// import DOTS from "vanta/dist/vanta.dots.min.js";
// import RINGS from "vanta/dist/vanta.rings.min.js";
import HALO from "vanta/dist/vanta.halo.min.js";

export default class Hero extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()

      }
      componentDidMount() {
        this.vantaEffect = TOPOLOGY({
          el: this.vantaRef.current,
          p5:p5,
        color:'#bd6f0c', 
        backgroundColor:"#031535",
        })
      }
      componentWillUnmount() {
        if (this.vantaEffect) {
          this.vantaEffect.destroy()
        }
      }

    render() {
        return (
            <div className="p-5 text-center bg-image vanta-canvas" ref={this.vantaRef}>
                <div className="row p-5">
                    <div className="col-8 text-col align-items-start">
                        <p className="heading text-start text-uppercase">
                            Economics &amp; Finance Club
                        </p>
                        <p className="heading text-start text-uppercase">IIT Delhi</p>
                        <p className="body-text text-start">
                            The primary challenge faced by a technical institute, at a time when
                            there is an increased inclination for people to move towards
                            entrepreneurship, is the lack of access to financial knowledge, which is
                            a prerequisite to implement ideas. Economics club, by the virtue of
                            dealing with subjects like economics and finance, is in the best
                            position to address this issue.
                        </p>
                        <div className="row align-items-start">
                            <button className="btn-1 align-self-start">Get Started</button>
                        </div>
                    </div>
                    <div className="col img-col">
                        {/* <img src="media/Group 2026Coins-HQ.png" alt="" class="overflow-visible coins-image"> */}
                    </div>
                </div>
            </div>

        )
    }
}