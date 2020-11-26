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
    'I can finally close my IDE',
    'I can take this headset off',
    'I can request Wonderwall',
    'Archer finds out who’s a good boy',
    'Ceagan’s beard comes back to us',
    'Kevin Browne tells us he’s kidding',
    'Brian Minaji creates SkyNet... using only Excel',
    'this site finishes installing the key-logger on my pc',
    `we see the pilot episode of the new sitcom where Andrew finds out he's actually descended from royalty and then he and Rodney form a detective agency and the show is called "Barnes & Noble"`
]

function switchText(){
    const text = document.getElementById('special-text');
    text.classList.add('hide');
    setTimeout(() => text.innerText = sayings[Math.floor(Math.random() * sayings.length)], 300);
    setTimeout(() => text.classList.remove('hide'), 300);
}

setInterval(switchText, 4000);