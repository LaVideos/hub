let duplicate = string => {
    let str = string.toLowerCase();
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        let a = str.split(str[i]);
        if (a.length > 2) {
            arr.push(')');
        } else if (str[i] === ' ') {
            arr.push(' ');
        } else {
            arr.push('(');
        }
    }

    let b = arr.join('');

    console.log(b);


}

duplicate('дарова');