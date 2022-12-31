var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <link rel="stylesheet" href="blog.css" />
        <title>Economica</title>
        <div className="container">
          <h1 className="display-4">ECONOMICA</h1>
          <div className="card mb-4">
            <div className="row ">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-muted">BY SUSHANK MISHRA</h5>
                  <p className="card-text">India's New Farm Bills: A Step Forward or Back?(2020)</p>
                  <p className="card-text"><small className="text-muted">By Haritha K (Miranda House) &amp; Vedanshi Maheshwari
                      (IIT-Delhi) Free and fair elections have become the very watchdog of democracy all over the world.
                    </small></p>
                </div>
              </div>
              <div className="col-md-4">
                <img src="farmer.png" className="card-img" alt="img-here" />
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div className="item1 card">
              <p className="top">BY GOPAL KUMAR JHA</p>
              <h3 className="content">Indian Festivals and the Rural Economy (2020)</h3>
              <p className="top">By Yash Garg, Indian Institute of Technology, Delhi and </p>
              <p className="top">Medha Aro Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis blanditiis dolorum id
                corrupti nam accusamus, ab, magnam nulla, mollitia dolorem nihil voluptas quis rem tempore. Optio facere
                cupiditate a pariatur natus, maiores modi nemo quis nisi illo doloribus harum eos quisquam et quo, molestias
                in nam. Mollitia, voluptates molestiae? Deleniti expedita alias nobis voluptatibus incidunt rem, omnis fuga
                autem temporibus hic cumque dolore iusto explicabo? ra, Miranda House Sundry India has a lot to take pride in!
              </p>
            </div>
            <div className="item card sado">
              <p className="text-muted top">Behavior and Markets.</p>
              <h3 className="content">Content description</h3>
            </div>
            <div className="item card sado">
              <p className="text-muted top">Behavior and Markets</p>
              <h3 className="content">Content description</h3>
            </div>
            <div className="item card sado">
              <p className="text-muted top">Behavior and Markets</p>
              <h3 className="content">Content description</h3>
            </div>
            <div className="item card sado">
              <p className="text-muted top">Behavior and Markets</p>
              <h3 className="content">Content description</h3>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
});
