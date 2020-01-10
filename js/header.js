const nav = document.getElementById("nav");
nav.innerHTML = `
  <div class="brand">
    <span class="brand-title-red">TU</span> <span class="brand-title-yellow">AROUND</span>
  </div>
  <div class="nav-container" id="navbar">
    <a class="nav-item  closebtn" href="javascrip:vold(0)" onclick="closeNav()">&times;</a>
    <a class="nav-item" href="/">Home</a>
    <a class="nav-item" href="/about">About</a>
    <a class="nav-item" href="/article">Article</a>
    <a class="nav-item" href="/faq">FAQ</a>
    <a class="nav-item" href="/contact">Contact</a>
  </div>
  <button class="openbtn" onclick="openNav()">&#9776;</button>
`
const navbar = document.getElementById("navbar");
function openNav() {
  anime({
    targets: navbar,
    translateY: 0,
    opacity: 1,
    easing: 'easeInOutQuad',
    duration: 300
  })
}

function closeNav() {
  anime({
    targets: navbar,
    translateY: '-100%',
    opacity: 1,
    easing: 'easeInOutQuad',
    duration: 300
  })
}