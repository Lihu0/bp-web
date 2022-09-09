"use strict";

const dig = 4;
let num_arr = [];
let bool_arr = [];
let pgia_arr = [];
let tries = 0;
let legal = true;
let adds = 0;
let rnd_arr = [];
const table = document.querySelector('#table');
const bp_btns = document.querySelector('#bp_btns')
// alert(`בחר מספר בין ${dig} ספרות`);
do {
    let rnd = rnd_num(dig);
    adds = 0;
    do {
        adds++;
        if (adds != 10 ** dig) {
            legal = true;
            rnd++;
            rnd %= 10 ** dig;
            rnd_arr = Array.from(rnd.toString()).map(Number);
            for (let i = 0; i < tries; i++) {
                const bool = calcbp(num_arr[i], rnd, dig)[0];
                const pgia = calcbp(num_arr[i], rnd, dig)[1];
                if (!(bool == bool_arr[i] && pgia == pgia_arr[i])) {
                    legal = false;
                    break;
                }
            }
            for (let i = 0; i < rnd_arr.length; i++) {
                for (let j = 0; j < rnd_arr.length; j++) {
                    if (rnd_arr[i] == rnd_arr[j] && i != j) {
                        legal = false;
                        break;
                    }
                }
            }

            if (rnd_arr.length != dig){
                legal = false;
            }

        }
    }
    while (!(legal) && (adds != 10 ** dig));
    if (adds != 10 ** dig && (adds != 10 ** dig)) {
        bp_btns.innerHTML += `<p>${rnd}</p>`;
        // const bool = localStorage.getItem('bool');
        // const pgia = localStorage.getItem('pgia');
        const bool = prompt(`הניחוש שלי הוא ${rnd} הזן כמות בולים`);
        const pgia = prompt(`הניחוש שלי הוא ${rnd} הזן כמות פגיעות`);

        tries++;
        num_arr.push(rnd);
        bool_arr.push(bool);
        pgia_arr.push(pgia);
        table.innerHTML += `<tr><th>${rnd}</th><th>${bool}</th><th>${pgia}</th><th>${tries}</th></tr>`;
    }
}
while (bool_arr[bool_arr.length - 1] != 4 && (adds != 10 ** dig));