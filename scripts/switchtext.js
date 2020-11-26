const sayings = [
    'this fresh hell is over', 
    'the end of exam week', 
    'the start of the CSAIT Social', 
    'I can get KRUNKED',
    'I can yeet MyCanvas out the window',
    'I can start thinking about Christmas presents',
    'I can stop crying',
    'I can party (virtually) with my fellow nerds',
    'the suffering ends',
    'the tears turn into happy tears',
    'I can finally close my IDE'
]

function switchText(){
    const text = document.getElementById('special-text');
    text.classList.add('hide');
    setTimeout(() => text.innerText = sayings[Math.floor(Math.random() * sayings.length)], 300);
    setTimeout(() => text.classList.remove('hide'), 300);
}

setInterval(switchText, 4000);