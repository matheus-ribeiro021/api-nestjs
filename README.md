# API Alunos, Professores e Disciplinas — NestJS, Prisma ORM e MySQL

API RESTful desenvolvida durante a Unidade Curricular de **Programação Web 2 — Senac RJ**, utilizando **NestJS**, **TypeScript**, **Prisma ORM** e **MySQL** para gerenciamento de alunos, professores e disciplinas.

---

## 1. Descrição

Este projeto consiste em uma API RESTful desenvolvida com NestJS.

A aplicação evoluiu ao longo das atividades da disciplina, passando por diferentes etapas de arquitetura e persistência.

Inicialmente, os dados eram armazenados em memória.

Posteriormente, a aplicação passou a utilizar:

```text
Repository
    ↓
DatabaseService
    ↓
mysql2
    ↓
MySQL
```

Nesta etapa, a camada de persistência foi migrada de **SQL manual com mysql2** para **Prisma ORM**.

A arquitetura passou a utilizar:

```text
HTTP Request
     ↓
ValidationPipe
     ↓
DTO
     ↓
Controller
     ↓
Service
     ↓
Repository
     ↓
PrismaService
     ↓
Prisma Client
     ↓
Driver Adapter
     ↓
MySQL
```

A migração para Prisma permitiu manter as camadas de Controller, Service, Repository, DTOs e validação, alterando principalmente a implementação da persistência.

---

## 2. Funcionalidades

### Alunos

A API permite:

- Cadastro de alunos;
- Listagem de alunos;
- Consulta de aluno por ID;
- Atualização completa de alunos;
- Atualização parcial com `PATCH`;
- Exclusão de alunos;
- Persistência com Prisma ORM;
- Validação do nome;
- Validação do e-mail;
- Validação do curso;
- Tratamento de alunos inexistentes;
- Filtro por curso;
- Pesquisa parcial por nome;
- Paginação;
- Retorno de códigos HTTP adequados.

### Disciplinas

A API permite:

- Cadastro de disciplinas;
- Listagem de disciplinas;
- Consulta de disciplina por ID;
- Atualização de disciplinas;
- Exclusão de disciplinas;
- Persistência com Prisma ORM;
- Validação de nome;
- Validação da carga horária;
- Tratamento de disciplinas inexistentes.

### Professores

O recurso de professores continua permitindo:

- Cadastro;
- Listagem;
- Consulta por ID;
- Atualização;
- Exclusão.

O recurso de professores permanece utilizando dados armazenados em memória nesta etapa.

---

## 3. Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- MySQL
- Prisma ORM 7
- Prisma Client
- `@prisma/client`
- `@prisma/adapter-mariadb`
- `@nestjs/config`
- `@nestjs/mapped-types`
- `class-validator`
- `class-transformer`
- `dotenv`
- npm
- Git
- GitHub

---

## 4. Evolução da Persistência

Antes da utilização do Prisma:

```text
Repository
    ↓
DatabaseService
    ↓
mysql2
    ↓
SQL manual
    ↓
MySQL
```

Depois da migração:

```text
Repository
    ↓
PrismaService
    ↓
Prisma Client
    ↓
Driver Adapter
    ↓
MySQL
```

Com essa alteração, deixaram de ser necessários:

```text
DatabaseModule
DatabaseService
mysql2
RowDataPacket
ResultSetHeader
pool.execute()
SQL manual para CRUD
? placeholders
insertId
affectedRows
```

E passaram a fazer parte do projeto:

```text
Prisma ORM
Prisma Client
PrismaService
PrismaModule
schema.prisma
Prisma Models
Driver Adapter
db pull
prisma generate
migrations
baseline
Prisma Studio
```

---

## 5. Arquitetura Atual

A arquitetura principal da aplicação é:

```text
Cliente
   ↓
ValidationPipe
   ↓
DTO
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
PrismaService
   ↓
Prisma Client
   ↓
PrismaMariaDb
   ↓
MySQL
```

### Responsabilidades

**ValidationPipe** — valida e transforma os dados recebidos.

**DTO** — define o formato e as regras de validação das entradas.

**Controller** — recebe as requisições HTTP.

**Service** — coordena regras e operações da aplicação.

**Repository** — concentra as operações de persistência.

**PrismaService** — fornece uma instância compartilhada do Prisma Client.

**Prisma Client** — disponibiliza uma API TypeScript para acesso aos models.

**Driver Adapter** — realiza a comunicação entre Prisma e MySQL.

**MySQL** — banco de dados utilizado para persistência.

---

## 6. Estrutura Principal

```text
api-nestjs/
│
├── prisma/
│   ├── migrations/
│   │   └── 0_init/
│   │       └── migration.sql
│   │
│   └── schema.prisma
│
├── src/
│   ├── generated/
│   │   └── prisma/
│   │       └── ...
│   │
│   ├── prisma/
│   │   ├── prisma.module.ts
│   │   └── prisma.service.ts
│   │
│   ├── alunos/
│   │   ├── dto/
│   │   │   ├── create-aluno.dto.ts
│   │   │   ├── update-aluno.dto.ts
│   │   │   └── patch-aluno.dto.ts
│   │   │
│   │   ├── alunos.module.ts
│   │   ├── alunos.controller.ts
│   │   ├── alunos.service.ts
│   │   └── alunos.repository.ts
│   │
│   ├── disciplinas/
│   │   ├── dto/
│   │   │   ├── create-disciplina.dto.ts
│   │   │   └── update-disciplina.dto.ts
│   │   │
│   │   ├── disciplinas.module.ts
│   │   ├── disciplinas.controller.ts
│   │   ├── disciplinas.service.ts
│   │   └── disciplinas.repository.ts
│   │
│   ├── professores/
│   │   ├── professores.module.ts
│   │   ├── professores.controller.ts
│   │   └── professores.service.ts
│   │
│   ├── app.module.ts
│   └── main.ts
│
├── .env
├── package.json
├── prisma.config.ts
└── tsconfig.json
```

---

## 7. Pré-requisitos

Antes de executar o projeto, é necessário possuir:

- Node.js;
- npm;
- Git;
- MySQL.

---

## 8. Instalação

### 8.1 Clone o repositório

```bash
git clone https://github.com/matheus-ribeiro021/api-nestjs.git
```

### 8.2 Acesse a pasta

```bash
cd api-nestjs
```

### 8.3 Instale as dependências

```bash
npm install
```

---

## 9. Dependências do Prisma

Nesta etapa foram adicionadas:

```bash
npm install -D prisma@7
```

```bash
npm install @prisma/client@7 @prisma/adapter-mariadb dotenv
```

O projeto passou a utilizar Prisma ORM como tecnologia principal de persistência.

---

## 10. Configuração ESM

O Prisma 7 utiliza a arquitetura baseada em módulos ES.

O `package.json` possui:

```json
{
  "type": "module"
}
```

Essa configuração permite utilizar corretamente os imports ESM do projeto.

---

## 11. Configuração das Variáveis de Ambiente

O arquivo `.env` possui configurações semelhantes a:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=escola

DATABASE_URL="mysql://root:sua_senha@localhost:3306/escola"
```

A variável:

```text
DATABASE_URL
```

é utilizada pelas ferramentas de linha de comando do Prisma.

As variáveis:

```text
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_NAME
```

são utilizadas pelo `PrismaService` para configurar o driver adapter.

O `.env` não deve ser versionado.

No `.gitignore`:

```text
.env
```

---

## 12. Prisma Config

O arquivo:

```text
prisma.config.ts
```

configura a CLI do Prisma.

Exemplo:

```ts
import 'dotenv/config';

import {
  defineConfig,
  env,
} from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',

  migrations: {
    path: 'prisma/migrations',
  },

  datasource: {
    url: env('DATABASE_URL'),
  },
});
```

---

## 13. Prisma Schema

O arquivo principal do Prisma é:

```text
prisma/schema.prisma
```

Ele contém:

- generator;
- datasource;
- models;
- mapeamento entre objetos TypeScript e tabelas MySQL.

Exemplo:

```prisma
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "mysql"
}
```

---

## 14. Model Aluno

O model de aluno é:

```prisma
model Aluno {
  id    Int    @id @default(autoincrement())
  nome  String @db.VarChar(100)
  email String @db.VarChar(150)
  curso String @db.VarChar(100)

  @@map("alunos")
}
```

O Prisma utiliza:

```text
Aluno
```

como nome do model no código.

O:

```prisma
@@map("alunos")
```

informa que a tabela real no MySQL continua chamada:

```text
alunos
```

Assim:

```text
prisma.aluno
      ↓
Model Aluno
      ↓
@@map("alunos")
      ↓
Tabela alunos
```

---

## 15. Model Disciplina

O model utilizado para disciplinas é:

```prisma
model Disciplina {
  id           Int    @id @default(autoincrement())
  nome         String @db.VarChar(100)
  cargaHoraria Int    @map("carga_horaria")

  @@map("disciplinas")
}
```

O campo TypeScript:

```text
cargaHoraria
```

é mapeado para a coluna:

```text
carga_horaria
```

através de:

```prisma
@map("carga_horaria")
```

---

## 16. Introspecção do Banco

Como o banco já existia antes da introdução do Prisma, foi utilizada introspecção.

Comando:

```bash
npx prisma db pull
```

O fluxo é:

```text
MySQL
   ↓
prisma db pull
   ↓
schema.prisma
```

O Prisma analisa:

- tabelas;
- colunas;
- chaves;
- tipos.

E atualiza os models do `schema.prisma`.

---

## 17. Gerando o Prisma Client

Após configurar o schema:

```bash
npx prisma generate
```

O fluxo é:

```text
schema.prisma
      ↓
prisma generate
      ↓
Prisma Client
      ↓
src/generated/prisma
```

Os arquivos gerados automaticamente não devem ser editados manualmente.

Sempre que o schema for modificado, o client deve ser gerado novamente.

---

## 18. PrismaService

O projeto utiliza um provider compartilhado:

```text
PrismaService
```

Ele estende:

```text
PrismaClient
```

e utiliza:

```text
PrismaMariaDb
```

como driver adapter.

Fluxo:

```text
PrismaService
      ↓
PrismaClient
      ↓
PrismaMariaDb
      ↓
Driver / Pool
      ↓
MySQL
```

Uma única instância do Prisma Client é compartilhada entre os Repositories.

Isso evita a criação desnecessária de múltiplos pools de conexão.

---

## 19. PrismaModule

O `PrismaModule` registra e exporta:

```text
PrismaService
```

Exemplo:

```ts
@Module({
  providers: [
    PrismaService,
  ],

  exports: [
    PrismaService,
  ],
})
export class PrismaModule {}
```

Dessa forma, outros módulos podem importar o `PrismaModule` e utilizar o Prisma.

---

## 20. Encerramento das Conexões

O `PrismaService` implementa:

```text
OnModuleDestroy
```

Quando a aplicação é encerrada:

```text
NestJS
   ↓
onModuleDestroy()
   ↓
prisma.$disconnect()
   ↓
conexões encerradas
```

A aplicação continua utilizando:

```ts
app.enableShutdownHooks();
```

O encerramento é realizado através de:

```ts
await this.$disconnect();
```

---

## 21. Repository de Alunos com Prisma

Antes, o `AlunosRepository` utilizava SQL manual.

Agora utiliza métodos do Prisma Client.

### Listagem

```ts
this.prisma.aluno.findMany()
```

### Busca por ID

```ts
this.prisma.aluno.findUnique({
  where: {
    id,
  },
});
```

### Criação

```ts
this.prisma.aluno.create({
  data: {
    nome,
    email,
    curso,
  },
});
```

### Atualização

```ts
this.prisma.aluno.update({
  where: {
    id,
  },

  data: {
    nome,
    email,
    curso,
  },
});
```

### Exclusão

```ts
this.prisma.aluno.delete({
  where: {
    id,
  },
});
```

---

## 22. Comparação SQL × Prisma

### Listar registros

Antes:

```sql
SELECT *
FROM alunos;
```

Agora:

```ts
prisma.aluno.findMany()
```

### Buscar por ID

Antes:

```sql
SELECT *
FROM alunos
WHERE id = ?;
```

Agora:

```ts
prisma.aluno.findUnique({
  where: {
    id,
  },
});
```

### Inserir

Antes:

```sql
INSERT INTO alunos (
  nome,
  email,
  curso
)
VALUES (?, ?, ?);
```

Agora:

```ts
prisma.aluno.create({
  data: {
    nome,
    email,
    curso,
  },
});
```

### Atualizar

Antes:

```sql
UPDATE alunos
SET
  nome = ?,
  email = ?,
  curso = ?
WHERE id = ?;
```

Agora:

```ts
prisma.aluno.update({
  where: {
    id,
  },

  data: {
    nome,
    email,
    curso,
  },
});
```

### Excluir

Antes:

```sql
DELETE FROM alunos
WHERE id = ?;
```

Agora:

```ts
prisma.aluno.delete({
  where: {
    id,
  },
});
```

---

## 23. Filtro por Curso

Foi implementada a possibilidade de filtrar alunos por curso.

Exemplo:

```http
GET /alunos?curso=ADS
```

No Controller é utilizado:

```ts
@Query('curso')
```

No Repository:

```ts
findMany({
  where: {
    curso,
  },
});
```

---

## 24. Pesquisa por Nome

Também é possível pesquisar alunos pelo nome.

Exemplo:

```http
GET /alunos?nome=Ana
```

A pesquisa utiliza:

```text
contains
```

Exemplo:

```ts
nome: {
  contains: nome,
}
```

Isso permite retornar alunos cujo nome contenha o texto informado.

---

## 25. Paginação

A listagem de alunos também suporta paginação.

Exemplo:

```http
GET /alunos?page=1&limit=10
```

O Prisma utiliza:

```text
skip
take
```

O cálculo é:

```text
skip = (page - 1) × limit
```

Exemplo:

```text
page = 3
limit = 10

skip = 20
```

No Repository:

```ts
findMany({
  skip,
  take: limit,
});
```

---

## 26. Endpoints de Alunos

| Método | Endpoint | Descrição |
| ------ | -------- | --------- |
| GET | `/alunos` | Lista alunos |
| GET | `/alunos/:id` | Busca aluno por ID |
| POST | `/alunos` | Cadastra aluno |
| PUT | `/alunos/:id` | Atualiza aluno |
| PATCH | `/alunos/:id` | Atualiza parcialmente |
| DELETE | `/alunos/:id` | Exclui aluno |

Também podem ser utilizados:

```text
GET /alunos?curso=ADS
GET /alunos?nome=Ana
GET /alunos?page=1&limit=10
```

Os filtros podem ser utilizados na listagem.

---

## 27. DTOs e Validação

A aplicação mantém os DTOs criados anteriormente.

### CreateAlunoDto

Valida:

```text
nome
email
curso
```

Exemplo:

```ts
export class CreateAlunoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(150)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  curso: string;
}
```

---

## 28. ValidationPipe

A validação global continua configurada no `main.ts`:

```ts
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
);
```

Dessa forma, os dados são validados antes de chegar aos Controllers.

---

## 29. PATCH e PartialType

A atualização parcial continua disponível através de:

```http
PATCH /alunos/:id
```

Exemplo:

```json
{
  "curso": "Engenharia de Software"
}
```

O DTO utiliza:

```text
PartialType
```

permitindo que os campos sejam opcionais durante a atualização parcial.

---

## 30. Tratamento de Erros

O projeto mantém:

```text
NotFoundException
```

para registros inexistentes.

Exemplo:

```http
GET /alunos/999
```

Resposta:

```http
404 Not Found
```

IDs inválidos continuam sendo tratados por:

```text
ParseIntPipe
```

Exemplo:

```http
GET /alunos/abc
```

Resposta:

```http
400 Bad Request
```

---

## 31. Códigos HTTP

A API utiliza códigos adequados como:

```text
200 OK
201 Created
204 No Content
400 Bad Request
404 Not Found
```

O `DELETE` utiliza:

```ts
@HttpCode(HttpStatus.NO_CONTENT)
```

resultando em:

```http
204 No Content
```

---

## 32. Recurso Disciplinas com Prisma

O recurso de disciplinas também foi adaptado para utilizar Prisma.

Fluxo:

```text
DisciplinasController
        ↓
DisciplinasService
        ↓
DisciplinasRepository
        ↓
PrismaService
        ↓
Prisma Client
        ↓
MySQL
```

O Repository utiliza:

```text
findMany()
findUnique()
create()
update()
delete()
```

---

## 33. Endpoints de Disciplinas

| Método | Endpoint | Descrição |
| ------ | -------- | --------- |
| GET | `/disciplinas` | Lista disciplinas |
| GET | `/disciplinas/:id` | Busca disciplina por ID |
| POST | `/disciplinas` | Cadastra disciplina |
| PUT | `/disciplinas/:id` | Atualiza disciplina |
| DELETE | `/disciplinas/:id` | Exclui disciplina |

---

## 34. Modelo de Disciplina

No Prisma:

```prisma
model Disciplina {
  id           Int    @id @default(autoincrement())
  nome         String @db.VarChar(100)
  cargaHoraria Int    @map("carga_horaria")

  @@map("disciplinas")
}
```

No MySQL:

```text
disciplinas
├── id
├── nome
└── carga_horaria
```

No TypeScript:

```text
Disciplina
├── id
├── nome
└── cargaHoraria
```

---

## 35. Baseline

Como o banco de dados já existia antes da introdução do Prisma, foi utilizada uma **baseline**.

A baseline informa ao Prisma que a estrutura atual do banco já existe e deve ser considerada o ponto inicial do histórico de migrations.

Fluxo:

```text
Banco existente
      ↓
Baseline
      ↓
Prisma passa a controlar
mudanças futuras
```

---

## 36. Criando a Baseline

Foi criada a pasta:

```text
prisma/migrations/0_init/
```

O SQL correspondente ao schema foi gerado com:

```bash
npx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
```

Estrutura:

```text
prisma/
└── migrations/
    └── 0_init/
        └── migration.sql
```

---

## 37. Registrando a Baseline

Como as tabelas já existiam, a migration inicial não deveria ser executada novamente.

Foi utilizada:

```bash
npx prisma migrate resolve --applied 0_init
```

Isso registra:

```text
0_init
   ↓
estrutura já existente
   ↓
migration considerada aplicada
```

---

## 38. Introspection × Migration

São operações diferentes.

### Introspection

```bash
npx prisma db pull
```

Fluxo:

```text
Banco
   ↓
schema.prisma
```

É utilizada para descobrir uma estrutura que já existe no banco.

### Migration

```bash
npx prisma migrate dev --name nome_da_migration
```

Fluxo:

```text
schema.prisma
      ↓
migration
      ↓
MySQL
```

É utilizada para criar e versionar alterações futuras.

---

## 39. Prisma Generate

O comando:

```bash
npx prisma generate
```

faz:

```text
schema.prisma
      ↓
Prisma Client
```

Deve ser utilizado sempre que alterações relevantes forem feitas no schema.

---

## 40. Prisma Studio

O Prisma fornece uma interface visual para visualizar e editar dados.

Execute:

```bash
npx prisma studio
```

O Prisma Studio pode ser utilizado para:

- visualizar registros;
- inserir dados;
- editar dados;
- conferir alterações;
- visualizar models;
- auxiliar durante o desenvolvimento.

---

## 41. Principais Comandos Prisma

### Inicializar Prisma

```bash
npx prisma init --datasource-provider mysql --output ../src/generated/prisma
```

### Introspecção

```bash
npx prisma db pull
```

### Gerar Prisma Client

```bash
npx prisma generate
```

### Prisma Studio

```bash
npx prisma studio
```

### Criar migration

```bash
npx prisma migrate dev --name nome_da_migration
```

### Consultar migrations

```bash
npx prisma migrate status
```

### Registrar baseline

```bash
npx prisma migrate resolve --applied 0_init
```

---

## 42. db pull, generate e migrate

É importante diferenciar:

```text
db pull
Banco → Prisma Schema
```

```text
generate
Prisma Schema → Prisma Client
```

```text
migrate
Prisma Schema → Banco
```

Visualmente:

```text
                  db pull
MySQL ─────────────────────────→ schema.prisma

schema.prisma ─────────────────→ Prisma Client
                  generate

schema.prisma ─────────────────→ MySQL
                  migrate
```

---

## 43. Recurso Professores

O recurso de professores permanece utilizando dados em memória:

```text
ProfessoresController
        ↓
ProfessoresService
        ↓
Dados em memória
```

Endpoints:

| Método | Endpoint | Descrição |
| ------ | -------- | --------- |
| GET | `/professores` | Lista professores |
| GET | `/professores/:id` | Busca professor |
| POST | `/professores` | Cadastra professor |
| PUT | `/professores/:id` | Atualiza professor |
| DELETE | `/professores/:id` | Exclui professor |

---

## 44. Benefícios da Separação em Camadas

Uma das principais vantagens observadas durante a migração foi a separação de responsabilidades.

O Controller não precisava conhecer:

```text
mysql2
Prisma
SQL
```

O Service também não precisava conhecer a tecnologia de persistência.

Ele continuou dependendo de:

```text
Repository
```

Assim, foi possível trocar:

```text
SQL manual + mysql2
```

por:

```text
Prisma ORM
```

sem reescrever toda a aplicação.

---

## 45. Benefícios do Prisma

O Prisma fornece integração forte com TypeScript.

Entre os benefícios:

- autocomplete;
- verificação de tipos;
- models tipados;
- validação de campos durante o desenvolvimento;
- redução de SQL manual;
- migrations;
- introspecção;
- Prisma Studio;
- melhor organização da camada de persistência.

Exemplo:

```ts
this.prisma.aluno.create({
  data: {
    nome: 'Ana',
    email: 'ana@email.com',
    curso: 'ADS',
  },
});
```

O Prisma conhece os campos válidos do model `Aluno`.

---

## 46. Boas Práticas Aplicadas

Nesta etapa foram aplicadas práticas como:

- utilização de ORM;
- Repository Pattern;
- injeção de dependência;
- PrismaService compartilhado;
- uma única instância do Prisma Client;
- separação entre regras e persistência;
- variáveis de ambiente;
- não versionamento do `.env`;
- validação através de DTOs;
- tratamento de erros;
- códigos HTTP adequados;
- paginação;
- filtros;
- pesquisa parcial;
- introspecção;
- migrations;
- baseline;
- mapeamento entre models e tabelas existentes.

---

## 47. Fluxo Completo

Para uma requisição como:

```http
POST /alunos
```

o fluxo é:

```text
Cliente
   ↓
ValidationPipe
   ↓
CreateAlunoDto
   ↓
AlunosController
   ↓
AlunosService
   ↓
AlunosRepository
   ↓
PrismaService
   ↓
Prisma Client
   ↓
Driver Adapter
   ↓
MySQL
```

A resposta percorre o caminho inverso até chegar ao cliente.

---

## 48. Verificação do Projeto

Após a migração para Prisma ORM, foi executado:

```bash
npx prisma generate
```

E também:

```bash
npm run build
```

O projeto compilou corretamente, sem erros.

As principais rotas continuam disponíveis:

```text
GET     /alunos
GET     /alunos/:id
POST    /alunos
PUT     /alunos/:id
PATCH   /alunos/:id
DELETE  /alunos/:id

GET     /disciplinas
GET     /disciplinas/:id
POST    /disciplinas
PUT     /disciplinas/:id
DELETE  /disciplinas/:id
```

Também foram adicionadas consultas como:

```text
GET /alunos?curso=ADS
GET /alunos?nome=Ana
GET /alunos?page=1&limit=10
```

---

## 49. Evolução da Arquitetura

### Primeira etapa

```text
Controller
    ↓
Service
    ↓
Memória
```

### Persistência com MySQL

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
DatabaseService
    ↓
mysql2
    ↓
MySQL
```

### Validação

```text
ValidationPipe
    ↓
DTO
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

### Prisma ORM

```text
ValidationPipe
    ↓
DTO
    ↓
Controller
    ↓
Service
    ↓
Repository
    ↓
PrismaService
    ↓
Prisma Client
    ↓
Driver Adapter
    ↓
MySQL
```

---

## 50. Recursos Implementados Nesta Etapa

Nesta branch foram implementados:

- Prisma ORM 7;
- Prisma Client;
- Prisma CLI;
- `@prisma/client`;
- `@prisma/adapter-mariadb`;
- `dotenv`;
- ESM;
- `schema.prisma`;
- `prisma.config.ts`;
- `PrismaService`;
- `PrismaModule`;
- Prisma Client gerado;
- `prisma db pull`;
- introspecção;
- `prisma generate`;
- models Prisma;
- `@@map()`;
- `@map()`;
- migração de `AlunosRepository` para Prisma;
- migração de `DisciplinasRepository` para Prisma;
- remoção de `DatabaseModule`;
- remoção de `DatabaseService`;
- remoção do `mysql2`;
- `findMany()`;
- `findUnique()`;
- `create()`;
- `update()`;
- `delete()`;
- filtro por curso;
- pesquisa por nome com `contains`;
- paginação com `skip` e `take`;
- baseline;
- migrations;
- Prisma Studio;
- encerramento através de `$disconnect()`;
- manutenção de DTOs;
- manutenção de ValidationPipe;
- manutenção do tratamento de erros;
- manutenção das rotas HTTP existentes.

---

## 51. Versionamento e Organização das Branches

O projeto utiliza branches para separar as atividades desenvolvidas durante as aulas.

A atividade desta etapa foi desenvolvida na branch:

```text
branch_20260929_prisma
```

Ela representa a última evolução desta sequência:

```text
branch_20260922
        ↓
branch_20260925_extra
        ↓
branch_20260929
        ↓
branch_20260929_prisma
```

### `branch_20260922`

Implementação inicial:

```text
Controller
Service
Dados em memória
```

### `branch_20260925_extra`

Adição de:

```text
MySQL
Repository
DatabaseService
Pool
Campo email
```

### `branch_20260929`

Adição de:

```text
DTOs
ValidationPipe
class-validator
class-transformer
NotFoundException
PATCH
PartialType
CRUD de disciplinas
```

### `branch_20260929_prisma`

Migração da persistência:

```text
mysql2 + SQL manual
        ↓
Prisma ORM
```

Com:

```text
PrismaService
PrismaModule
Prisma Client
Driver Adapter
schema.prisma
db pull
generate
migrations
baseline
Prisma Studio
filtros
pesquisa
paginação
```

O desenvolvimento utiliza **Git** para controle de versão e **GitHub** como repositório remoto.

---

## 52. Autor

**Nome:** Matheus Ribeiro Saraiva  
**Unidade Curricular:** Programação Web 2  
**Instituição:** Senac RJ

GitHub:

https://github.com/matheus-ribeiro021

---

## 53. Licença e Uso Acadêmico

Projeto desenvolvido para fins acadêmicos na Unidade Curricular de **Programação Web 2 — Senac RJ**.

O código poderá ser utilizado para avaliação e acompanhamento acadêmico durante o curso.