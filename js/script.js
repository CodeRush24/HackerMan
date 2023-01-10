/*
Kali Linux terminal bg img
https://constantetecnologia.com.br/wp-content/uploads/2020/11/kali-linux.png
*/

let terminalText = document.getElementById('terminalText')
let input = document.querySelector('.Prompt__input')
let terminalTxt = document.getElementById('terminalTxt')


function generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        pass += str.charAt(char)
    }
      
    return pass;
}

let pswd = generateP()
let psw = generateP()

let hacked = (victim) => {
    let randomNum = Math.floor(Math.random() * 100)
    let randNum = Math.floor(Math.random() * 100)

    setTimeout(() => {
        terminalText.innerText = `$-> Fetching Information of ${victim}...`
    }, 1500)
    setTimeout(() => {
        terminalText.innerText += `\n$-> Waiting for Server Response`
    }, 3500)
    setTimeout(()=>{
        terminalText.innerText += `\n$-> Generating Usernames and Passwords...`
    }, 6500)
    setTimeout(()=>{
        terminalText.innerText += `\n$-> HACKED!!! \nInstagram: \nUsername - @${victim+randomNum} \nPassword - ${pswd} \n\nFacebook:\nUsername - @${victim+randNum} \nPassword - ${psw}`
    }, 9500)
    setTimeout(() => {
        terminalTxt.innerText += `\nNOTE: THESE ARE ONE TIME USED USERNAMES AND PASSWORDS AND ARE VALID FOR ONLY 4 MINUTES`
    }, 10500)
}

input.onkeypress = (event) => {
    if (event.keyCode == 13 || event.which == 13) {
        if (input.value.slice(0, 5) == "start" || input.value.slice(0, 5) == "Start") {
            hacked(input.value.slice(6))
        } else {
            terminalText.innerText = "Command not Found!"
        }
    }
}