var btnSuccess = document.querySelector('.control .success');
var btnWarning = document.querySelector('.control .warning');
var btnError = document.querySelector('.control .error');

btnSuccess.addEventListener('click', function () {
    createToast('success', 5000)
})
btnWarning.addEventListener('click', function () {
    createToast('warning', 5000)
})
btnError.addEventListener('click', function () {
    createToast('error', 5000)
})
function createToast(status, timeOut) {
    let template = ` <i class="fa-regular fa-circle-check"></i>
    <span class="message">This is a Success message</span>`
    switch (status) {
        case 'success':
            template = ` <i class="fa-regular fa-circle-check"></i>
            <span class="message">This is a Success message</span>`
            break;
        case 'warning':
            template = ` <i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a Warning message</span>`
            break;
        case 'error':
            template = ` <i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is a Error message</span>`
            break;
    }

    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status);
    toast.innerHTML = `${template}
                     <span class="countdown"></span>`

    var toastList = document.getElementById('toasts')
    toastList.appendChild(toast)
    timeOut = timeOut || 4000
    setTimeout(function () {
        toast.style.animation = 'slide_hide 2s ease forwards'
    }, timeOut)
    setTimeout(function () {
        toast.remove()
    }, timeOut + 2000)
}