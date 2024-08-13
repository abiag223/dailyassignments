let counter = 0; 
let hiddenContent = document.getElementById('hiddenContent'); 
document.getElementById('button').addEventListener('click', function() {
     counter++; document.getElementById('counter').innerText = counter; 
     
     
     if (hiddenContent.style.display === 'none') {
         hiddenContent.style.display = 'block'; 
        } 
    else { 
        hiddenContent.style.display = 'none';
     } }); 