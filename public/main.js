document.getElementById('clicky-clicky').onclick = function () {
  this.remove()

  document.getElementById('mama-mia').classList.remove('hide')
}

let clicks = 0
document.querySelector('#mama-mia a').onclick = function () {
  clicks++

  if (clicks < 5) {
    this.textContent += '🍕'
  }
  else if (clicks === 5) {
    this.textContent += '🍄'
  }
  else {
    window.location.href = 'https://benlind.com/capy'
  }
}
