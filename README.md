<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

Here’s a clean, professional **README.md** you can copy-paste into your GitHub repository 👇
(If you want it more stylish, with badges, emojis, or code previews, just tell me!)

---

# 📝 Minimal TODO API – NestJS

A clean, simple, minimal **TODO API built with NestJS**, designed for learning, demos, and lightweight usage.

This API does **not use a database** — all todos are stored in **in-memory storage**, which means data resets on every server restart.
Built with:

* ✅ NestJS (Modular, scalable structure)
* ✅ In-memory storage (no DB required)
* ✅ Validation Pipes
* ✅ TypeScript
* ✅ Clean, minimal codebase

---

## 🚀 Features

* Create, read, update, and delete todos
* Uses **NestJS Validation Pipe** for body validation
* Simple service + controller structure
* In-memory storage (auto resets on refresh)
* Clean, beginner-friendly design

---

## 📂 Project Structure

```
src/
 ├── app.module.ts
 ├── main.ts
 ├── todo/
 │    ├── todo.controller.ts
 │    ├── todo.service.ts
 │    ├── dto/
 │    │    ├── create-todo.dto.ts
 │    │    └── update-todo.dto.ts
 │    └── interfaces/todo.interface.ts
```

---

## 📦 Installation

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install
```

---

## ▶️ Running the Server

```bash
npm run start:dev
```

Server default URL:

```
http://localhost:3000
```

---

## 🛠 API Endpoints

### **GET /todos**

Get all todos.

### **POST /todos**

Create a new todo.

```json
{
  "title": "Buy milk",
  "description": "2 liters",
  "completed": false
}
```

### **PATCH /todos/:id**

Update a todo.

### **DELETE /todos/:id**

Delete a todo.

---

## 🔎 Validation Example (DTO)

```ts
export class CreateTodoDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;
}
```

---

## 🧪 In-Memory Storage

This project uses a simple array to store data:

```ts
private todos: Todo[] = [];
```

⚠️ **Data is removed every time you restart the app**, because it is stored in memory.

---

## 🎯 Purpose

This project is great for:

* Learning NestJS basics
* Practicing DTO + Validation Pipes
* Building small demo APIs
* Testing frontend apps without a database

---

## 📄 License

MIT License © 2025

---

If you'd like, I can also:

✨ Add badges
🎨 Add emojis & visual sections
🧪 Add Swagger documentation sample
📘 Add more API examples

Just tell me!

