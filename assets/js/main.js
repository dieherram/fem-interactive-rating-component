const listValue = document.querySelectorAll('li');
const buttonSubmit = document.querySelector('button');
const ratingContainer = document.querySelector('.rating-container')
const thanksContainer = document.querySelector('.thanks-container')
const valueSpan = document.querySelector('span')

listValue.forEach(x => {
    x.addEventListener('click', function () {
        listValue.forEach(x => {
            x.classList.remove('li-selected')
        })
        x.classList.add('li-selected');
        let liSelectedValue = x.value
        buttonSubmit.addEventListener('click', function () {
            ratingContainer.classList.toggle('visibility');
            thanksContainer.classList.toggle('visibility');
            valueSpan.innerText = liSelectedValue
        })
    });
});





