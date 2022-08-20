import React from "react";

function Blog () {
    return (
        <div>
  <div className="w3-row">
    {/* Blog entries */}
    <div className="w3-col l8 s12">
      {/* Blog entry */}
      <div className="w3-card-4 w3-margin w3-white">
        <img src="https://www.w3schools.com/w3images/woods.jpg" alt="Nature" style={{width: '100%'}} />
        <div className="w3-container">
          <h3><b>TITLE HEADING</b></h3>
          <h5>Title description, <span className="w3-opacity">April 7, 2014</span></h5>
        </div>
        <div className="w3-container">
          <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem
            euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed
            ultricies mi non congue ullam corper. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida
            diam non fringilla.</p>
          <div className="w3-row">
            <div className="w3-col m8 s12">
              <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE
                    »</b></button></p>
            </div>
            <div className="w3-col m4 w3-hide-small">
              <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span className="w3-tag">0</span></span></p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Blog entry */}
      <div className="w3-card-4 w3-margin w3-white">
        <img src="https://www.w3schools.com/w3images/bridge.jpg" alt="Norway" style={{width: '100%'}} />
        <div className="w3-container">
          <h3><b>BLOG ENTRY</b></h3>
          <h5>Title description, <span className="w3-opacity">April 2, 2014</span></h5>
        </div>
        <div className="w3-container">
          <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem
            euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed
            ultricies mi non congue ullam corper. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida
            diam non fringilla.</p>
          <div className="w3-row">
            <div className="w3-col m8 s12">
              <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE
                    »</b></button></p>
            </div>
            <div className="w3-col m4 w3-hide-small">
              <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span className="w3-badge">2</span></span></p>
            </div>
          </div>
        </div>
      </div>
      {/* END BLOG ENTRIES */}
    </div>
    {/* Introduction menu */}
    <div className="w3-col l4">
      {/* About Card */}
      <div className="w3-card w3-margin w3-margin-top">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTPT-Qu8Y77ONUk0xcpp-fj2gC935SQ70Vw&usqp=CAU" style={{width: '100%'}} />
        <div className="w3-container w3-white">
          <h4><b>My Name</b></h4>
          <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a
            interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
        </div>
      </div>
      <hr />
      <hr />
    </div>
    {/* END GRID */}
  </div><br />
  {/* END w3-content */}
  {/* Footer */}
  <footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
  </footer>
</div>

    )
}

export default Blog;