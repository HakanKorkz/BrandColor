const getContrast = (hexColor) => {
    let r = parseInt(hexColor.substr(0,2),16);
    let g = parseInt(hexColor.substr(2,2),16);
    let b = parseInt(hexColor.substr(4,2),16);
    let yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
}

export {
    getContrast
}
