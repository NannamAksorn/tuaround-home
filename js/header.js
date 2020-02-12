const header_nav = document.getElementById("nav");
const pathname = window.location.pathname.replace('.html', '')
header_nav.innerHTML = `
  <a href="/" class="brand">
    <span class="brand-title-red">TU</span> <span class="brand-title-yellow">AROUND</span>
  </a>
  <nav class="nav-container nav-shift" id="navbar">
    <ul>
    <li><a class="nav-item  closebtn" href="javascrip:vold(0)" onclick="closeNav()">&times;</a></li>
    <li><a class="nav-item ${pathname == '/' ? 'nav-active': ''}" href="/">Home</a></li>
    <li><a class="nav-item" href="/about">About</a></li>
    <li><a class="nav-item" href="/article">Article</a></li>
    <li><a class="nav-item" href="/faq">FAQ</a></li>
    <li><a class="nav-item" href="/contact">Contact</a></li>
    </ul>
  </nav>
  <button class="openbtn" onclick="openNav()">&#9776;</button>
`

const navbar = document.getElementById("navbar");

if (pathname != "/") {
  const links_el = navbar.children;
  for (let i = links_el.length - 1; i>1; i--) {
    if (links_el[i].href.indexOf(pathname) > -1) {
      links_el[i].classList.add('nav-active')
      break;
    }
  }
}

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