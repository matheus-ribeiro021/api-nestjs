# API Alunos e Professores — NestJS e MySQL

API RESTful desenvolvida durante a Unidade Curricular de **Programação Web 2 — Senac RJ**, utilizando **NestJS**, **TypeScript** e **MySQL** para gerenciamento de alunos e professores.

---

## 1. Descrição

Este projeto consiste em uma API RESTful desenvolvida com NestJS para gerenciamento de alunos e professores.

A aplicação permite realizar operações de:

- cadastro;
- consulta;
- atualização;
- exclusão.

Nesta etapa do projeto, o recurso de **alunos**, que anteriormente utilizava dados armazenados em memória, passou a utilizar persistência real em banco de dados **MySQL**.

Também foi adicionado o campo:

```text
email
```

ao modelo de aluno.

Cada aluno possui os seguintes dados:

- `id`
- `nome`
- `email`
- `curso`

O recurso de professores continua utilizando dados armazenados em memória.

Cada professor possui:

- `id`
- `nome`
- `disciplina`

A arquitetura do recurso de alunos passou a utilizar:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
DatabaseService
    ↓
MySQL
```

---

## 2. Funcionalidades

A API possui as seguintes funcionalidades:

### Alunos

- Cadastro de alunos;
- Listagem de alunos;
- Consulta de aluno por ID;
- Atualização de alunos;
- Exclusão de alunos;
- Persistência dos dados em MySQL;
- Campo `email` na entidade aluno;
- Utilização de Repository;
- Utilização de pool de conexões;
- Configuração do banco através de variáveis de ambiente.

### Professores

- Cadastro de professores;
- Listagem de professores;
- Consulta de professor por ID;
- Atualização de professores;
- Exclusão de professores;
- Armazenamento temporário em memória.

---

## 3. Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- MySQL
- mysql2
- @nestjs/config
- npm
- Git
- GitHub

---

## 4. Arquitetura e Organização do Projeto

O recurso de alunos utiliza uma arquitetura em camadas:

```text
Cliente
    ↓
Controller
    ↓
Service
    ↓
Repository
    ↓
DatabaseService
    ↓
MySQL
```

### Responsabilidades

**Controller** — recebe e trata as requisições HTTP.

**Service** — coordena as operações da aplicação.

**Repository** — realiza o acesso aos dados e contém as instruções SQL.

**DatabaseService** — gerencia o pool de conexões com o MySQL.

**DatabaseModule** — disponibiliza o `DatabaseService` para outros módulos.

**MySQL** — realiza a persistência dos dados.

O recurso de professores continua utilizando:

```text
ProfessoresController
        ↓
ProfessoresService
        ↓
Dados em memória
```

### Estrutura principal

```text
src/
├── app.module.ts
├── main.ts
│
├── database/
│   ├── database.module.ts
│   └── database.service.ts
│
├── alunos/
│   ├── alunos.module.ts
│   ├── alunos.controller.ts
│   ├── alunos.service.ts
│   └── alunos.repository.ts
│
└── professores/
    ├── professores.module.ts
    ├── professores.controller.ts
    └── professores.service.ts
```

---

## 5. Pré-requisitos

Antes de executar o projeto, é necessário possuir:

- Node.js;
- npm;
- Git;
- MySQL.

---

## 6. Instalação

### 6.1 Clone o repositório

```bash
git clone https://github.com/matheus-ribeiro021/api-nestjs.git
```

### 6.2 Acesse a pasta do projeto

```bash
cd api-nestjs
```

### 6.3 Instale as dependências

```bash
npm install
```

---

## 7. Configuração das Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=escola
```

O arquivo `.env` contém informações específicas do ambiente e não deve ser enviado ao repositório.

Ele deve estar incluído no `.gitignore`:

```text
.env
```

O `ConfigModule` é utilizado para carregar as variáveis de ambiente.

O `ConfigService` permite acessar essas configurações dentro da aplicação.

---

## 8. Banco de Dados

Crie o banco:

```sql
CREATE DATABASE escola;
```

Selecione o banco:

```sql
USE escola;
```

Crie a tabela de alunos:

```sql
CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150),
    curso VARCHAR(100) NOT NULL
);
```

Caso a tabela já tenha sido criada anteriormente sem o campo `email`, utilize:

```sql
ALTER TABLE alunos
ADD COLUMN email VARCHAR(150);
```

A estrutura utilizada pela aplicação é:

```text
Aluno
├── id
├── nome
├── email
└── curso
```

---

## 9. Execução do Projeto

### Ambiente de desenvolvimento

```bash
npm run start:dev
```

A API estará disponível normalmente em:

```text
http://localhost:3000
```

### Build

Para verificar a compilação do projeto:

```bash
npm run build
```

### Ambiente de produção

```bash
npm run start:prod
```

---

## 10. Recurso Alunos

O recurso de alunos foi atualizado para utilizar persistência em banco de dados.

O fluxo passou a ser:

```text
AlunosController
      ↓
AlunosService
      ↓
AlunosRepository
      ↓
DatabaseService
      ↓
MySQL
```

O `AlunosController` recebe as requisições HTTP.

O `AlunosService` coordena as operações da aplicação.

O `AlunosRepository` realiza as consultas SQL.

O `DatabaseService` fornece o pool de conexões com o MySQL.

---

## 11. Endpoints de Alunos

| Método | Endpoint | Descrição |
| ------ | -------- | --------- |
| GET | `/alunos` | Lista todos os alunos |
| GET | `/alunos/:id` | Busca um aluno pelo ID |
| POST | `/alunos` | Cadastra um novo aluno |
| PUT | `/alunos/:id` | Atualiza um aluno |
| DELETE | `/alunos/:id` | Exclui um aluno |

---

## 12. Exemplos de Requisição — Alunos

### Criar aluno

```http
POST /alunos
Content-Type: application/json
```

```json
{
  "nome": "Maria",
  "email": "maria@email.com",
  "curso": "Engenharia de Software"
}
```

Exemplo de resposta:

```json
{
  "id": 1,
  "nome": "Maria",
  "email": "maria@email.com",
  "curso": "Engenharia de Software"
}
```

### Atualizar aluno

```http
PUT /alunos/1
Content-Type: application/json
```

```json
{
  "nome": "Maria Silva",
  "email": "maria.silva@email.com",
  "curso": "Análise e Desenvolvimento de Sistemas"
}
```

---

## 13. Repository de Alunos

A camada `Repository` foi adicionada para separar o acesso aos dados das regras da aplicação.

O fluxo é:

```text
AlunosService
      ↓
AlunosRepository
      ↓
DatabaseService
      ↓
MySQL
```

O `AlunosRepository` implementa operações como:

```text
SELECT
INSERT
UPDATE
DELETE
```

O campo `email` também passou a fazer parte das operações de:

```text
SELECT
INSERT
UPDATE
```

---

## 14. Persistência com MySQL

A aplicação utiliza o pacote:

```text
mysql2
```

para comunicação com o banco de dados.

O acesso ao banco é realizado através de um **pool de conexões**.

O pool permite reutilizar conexões em vez de criar uma nova conexão para cada requisição.

A arquitetura é:

```text
AlunosRepository
       ↓
DatabaseService
       ↓
Connection Pool
       ↓
MySQL
```

O limite configurado para o pool é de:

```text
10 conexões
```

---

## 15. DatabaseModule e DatabaseService

O `DatabaseModule` é responsável por registrar e exportar:

```text
DatabaseService
```

O `DatabaseService` cria e gerencia o pool de conexões.

Ele utiliza o `ConfigService` para obter informações como:

```text
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_NAME
```

O `DatabaseModule` exporta o `DatabaseService` para que outros módulos possam utilizá-lo.

---

## 16. Injeção de Dependência

O NestJS é responsável pela criação e injeção das dependências da aplicação.

No recurso de alunos, o fluxo utilizado é:

```text
AlunosController
      ↓
AlunosService
      ↓
AlunosRepository
      ↓
DatabaseService
```

O `AlunosModule` registra:

```text
AlunosController
AlunosService
AlunosRepository
```

e importa:

```text
DatabaseModule
```

Dessa forma, o `AlunosRepository` pode receber o `DatabaseService` através de injeção de dependência.

---

## 17. ConfigModule e ConfigService

O projeto utiliza:

```text
ConfigModule
ConfigService
```

O `ConfigModule` é configurado globalmente através de:

```ts
ConfigModule.forRoot({
  isGlobal: true,
})
```

O `ConfigService` é utilizado pelo `DatabaseService` para acessar as variáveis do arquivo `.env`.

Isso evita deixar configurações sensíveis diretamente no código-fonte.

---

## 18. Encerramento do Pool

O `DatabaseService` implementa o lifecycle hook:

```text
OnModuleDestroy
```

Quando a aplicação é encerrada adequadamente, o pool de conexões também é finalizado.

O projeto utiliza:

```ts
app.enableShutdownHooks();
```

permitindo que o NestJS execute os lifecycle hooks durante o encerramento da aplicação.

O encerramento do pool é realizado através de:

```ts
await this.pool.end();
```

---

## 19. Modelo de Dados

### Aluno

```text
Aluno
├── id: number
├── nome: string
├── email: string
└── curso: string
```

Representação:

```ts
{
  id: number;
  nome: string;
  email: string;
  curso: string;
}
```

No banco MySQL:

```text
alunos
├── id INT AUTO_INCREMENT PRIMARY KEY
├── nome VARCHAR(100) NOT NULL
├── email VARCHAR(150)
└── curso VARCHAR(100) NOT NULL
```

### Professor

```text
Professor
├── id: number
├── nome: string
└── disciplina: string
```

O recurso de professores permanece utilizando dados em memória nesta etapa.

---

## 20. Recurso Professores

O recurso de professores permanece com a arquitetura:

```text
ProfessoresController
        ↓
ProfessoresService
        ↓
Dados em memória
```

Os endpoints continuam disponíveis:

| Método | Endpoint | Descrição |
| ------ | -------- | --------- |
| GET | `/professores` | Lista todos os professores |
| GET | `/professores/:id` | Busca um professor pelo ID |
| POST | `/professores` | Cadastra um novo professor |
| PUT | `/professores/:id` | Atualiza um professor |
| DELETE | `/professores/:id` | Exclui um professor |

---

## 21. Providers, Imports e Exports

Nesta etapa foram utilizados conceitos importantes do NestJS.

### Providers

Os seguintes componentes são registrados como providers:

```text
AlunosService
AlunosRepository
DatabaseService
```

### Imports

O `AlunosModule` importa:

```text
DatabaseModule
```

O `AppModule` importa:

```text
ConfigModule
AlunosModule
ProfessoresModule
```

### Exports

O `DatabaseModule` exporta:

```text
DatabaseService
```

permitindo sua utilização em outros módulos.

---

## 22. Verificação do Projeto

Após a implementação da persistência com MySQL e do novo campo `email`, foi realizada a compilação do projeto através do comando:

```bash
npm run build
```

A compilação permite verificar se a estrutura TypeScript e NestJS está configurada corretamente.

As operações implementadas para alunos são:

```text
POST   /alunos
GET    /alunos
GET    /alunos/:id
PUT    /alunos/:id
DELETE /alunos/:id
```

As operações agora utilizam persistência no MySQL.

---

## 23. Extras — Programação Web 2

Nesta etapa foram implementados:

- Persistência de dados com MySQL;
- Campo `email` na entidade aluno;
- Camada `Repository`;
- `AlunosRepository`;
- `DatabaseModule`;
- `DatabaseService`;
- Pool de conexões;
- Configuração através de `ConfigModule`;
- Utilização de `ConfigService`;
- Variáveis de ambiente;
- Pacote `mysql2`;
- Injeção de dependência;
- Providers;
- Imports;
- Exports;
- Lifecycle hook `OnModuleDestroy`;
- Encerramento adequado do pool;
- Atualização das consultas `SELECT`;
- Atualização da operação `INSERT`;
- Atualização da operação `UPDATE`;
- Atualização dos dados recebidos pelo Controller.

---

## 24. Evolução da Arquitetura

Na etapa anterior, a arquitetura utilizada para alunos era:

```text
Controller
    ↓
Service
    ↓
Dados em memória
```

Nesta etapa, a arquitetura passou a ser:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
DatabaseService
    ↓
MySQL
```

Dessa forma, os dados dos alunos deixam de existir apenas durante a execução da aplicação e passam a ser armazenados de forma persistente no banco de dados.

---

## 25. Versionamento e Organização das Branches

O projeto utiliza branches para separar as atividades desenvolvidas durante as aulas.

A atividade desta etapa foi desenvolvida na branch:

```text
branch_20260925_extra
```

Esta branch representa uma continuação da atividade anterior desenvolvida na:

```text
branch_20260922
```

Na `branch_20260922`, a aplicação utilizava dados armazenados em memória.

Na `branch_20260925_extra`, o recurso de alunos passou a utilizar persistência com MySQL.

O desenvolvimento utiliza **Git** para controle de versão e **GitHub** como repositório remoto.

---

## 26. Autor

**Nome:** Matheus Ribeiro Saraiva  
**Unidade Curricular:** Programação Web 2  
**Instituição:** Senac RJ

GitHub:

https://github.com/matheus-ribeiro021

---

## 27. Licença e Uso Acadêmico

Projeto desenvolvido para fins acadêmicos na Unidade Curricular de **Programação Web 2 — Senac RJ**.

O código poderá ser utilizado para avaliação e acompanhamento acadêmico durante o curso.git add .