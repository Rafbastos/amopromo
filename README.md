Ao clonar o projeto utilizar o comando yarn add env-cmd. E então iniciar o projeto utilizando o comando yarn start.

Para configurar esse projeto é necessário criar um arquivo .env.development na raiz do projeto a partir do arquivo .env.example. No campo REACT_APP_PASSWORD_SERVICE onde se adiciona a senha para acessar o serviço da API, é necessário adicionar uma barra invertira "\" antes de qualquer caractere especial caso exista, como #,$,% ficando \#, \$, \%.

Favor ler o arquivo HISTORY.md