// Code your solutions in this file
function writeCards(array, event){
    const names = []
    for (let i = 0; i < array.length; i++) {
    names.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return names
}

function countDown(n){
    while (n >= 0){
        console.log(n--)
    }
}