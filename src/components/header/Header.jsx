 var NewComponent = React.createClass({
  render: function() {
    return {
        <!-- Implement the Navbar -->
    <nav class="navbar navbar-expand-sm sticky-top navbar-dark" style="background-color: rgb(255, 254, 254);">
        <div class="container">
            <!-- Replace this with your own logo -->
            <a class="navbar-brand" href="#"><img src="eco.png" alt="web-image" width="100" height="auto"></a>

            <!-- Toggler/collapsibe Button for small screens -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myList"
                aria-controls="myList" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- List of links -->
            <div class="collapse navbar-collapse" id="myList">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                  <a href="#" class="nav-link active" style="color: black;"> Home </a>
                </li>
      
                <li class="nav-item active">
                  <a href="#" class="nav-link active" style="color: black;"> About Us </a>
                </li>
                <li class="nav-item active">
                  <a href="#" class="nav-link active" style="color: black;"> Blog </a>
                </li>
                                <li class="nav-item active">
                  <a href="#" class="nav-link active" style="color: black;"> Team </a>
                </li>
              </ul>
            </div>
        </div>
    </nav>


    <!-- Just some dummy content -->
    <div class="container">
        <div class="py-5">
            <h1>Sticky Navbar </h1>
            <p>Welcome </p>
        </div>

        <div class="py-5">
            <h1>Dummy Content #1</h1>
            <p>Welcome </p>
        </div>

        <div class="py-5">
            <h1>Dummy Content #2</h1>
            <p>Welcome </p>
        </div>

        <div class="py-5">
            <h1>Dummy Content #3</h1>
            <p>Welcome </p>
        </div>

        <div class="py-5">
            <h1>Dummy Content #4</h1>
            <p>Welcome</p>
        </div>
    </div>

    <!-- Bootstrap Javascript bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"></script>
    );
  }
});
