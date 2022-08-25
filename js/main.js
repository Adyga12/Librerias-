function mostrarFormEnviado(){
  Swal.fire({
    position: 'top',
    icon: 'sucess',
    title: 'Gracias!',
    text: 'Sus datos fueron enviados correctamente',
    showConfirmButton:false,
    background: '#ccc url(images/3f2dcb560e5b1967176aa732f7a2c9f7.jpg)',
    width: 600,
    padding: '3em',
    color: '#89ck94',
    backdrop: '
    rgba (255,255,255)
    URL("images/emote Ady.png")
    right top
    no-repeat 
    '
    ,
    timer: 3000
  });
}
document.getElementbyId ("boton enviar").addEventListener("click", mostrarFormEnviado)