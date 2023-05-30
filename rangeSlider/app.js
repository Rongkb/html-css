var process = document.querySelector('.process')
var range = document.querySelector('.range')
var value = document.querySelector('.process span')



function updateProcess(percent) {
    process.style.width = `${percent}%`
    value.innerHTML = Math.round(percent) + '%'
}

function getColor(e) {

    var x = e.clientX; // Vị trí con trỏ chuột trên trục x
    var y = e.clientY; // Vị trí con trỏ chuột trên trục y
    // console.log(x, y)
    var element = document.elementFromPoint(x, y); // Lấy phần tử đang được trỏ tới
    var computedStyle = getComputedStyle(element); // Lấy giá trị các thuộc tính tính toán của phần tử
    // console.log(computedStyle)
    var color = computedStyle.backgroundColor; // Lấy giá trị thuộc tính màu sắc của phần tử
    console.log(color); // In ra mã màu

}
range.addEventListener('mousemove', function (e) {


    console.log(e.target)
    // console.log('e offsetX', e.offsetX)
    // console.log('e offsetY', e.offsetY)
    // console.log('this offsetLeft', this.offsetLeft)
    // console.log('this offsetWidth', this.offsetWidth)
    var percent = (e.offsetX / this.offsetWidth) * 100
    // console.log(percent)
    updateProcess(percent)

    getColor(e)

})
updateProcess(50)