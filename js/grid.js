
let btnElem = document.querySelector('#btnLogIn')
let userNameElem = document.getElementById('userName')
let passwordElem = document.getElementById('password')
let errorText = document.getElementById('errorSpan')
let iconFieldElem = document.getElementById('iconField')

let eye = document.querySelector('#eye')
let eyeSlash = document.querySelector('#eye-slash')


userNameElem.addEventListener('blur', function () {

    let userNameValue = userNameElem.value

    if (userNameValue.length < 5) {
        errorText.style.display = 'block'
        errorText.style.color = 'red'
        errorText.innerHTML = 'user name more than 5 character'
    }
    setTimeout(function () {
        errorText.style.display = 'none'
    }, 3000)


})


passwordElem.addEventListener('blur', function () {
    let passwordValue = passwordElem.value
    if (passwordValue.length < 8) {
        errorText.style.color = 'red'
        errorText.style.display = 'block'
        errorText.innerHTML = 'password more than 8 character'
    }
    setTimeout(function () {
        errorText.style.display = 'none'
    }, 3000)
})

function showPass() {
    if (passwordElem.type == 'password') {
        passwordElem.type = 'text'
        eye.style.display = 'none'
        eyeSlash.style.display = 'inline'

    } else {
        passwordElem.type = 'password'
        eye.style.display = 'inline'
        eyeSlash.style.display = 'none'
    }

}


iconFieldElem.addEventListener('click',showPass)
