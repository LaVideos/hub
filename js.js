// let duplicate = string => {
//     let str = string.toLowerCase();
//     let arr = [];
//
//     for (let i = 0; i < str.length; i++) {
//         let a = str.split(str[i]);
//         if (a.length > 2) {
//             arr.push(')');
//         } else {
//             arr.push('(');
//         }
//     }
//     let b = arr.join('');
//     console.log(b);
// }
//
// duplicate('дарова lf');



let duplicate3 = string =>{
    let a = string;
    let h = string.split('');
    for (let i = 0; i < string.length; i++) {
        h.shift();
        for (let j = 0; j < h.length; j++) {
            if(h.includes(string[i])){
                a = a.replaceAll(string[i],')');
            }else {
                a = a.replaceAll(string[i],'(');
            }
        }
    }

    console.log(a);

}
duplicate3('heh hah');






















// let duplicate2 = string =>{
//     let a = [];
//     for (let i = 0; i < string.length; i++) {
//         a.push(string.indexOf(string[i]));
//     }
//     console.log(a);
//
// }
//
// duplicate2('hello')

