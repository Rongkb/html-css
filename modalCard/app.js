var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal_header i')
var btnClose = document.querySelector('.modal_footer button')
var modalInner = document.querySelector('.modal-inner')

function toggleModal(e) {
    console.log(e.target)
    modal.classList.toggle('hide')
}
btnOpen.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)

// ngừng sự kiện nổi bọt khi click
modal.addEventListener('click', toggleModal)
modalInner.addEventListener('click', function (e) {
    e.stopPropagation()
})
// hoặc dùng cách này
// modal.addEventListener('click', function (e) {
//     if (e.target == e.currentTarget) {
//         toggleModal()
//     }
// })