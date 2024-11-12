const result = document.getElementById('result')

function getRandomNumber() {
    const randomNumber = Math.ceil(Math.random() * 26)

    result.innerHTML = randomNumber
}