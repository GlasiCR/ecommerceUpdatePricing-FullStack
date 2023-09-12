# Ecommerce Update Pricing - FullStack

Este projeto consiste em uma ferramenta de atualização de preços para empresas de e-commerce. Ela permite aos usuários realizar atualizações a partir de um do upload de um arquivo .csv.

## Índice
•	Instalação e dependências

•	Funcionalidades da Ferramenta

•	Tecnologias Utilizadas

•	Sobre o arquivo .csv

•	Pendências/Issues


### Instalação e dependências
##### Fron-end
###### npm run dev
•	React.js: npm create vite (com Typyscript);

•	Style-Components: npm install styled-components;

•	Type Style-Components:  npm install --save-dev @types/styled-components;

##### Back-end
###### npm run start
•	Node.js inicializar projeto: npm init -y;

•	MySQL: npm install mysql;

•	Express: npm install express;

•	Cors: npm install cors;

•	Nodemon: npm install nodemon;

•	Csv-parse: npm install csv-parse;

•	Multer: npm install multer;

Obs.: Não há variável de ambiente configurada. 
Antes de iniciar o projeto necessário inserir no arquivo DatabaseConfig.js as informações para acesso ao MySQL: host, user, password e database.
Arquivo disponível na rota back\src\databaseConfig

### Funcionalidades da Ferramenta
•	Carregamento do arquivo de precificação;

•	Validação de campos, códigos de produtos e preços;

•	Verificação de conformidade com as regras de negócio;

•	Exibição de informações dos produtos após validação;

•	Identificação das regras que foram “quebradas”;

•	Atualização de preços no banco de dados.

Tecnologias Utilizadas
•	Backend em Node.js com o framework Express para implementar a lógica de negócios e criar um servidor web que interage com o banco de dados MySQL;

•	Frontend em React.js para facilitar a interação do usuário com a ferramenta, proporcionando uma interface de usuário amigável e responsiva;

•	Banco de dados MySQL (versão 5 ou 8) para armazenar informações detalhadas sobre produtos e preços, garantindo um gerenciamento eficiente dos dados;

### Sobre o arquivo .csv
O arquivo deve seguir este formato:
code	name	new_price
16	AZEITE  PORTUGUES  EXTRA VIRGEM GALLO 500ML	20.49
18	BEBIDA ENERGÉTICA VIBE 2L	8.99

### Pendências/Issues
Explique como outros desenvolvedores podem contribuir para o projeto. Inclua informações sobre como abrir problemas (issues) e enviar pull requests.
•	Aplicação não está atualizando o valor do produto quando o mesmo faz parte de um pack;

•	Embora a rota do back-end para upload de arquivo esteja funcionando (validado no Postman) a requisição do front-end não está tendo sucesso.
Para navegação é possível "mocar" dados em um array disponibilizado no arquivo index.tsx, rota: front\src
