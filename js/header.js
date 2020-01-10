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
    opacity: 0,
    easing: 'easeInOutQuad',
    duration: 300
  })
}