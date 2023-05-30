var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

function showError(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}


function showSuccess(input) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}



function checkEmptyError(listInput) {
    let isEmptyError = false
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmptyError = true
            showError(input, 'khong duo de trong')
        } else {
            showSuccess(input)
        }
        return isEmptyError
    });
}

function checkEmailError(input) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    input.value = input.value.trim()
    let isEmailError = !regexEmail.test(input.value)
    if (regexEmail.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'Email is Invalid')
    }
    return isEmailError
}
function checkLengthError(input, min, max) {
    input.value = input.value.trim()
    if (input.value.length < min) {
        showError(input, `phai co it nhat ${min} ky tu`)
        return true
    }
    if (input.value.length > max) {
        showError(input, `khong duoc qua ${max} ky tu`)
        return true
    }
    return false
}
function checkPasswordError(passwordInput, confirmPasswordInput, min, max) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'mk khong trung khop')
        return true
    }
    if (passwordInput.value.length < min) {
        showError(passwordInput, `phai co it nhat ${min} ky tu`)
        return true
    }
    if (passwordInput.value.length > max) {
        showError(passwordInput, `khong duoc qua ${max} ky tu`)
        return true
    }
    return false
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isEmailError = checkEmailError(email)
    let isUsernameLengthError = checkLengthError(username, 3, 10)
    let isMatchError = checkPasswordError(password, confirmPassword, 2, 6)

    if (isEmptyError || isEmailError || isUsernameLengthError || isMatchError) {
        console.log('dang nhap that bai')
    } else {
        console.log('dang nhap thanh cong')
    }

})