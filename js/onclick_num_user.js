"use strict"

const onclick_num_bool = (num) => {
    const show_bool = document.querySelector('#show_bool');
    show_bool.innerHTML = num;
}

const onclick_num_pgia = (num) => {
    const show_pgia = document.querySelector('#show_pgia');
    show_pgia.innerHTML = num;
}

const onclick_enter =  () => {
   const show_bool = document.querySelector('#show_bool');
   const show_pgia = document.querySelector('#show_pgia');
   localStorage.setItem('bool', show_bool.innerHTML)
   localStorage.setItem('pgia', show_pgia.innerHTML)
   let bool = localStorage.getItem('bool')
   let pgia = localStorage.getItem('pgia')
   console.log(bool, pgia)
}