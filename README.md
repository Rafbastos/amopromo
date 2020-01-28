Ao clonar o projeto, deve utilizar o comando yarn add env-cmd para configurar o uso de arquivos ".env". Na raiz do projeto deve ser criado um arquivo .env.development a partir do arquivo .env.example e preencher os dados para o acesso a API.
 
No campo REACT_APP_PASSWORD_SERVICE onde se adiciona a senha para acessar o serviço da API, é necessário adicionar uma barra invertira "\" antes de qualquer caractere especial caso exista, como #,$,% ficando \#, \$, \%.

Favor ler o arquivo HISTORY.md