function burstRed( data ) { 
    return console.log(`%c${data} `, 'color: red');
};

function burstBlue( data ) { 
    return console.log(`%c${data} `, 'color: blue');
};

function burstGreen( data ) { 
    return console.log(`%c${data} `, 'color: green');
};

function burstYellow( data ) { 
    return console.log(`%c${data} `, 'color: yellow');
};

function burstOrange( data ) { 
    return console.log(`%c${data} `, 'color: orange');
};

function burstPink( data ) { 
    return console.log(`%c${data} `, 'color: pink');
};

function burst(css, data) {
    return console.log(`%c${data} `, css);
};

function burstCustomColor(color, string) {
    return console.log(`%c${string} `, `color: ${color}`);
};
