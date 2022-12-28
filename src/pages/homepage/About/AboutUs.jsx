var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Carattere&family=Inter:wght@200;300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
        <div className="main-container">
          <div className="m">
            <h1 className="main-heading">ABOUT US</h1>
          </div>
          <div className="s">
            <h2 className="sub-heading">How it was started</h2>
            <div className="flex-container">
              <div className="written-text">
                <p className="subtitle subtitles--1">
                  The primary challenge faced by a technical institute,at a time
                  when there is an increased inclination for people to move towards
                  entrepreneurship, is the lack of access to financial knowledge,
                  which is a prerequisite to implement ideas. Economics club, by the
                  virtue of dealing with subjects like economics and finance, is in
                  the best position to answer this issue.
                </p>
                <p className="subtitle subtitles--2">
                  Creation of resources, organisation of guest sessions and
                  organisation of competitions can help better address the same.
                  Similarly, introducing economics to people, in a way that gets
                  them interested to pursue the area further,through Tuesday night
                  discussions and faculty sessions is essential to promote knowledge
                  on economics and its, and its signifiacance in assessing
                  government policy and businesses.
                </p>
              </div>
              <div className="about-image">
                <img className="intro-image" src="img.png" alt="about us image" />
              </div>
            </div>
            <img src="logo.png" alt="Logo" width={40} height="auto" />
            <br />
            <p className="more-info">More info</p>
            <div className="info-subtitles">
              <div className="info-subtitles-inner">
                Club also conduct knowledge sharing sessions through case studies,
                quizzes and games
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
