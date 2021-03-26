let count = 0;

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList

        if (styles.contains('decrease')) {
            count--
        } else if (styles.contains('increase')) {
            count++
        } else {
            count = 0
        }
        value.textContent = count

        if (value.textContent < 0) {
            value.classList.add('red')
        } else if (value.textContent > 0) {
            value.classList.add('green')
        } else {
            value.classList.remove('red', 'green')
        }
    })
})