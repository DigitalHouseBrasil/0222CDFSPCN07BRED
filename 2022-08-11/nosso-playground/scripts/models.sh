npx sequelize-cli model:generate --name Usuario --attributes nome:string,email:string,papel:string,ativo:boolean

npx sequelize-cli model:generate --name Nivel --attributes descricao:string

npx sequelize-cli model:generate --name Matricula --attributes status:string

npx sequelize-cli model:generate --name Turma --attributes descricao:string,inicio:dateonly