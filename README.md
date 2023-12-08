## Ecommerce Update Pricing - FullStack
<div style="display: flex;"> <br>
<img align="center", src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img align="center", src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"> 
<img align="center", src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img align="center", src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> 
<img align="center", src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white">
<img align="center", src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">

<br>
<br>
</div>

### Descrição:
Desenvolvi uma interface na qual empresas cadastradas no e-commerce podem carregar um arquivo .CSV* com informações do produto que deseja atualizar o preço de venda, bem como este novo preço.
Com base no upload deste arquivo, somada a informações consumidas da API, também desenvolvida por mim, uma tabela é preenchida com as devidas informações e validações, se o preço atual atende as regras de negócio ou não.
Estando tudo OK, o comerciante consegue atualizar o preço do produto e esta nova informação é persistida no banco de dados.

### Instalação e dependências:
##### Fron-end

##### Para começar: 
###### npm run dev

•	React.js: npm create vite (com Typyscript);

•	Style-Components: npm install styled-components;

•	Type Style-Components:  npm install --save-dev @types/styled-components;

##### Back-end

##### Para começar: 
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

### Funcionalidades da Ferramenta:

•	Carrega do arquivo .csv com a nova precificação;

•	Validação de campos, códigos de produtos e preços;

•	Verificação de conformidade com as regras de negócio;

•	Exibição de informações dos produtos após validação;

•	Identificação das regras que foram “quebradas”;

•	Atualização de preços no banco de dados.

### Contribuições:
Ficarei muito feliz caso queira contribuir com o projeto e desde já agradeço =) Clone este repositório, crie seu branch de trabalho e bora lá! Ao final, abra um Pull Request explicando o problema resolvido ou recurso realizado. Contato: https://www.linkedin.com/in/glasielle-cirilo-dev-fullstack/
