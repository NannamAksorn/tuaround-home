const mapImg = document.getElementById('map-img');
const sjBtn = document.getElementById('sj-btn');
anime({
  targets: mapImg,
  translateY: -15,
  opacity: [0, 1],
  easing: 'easeInOutQuad'
});
// scroll effect
const mapImg__scrollOut = anime({
  targets: mapImg,
  autoplay: false,
  scale: 0,
  translateY: -100,
  easing: 'easeInOutQuad'
})

const scrollPercent = () => {
  const bodyST = document.body.scrollTop;
  const docST = document.documentElement.scrollTop;
  const docSH = document.documentElement.scrollHeight;
  const docCH = document.documentElement.clientHeight;
  
  
  return (docST + bodyST) / (docSH - docCH) * 100
}

window.onscroll = () => {
  mapImg__scrollOut.seek((scrollPercent() / 100) * mapImg__scrollOut.duration);
};

// hover effect

function enterButton() { 
  anime.remove(sjBtn);
  anime.remove(mapImg);
  anime({ targets: sjBtn, scale: 1.1, duration: 500 })
  anime({ targets: mapImg, scale: 1.1, opacity: 1, duration: 500 })
};
function leaveButton() { 
  anime.remove(sjBtn);
  anime.remove(mapImg);
  anime({ targets: sjBtn, scale: 1, duration: 500 })
  anime({ targets: mapImg, scale: 1, duration: 500 })
};

sjBtn.addEventListener('mouseenter', enterButton, false);
sjBtn.addEventListener('mouseleave', leaveButton, false);

ScrollOut();