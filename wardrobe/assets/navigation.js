let usernav = document.getElementById('userHeader');

function runThis() {
  usernav.innerHTML = `
<div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation-nav">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img src="assets/images/logo.png" alt=""></a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navigation-nav">
          <ul class="nav navbar-nav navbar-right">
            <li class="${location.pathname.includes('index') ? 'active' : ''}"><a class="section-scroll" href="#wrapper">Home</a></li>
            <li class="${location.pathname.includes('index') ? 'active' : ''}"><a href="#landing-offer" title="Add new clothes to your wardrobe">Add Clothes</a></li>
            <li><a href="#contact-section" title="View all clothes in your wardrobe">View Wardrobe</a></li>
            <!-- <li><a href="#features-section">Services</a></li> -->
            <!-- <li><a href="#team-section">Team</a></li> -->
            <!-- <li><a href="login.html">Login</a></li> -->
            <!-- <li><a href="sign-up.html">Register</a></li> -->
            <!-- <li><a href="#prices-section">Prices</a></li> -->

          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
`;
}

runThis();
