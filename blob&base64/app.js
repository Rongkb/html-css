var upload = document.querySelector('#myPicture')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')

upload.addEventListener('change', function (e) {
    console.log('xcahnge', upload.files[0])

    var file = upload.files[0];
    if (!file)
        return
    if (!file.name.endsWith('.jpg')) {
        error.innerHTML = `hinh anh phai thuoc dinh dang jpeg`
        return
    } else {
        error.innerHTML = ''
    }
    if (file.size / (1024 * 1024) > 2) {
        error.innerHTML = `Chi duoc upload anh nho hon 2MB`
        return
    } else {
        error.innerHTML = ''
    }

    var img = document.createElement('img')
    img.src = URL.createObjectURL(file)
    preview.appendChild(img)


    // hoac dung base64
    // var fileReader = new FileReader()
    // fileReader.readAsDataURL(file)
    // fileReader.onloadend = function (e) {
    //     console.log('load ok ', e.target.result)
    //     img.src = e.target.result
    // }






})