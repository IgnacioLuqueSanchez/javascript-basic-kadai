const boton = document.getElementById('btn');

boton.addEventListener('click', () => {
  
  setTimeout(() => {
    const texto = document.getElementById('text');
    texto.textContent = 'ボタンをクリックしました';
  }, 2000); 
});
