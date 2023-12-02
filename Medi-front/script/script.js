function validarForm() {
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mensagemElement = document.getElementById('mensagem');
  
    if (nome !== '' && email !== '') {
      mensagemElement.textContent = 'Agradecemos o contato!';
      
      // Limpar os campos após o envio (opcional)
      document.getElementById('nome').value = '';
      document.getElementById('email').value = '';
    } else {
      mensagemElement.textContent = 'Por favor preencha com as suas informações para contato!';
    }
  }
  