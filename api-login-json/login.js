document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // URL da API
    const apiUrl = 'http://localhost:3000/users'; // Substitua pela sua URL

    // Dados enviados para a API
    const data = {
      username: username,
      password: password
    };

    // Fazendo a requisição à API
    axios.post(apiUrl, data)
      .then(response => {
        if (response.data.success) {
          messageElement.textContent = 'Login realizado com sucesso!';
          messageElement.style.color = 'green';
          // Redirecione para outra página, se necessário:
          // window.location.href = '/dashboard';
        } else {
          messageElement.textContent = 'Usuário ou senha incorretos.';
          messageElement.style.color = 'red';
        }
      })
      .catch(error => {
        console.error('Erro ao fazer login:', error);
        messageElement.textContent = 'Erro ao conectar à API.';
        messageElement.style.color = 'red';
      });
  });