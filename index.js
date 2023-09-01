const input = document.querySelector('#button'); 

function addingEventListener() {
   alert('I was clicked!');
   input.addEventListener('click', addingEventListener)
}

