const remote = require('electron').remote
const main = remote.require('./main.js')

var button = document.createElement('button')
button.textContent = 'Open Window'
button.addEventListener('click', () => {
    main.openWindow('page2')
    window.close()
}, false)
document.body.appendChild(button)