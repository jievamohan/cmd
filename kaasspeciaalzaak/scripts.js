document.getElementsByClassName('menutoggle')[0].onclick = function() {
  let menu = document.getElementById('menu')
  if (menu.classList.contains('inactive')) {
    menu.className = 'active'
  } else {
    menu.className = 'inactive'
  }
};
