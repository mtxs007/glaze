const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
const url = require('url')
const remote = require('electron').remote
var $ = require('jquery')

function createRoom() {
    return
}

let create = $('#manage-window');
let createForm = $("<form><div class = 'form-group'><input class = 'room text-xs-center form-control' autofocus placeholder = 'e.g google conference' type='text'><br><input class = 'nick text-xs-center form-control' placeholder = 'e.g Adam' type='text'></div><button class = 'btn btn-primary col-xs-2 offset-xs-10' type='submit' >Go</button</form>")
let win

create.on('click', function(event) {
    create.replaceWith(createForm)
})


createForm.on('submit', function(event) {
    event.preventDefault();
    const htmlPath = path.join('file://', __dirname, 'index.html?room=' + $('.room').val() + "&nick=" + $(".nick").val() )
    win = new BrowserWindow({
        width: 800,
        height: 700
    })
    // win.on('resize', updateReply)
    // win.on('move', updateReply)
    //win.on('close', function () { win = null })
    win.loadURL(htmlPath)
    win.show()
    var current = remote.getCurrentWindow().removeAllListeners();
    current.close()

    // function updateReply () {
    //   const manageWindowReply = document.getElementById('manage-window-reply')
    //   const message = `Size: ${win.getSize()} Position: ${win.getPosition()}`
    //   manageWindowReply.innerText = message
    // }
})