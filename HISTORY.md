Nesse projeto não foi concluído a pagina de Purchase. Para concluír esse problema seria preciso um poucos mais de tempo pois eu precisaria estudar melhor sobre como aplicar o formValueSelector do redux-form para compartilhar os dados do formlário de Quotation, onde seria possível recuperar os dados para enviar os campos external_id, plan_id, coverage_begin, coverage_end, destination_id juntamente com os dados que são gerados no formulário FormPurchase.js para realizar o POST de Purchase.

Outro ponto que não realizei foi a validação dos formulários e nem as mensagens de erro e sucesso utilizando o Toast por não ter conseguido realizar as tarefas primarias em tempo hábil.

Também usei para conexões com as API's tanto o método FETCH criado por mim, quanto a biblioteca AXIOS, pois ao lidar com os Reducers, o REACT apresenta problemas para lidar com os hooks. Uma possibilidade talvez seria abordar Middlewares para resolver esse problema, mas optei por utilziar AXIOS quando precisei lidar com os reducers.

Pontos que consegui reparar durante o projeto:
- A autenticação é do tipo Basic, e faz um Base64 de usuário + senha.
- Eu reparei que vocês respondem com Access-Control-Allow-Origin: * pra não ter problema de CORS pros candidatos.
- Reparei que uma rota, sem autenticação, responde 502 invés de 401.
- Reparei que vocês estão usando Nginx 1.17.5.(Em uma situação de produção isso representaria uma falha de segurança)