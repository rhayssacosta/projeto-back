# final-api

## Verificar as versões do node e npm:
node -v
npm -v

## Criar uma imagem docker mysql
docker run --name final-api -e MYSQL_ROOT_PASSWORD=root123 -e MYSQL_DATABASE=final-project -p 3306:3306 -d mysql

mysql -u root -p

## Inicializar um projeto Node.js
npm init -y

## Instalar dependências
npm install express dotenv nodemon mysql2 sequelize sequelize-cli jsonwebtoken swagger-jsdoc swagger-ui-express bcrypt --save

## Iniciar o sequelize-cli
npx sequelize-cli init

## Crie as seguintes migrations:
npx sequelize-cli model:generate --name User --attributes full_name:string,email:string,password:string

npx sequelize-cli model:generate --name Address --attributes user_id:integer,street:string,number:string,city:string,state:string,zip_code:string

npx sequelize-cli model:generate --name Category --attributes name:string

npx sequelize-cli model:generate --name Product --attributes name:string,description:text,price:decimal,stock:integer,category_id:integer

npx sequelize-cli model:generate --name Order --attributes user_id:integer,address_id:integer,status:string

npx sequelize-cli model:generate --name OrderItem --attributes order_id:integer,product_id:integer,quantity:integer

## Configure suas varáveis de ambiente
cp .env.example .env
após a cópia do arquivo, altere o valor das variáveis

## Execute as migrations:
npx sequelize-cli db:migrate

## Criar arquivo de seed
npx sequelize-cli seed:generate --name demo-data

## Execute o seed
npx sequelize-cli db:seed:all


## Configurar API
http://localhost:3000/api-docs‣牰橯瑥ⵯ慢正⌊瀠潲敪潴戭捡੫