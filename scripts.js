const result = document.querySelector('.result')

const userText = document.querySelector('.text-area')

const countButton = document.querySelector('.count-button')

let notLetters = ['.', ',', '!', '?', '|', '/', ';', ':', '<', '>', '@', '#', '$', '%', '&', '*', '(', ')', '_', '+', '=']

//Adota-se conta como 2 palavras (exemplo)


//Vendo se no texto possui algum simbolo que esta no array notLetters
const checkSymbol = (text) => {
    let check = true
    for (let i = 0; i < notLetters.length; i++) {
        if (text == notLetters[i]) {
            check = false
            break
        }
    }

    return check
}

const removeHyphen = (text) => {
    let newText = text.join('').split('-')

    return newText
}


//Mandando um array com as palavras já arrumadas
const validateWords = () => {
    let textContent = userText.value.split(' ')
    let i = 0


    let wordsArray = []

    while (i < textContent.length) {
        let hyphenWord = []
        if (textContent[i] == '') {
            textContent.pop(textContent[i])
        }


        let currentWord = textContent[i].split('')

        for (let j = 0; j < currentWord.length; j++) {
            if (currentWord[j] == '-') {
                currentWord = removeHyphen(currentWord)
            }

            while (!checkSymbol(currentWord[j])) {
                currentWord.pop(currentWord[j])
            }
        }

        //Removendo alguns itens que estavam vindo null
        if (currentWord.join('') != '') {
            wordsArray.push(currentWord.join(''))
        }
        // else if (currentWord.join('') != '' && hyphenWord != null) {
        //     let k = 0
        //     while (k < hyphenWord.length) {
        //         wordsArray.push(hyphenWord[k])
        //         k++
        //     }
        // }

        i++
    }

    return wordsArray
}

countButton.addEventListener('click', (e) => {
    e.preventDefault()

    const text = validateWords()
    console.log(text)


})