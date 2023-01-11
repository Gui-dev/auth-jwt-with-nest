<h1 align="center">
  Authentication with Nestjs and JWT
</h1>
<p align="center">
  <img
    src="./.screens/1.png"
    alt="Authentication with Nestjs and JWT"
    title="Authentication with Nestjs and JWT"
  />
</p>

# 💻 Project

<p>
Autenticação usando Nestjs com Typescript e JWT, com regras de permissão de usuários
</p>

## ✨ Technologies used

- [Node](https://nodejs.org)
- [Nest](https://docs.nestjs.com)
- [Typescript](https://www.typescriptlang.org)
- [Passport-JWT](http://www.passportjs.org/packages/passport-jwt)

# 🚀 How to run

## Install dependencies

npm install

## Run the app

npm run start:dev

### Request

<p>Login</p>

```bash
POST /login
```

<span>Datas</span>

```bash
{
	"username": "bruce@emai.com",
	"password": "123456"
}
```

<p>Return</p>

```bash
{
	"user": {
		"username": "bruce@email.com",
		"role": "admin"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidXNlcm5hbWUiOiJicnVjZUBlbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzM0MTc2MjEsImV4cCI6MTY3MzQxNzY4MX0.6SM7SrQrA8_p_EujG80jX7flv-LW0D4gPLRtbaClQB4"
}
```

## 📄 Licença

This project is under the MIT license. See the file [LICENSE](LICENSE.md) for
more details
