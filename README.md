# AUTH-BLOG-GQL
> This is an API for blogs where the users can upload, delete and update your posts.

I used GraphQL/Typescript for this.

> Created by Luca Becci

## 1. Started ⌨️

for get the project you will use:

```tsx
git clone "https://github.com/lucabecci/AUTH-BLOG-GQL"

```

## 2. Pre-requeriments 🛠

You will need this requeriments for good rendiment:

- Node.JS > 10.X
- PostgreSQL
- npm > 6.X
- Docker(if you will run this project with Docker)

## 3. Installation 🔩

You will need run this comands for the installation:

```
With npm: 
npm install //install the backend dependencies.

With yarn:
yarn install //install the backend dependencies.

```

## 4. Use the project

### About the app

the API use Node/Express/Typescript/MongoDB.

### How to run the API

1. In your terminal, navigate to the main directory.
2. Run `npm install` to install all dependencies.
3. Run `npm run start:build` for the api build
4. Run `npm start:prod` to start the app.

### How to run with Docker

1. You need Docker and docker-compose.
2. In your terminal, navigate to the main directory.
3. Run `docker-compose up` to create the image.

## 5. Project structure 📁

### Backend 📂

```
|-- dist
|-- node_modules
|-- pgdata(if you use docker)
|-- src
	|-- config
		|-- config.ts
	|-- database
		|-- Database.ts
	|-- entities
		|-- User.ts
		|-- Post.ts
	|-- modules
		|-- middlewares
			|-- Auth.ts
		|-- post
			|-- post-utils
				|-- PostInput.ts
			|-- PostResolver.ts
		|-- user
			|-- utils-login
				|-- LoginInput.ts
				|-- UserDoesntExists.ts
			|-- utils-register
				|-- EmailCheck.ts
				|-- RegisterInput.ts
				|-- UsernameCheck.ts
			|-- LoginResolver.ts
			|-- RegisterResolver.ts
			|-- LogoutResolver.ts
		|-- IndexResover.ts
	|-- redis
		|-- redis.ts
	|-- types
		|-- MyContext.ts
	|-- utils
		|-- init.ts
	|-- index.ts
	|-- server.ts
|-- .dockerignore
|-- .env
|-- .eslintrc.js
|-- .gitignore
|-- .prettierrc
|-- commitlint.config.js
|-- docker-compose.yml
|-- Dockerfile
|-- keys-docker.txt
|-- package.json
|-- README.md
|-- tsconfig.json
|-- users.ts
|-- yarn.lock

```

## 6. Build with 🛠

DEPENDENCIES:

- [express](https://expressjs.com/)- Fast, unopinionated, minimalist web framework for node.
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata) - Decorators add the ability to augment a class and its members as the class is defined, through a declarative syntax.
- [typeorm](https://typeorm.io/#/) - TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8).
- [typegraphql](https://typegraphql.com/) - ypeGraphQL is a library that makes this process enjoyable by defining the schema using only classes and a bit of decorator magic.
- [pg](https://www.npmjs.com/package/pg) - Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.
- [apollo-server-express](https://www.npmjs.com/package/apollo-server-express) - This is the Express and Connect integration of GraphQL Server. Apollo Server is a community-maintained open-source GraphQL server that works with many Node.js HTTP server frameworks.
- [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [bcrypt](https://www.npmjs.com/package/bcryptjs) - Optimized bcrypt in JavaScript with zero dependencies.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- [connect-redis](https://www.npmjs.com/package/connect-redis) - connect-redis provides Redis session storage for Express.
- [ioredis](https://github.com/luin/ioredis) - A robust, performance-focused and full-featured Redis client for Node.js.
- [class-validator](https://github.com/typestack/class-validator) - Allows use of decorator and non-decorator based validation. Internally uses validator.js to perform validation. Class-validator works on both browser and node.js platforms.
- [express-session](https://www.npmjs.com/package/express-session)

DEV-DEPENDENCIES:

- [typescript](https://www.typescriptlang.org/) - TypeScript is a language for application-scale JavaScript.
- [husky](https://www.npmjs.com/package/husky) - Husky can prevent bad git commit, git push and more 🐶 woof!
- [commitlint](https://commitlint.js.org/#/) - commitlint helps your team adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy.
- [prettier](https://prettier.io/) - Prettier is an opinionated code formatter.
- [ts-node](https://www.npmjs.com/package/ts-node)-dev - TypeScript execution and REPL for node.js, with source map support.
- [eslint](https://eslint.org/) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript/Typescript code.

## 7. Database 📫

For the database i using PostgreSQL

- PostgreSQL
- Version: 12.5

## 8. Versioned 1️⃣

For the versioning, [ConventionalCommits] was used ([https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/))

I using husky for the control in commits and push

## 9. Author 🙎🏻‍♂️

***Luca Becci -** code and documentation*

- [github](https://github.com/lucabecci)
- [twitter](https://twitter.com/lucabecci)
- [linkedin](https://www.linkedin.com/in/luca-becci-b8044b198/)