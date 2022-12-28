var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <link rel="stylesheet" href="hero.css" />
        {/* Canvas Testing */}
        <div className="row" style={{height: '100px'}}>
          {/* Pseudo Navbar  */}
        </div>
        <div className="p-5 text-center bg-image vanta-canvas" style={{backgroundImage: 'url("media/bg-grad.png")', width: '100%'}}>
          {/* <div id="defaultCanvas0" class="p5Canvas vanta-canvas"  style="width: 100%; height: 100%; position: relative; z-index: 5;background: rgb(0, 34, 34); user-select: auto;">
      </div> */}
          <div className="row p-5">
            <div className="col-8 text-col align-items-start">
              <p className="heading text-start text-uppercase">
                Economics &amp; Finance Club
              </p>
              <p className="heading text-start text-uppercase">
                IIT Delhi
              </p>
              <p className="body-text text-start">
                The primary challenge faced by a technical institute, at a time when there is an increased
                inclination for people to move towards entrepreneurship, is the lack of access to financial
                knowledge, which is a prerequisite to implement ideas. Economics club, by the virtue of dealing with
                subjects like economics and finance, is in the best position to address this issue.
              </p>
              <div className="row align-items-start">
                <button className="btn-1 align-self-start">
                  Get Started
                </button>
              </div>
            </div>
            <div className="col img-col">
              {/* <img src="media/Group 2026Coins-HQ.png" alt="" class="overflow-visible coins-image"> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
