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
 |    ├── todo.model.ts
 |    ├── todo.module.ts
 │    └── dto/
 │         ├── create-todo.dto.ts
 │         └── update-todo.dto.ts
 │         └── todo-response.dto.ts
 │    
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

### **GET /todo**

Get all todos.

### **POST /todo**

Create a new todo.

```json
{
  "title": "Buy milk",
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

