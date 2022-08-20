import React from "react";

function Nav () {
    return (
        <header>
            <h1>Personal Finance Blog</h1>
            <p>Welcome to the blog of <span class="w3-tag">FINANCE</span></p>
            <div>
  <a href="/">Home</a> |
  <a>logout</a>
  <a href="/login">login</a>
</div>

        </header>
    )
}

export default Nav;