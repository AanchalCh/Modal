'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const buttonCloseModal = document.querySelector('.close-modal') 

const btnsOpenModal = document.querySelectorAll('.show-modal')

const openModal = function (){
    console.log ("Button clicked")
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = function (){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for(let i=0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal)
}

buttonCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e){
    console.log(e.key)

    //if the pressed key is escape
    if(e.key === 'Escape'){
        //if the modal does not contain the hidden class then close the modal
        if(!modal.classList.contains('hidden'))
        closeModal()
    }
})