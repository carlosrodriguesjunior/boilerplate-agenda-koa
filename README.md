# Agendador de Tarefas

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/571dda1401754c87b586c2d68f3ffbb8)](https://www.codacy.com/app/carlosrodriguesjunior/boilerplate-agenda-koa?utm_source=github.com&utm_medium=referral&utm_content=carlosrodriguesjunior/boilerplate-agenda-koa&utm_campaign=badger)

Este projeto tem como objetivo demonstrar a utilização do Agenda.

### Prerequisites

* [Mongodb](https://www.mongodb.com/) - Banco de Dados Documental
* [NodeJs](https://nodejs.org/) - Linguagem Js
* [KoaJS](http://koajs.com/) - Framework Web (Versão 1 - genarators)
* [Agenda](https://github.com/rschmukler/agenda) - Agendador de tarefas
* [Agendash](https://github.com/joeframbach/agendash) - Interface do gerenciador de tarefas Agenda

### Instalação

Instalando as dependencias
```
npm install
```

Carrgando dados iniciais no banco de dados MongoDb
```
npm run seed
```


## Inicializando o Agenda ( módulo agendador de tarefas)

```
npm run process
```

Consultando o Agendash (UI do agendador de tarefas)

```
http://localhost:9000

```

## Inicializando o Koa ( módulo web de api's rest)

```
npm run dev
```

Api estará disponivel em 

```
http://localhost:3000
```

## Authors

* **Carlos Rodrigues** - [Carlão](https://github.com/carlosrodriguesjunior)

## License

Copia ae logo.

## Acknowledgments

* NodeJs
* Mongoose
* genarators
* Agenda
* Design Patterns
* etc