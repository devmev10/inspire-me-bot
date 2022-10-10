document.querySelector('footer').addEventListener('click', function(){fetch('https://www.boredapi.com/api/activity/')
.then(response=> response.json())
.then(data=> {
  document.querySelector('h4').innerText = data.activity
  document.querySelector('h1').innerText = 'Just do it'
  document.body.classList.add('fun')
  })})


