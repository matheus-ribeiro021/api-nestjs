# API Alunos, Professores e Disciplinas — NestJS, Validação e MySQL

API RESTful desenvolvida durante a Unidade Curricular de **Programação Web 2 — Senac RJ**, utilizando **NestJS**, **TypeScript** e **MySQL** para gerenciamento de alunos, professores e disciplinas.

---

## 1. Descrição

Este projeto consiste em uma API RESTful desenvolvida com NestJS.

A aplicação evoluiu ao longo das atividades da disciplina, passando por diferentes etapas de arquitetura e organização.

Inicialmente, os dados eram armazenados em memória.

Posteriormente, o recurso de alunos passou a utilizar persistência real com MySQL.

Nesta etapa, foram adicionados recursos de:

- DTOs;
- validação de dados;
- `ValidationPipe`;
- `class-validator`;
- `class-transformer`;
- tratamento de erros;
- códigos HTTP adequados;
- validação de e-mail;
- atualização parcial com `PATCH`;
- `PartialType`;
- novo CRUD de disciplinas.

A arquitetura principal passou a ser:

```text
Request
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
DatabaseService
   ↓
MySQL
```

---

## 2. Funcionalidades

### Alunos

A API permite:

- Cadastro de alunos;
- Listagem de alunos;
- Consulta de aluno por ID;
- Atualização completa de alunos;
- Atualização parcial de alunos;
- Exclusão de alunos;
- Persistência em MySQL;
- Validação do nome;
- Validação do e-mail;
- Validação do curso;
- Tratamento de alunos inexistentes;
- Retorno de códigos HTTP adequados.

### Disciplinas

A API permite:

- Cadastro de disciplinas;
- Listagem de disciplinas;
- Consulta de disciplina por ID;
- Atualização de disciplinas;
- Exclusão de disciplinas;
- Persistência em MySQL;
- Validação do nome;
- Validação da carga horária;
- Tratamento de disciplinas inexistentes.

### Professores

O recurso de professores continua permitindo:

- Cadastro de professores;
- Listagem de professores;
- Consulta por ID;
- Atualização;
- Exclusão.

Nesta etapa, o recurso de professores continua utilizando dados armazenados em memória.

---

## 3. Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- MySQL
- mysql2
- @nestjs/config
- @nestjs/mapped-types
- class-validator
- class-transformer
- npm
- Git
- GitHub

---

## 4. Arquitetura e Organização do Projeto

A aplicação utiliza separação de responsabilidades em diferentes camadas:

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
DatabaseService
   ↓
MySQL
```

### Responsabilidades

**ValidationPipe** — executa a validação dos dados recebidos pela aplicação.

**DTO** — define o formato e as regras de validação dos dados recebidos.

**Controller** — recebe e trata as requisições HTTP.

**Service** — coordena as regras e operações da aplicação.

**Repository** — concentra o acesso aos dados e as instruções SQL.

**DatabaseService** — gerencia o pool de conexões com o MySQL.

**DatabaseModule** — disponibiliza o `DatabaseService` para outros módulos.

**MySQL** — realiza a persistência dos dados.

---

## 5. Estrutura Principal

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
│   ├── dto/
│   │   ├── create-aluno.dto.ts
│   │   ├── update-aluno.dto.ts
│   │   └── patch-aluno.dto.ts
│   │
│   ├── alunos.module.ts
│   ├── alunos.controller.ts
│   ├── alunos.service.ts
│   └── alunos.repository.ts
│
├── disciplinas/
│   ├── dto/
│   │   ├── create-disciplina.dto.ts
│   │   └── update-disciplina.dto.ts
│   │
│   ├── disciplinas.module.ts
│   ├── disciplinas.controller.ts
│   ├── disciplinas.service.ts
│   └── disciplinas.repository.ts
│
└── professores/
    ├── professores.module.ts
    ├── professores.controller.ts
    └── professores.service.ts
```

---

## 6. Pré-requisitos

Antes de executar o projeto, é necessário possuir:

- Node.js;
- npm;
- Git;
- MySQL.

---

## 7. Instalação

### 7.1 Clone o repositório

```bash
git clone https://github.com/matheus-ribeiro021/api-nestjs.git
```

### 7.2 Acesse a pasta do projeto

```bash
cd api-nestjs
```

### 7.3 Instale as dependências

```bash
npm install
```

---

## 8. Dependências de Validação

Nesta etapa foram utilizadas as bibliotecas:

```text
class-validator
class-transformer
@nestjs/mapped-types
```

Caso seja necessário instalá-las manualmente:

```bash
npm install class-validator class-transformer @nestjs/mapped-types
```

O `class-validator` fornece decorators para validação dos dados.

O `class-transformer` auxilia na transformação dos valores recebidos.

O `@nestjs/mapped-types` permite utilizar recursos como:

```text
PartialType
```

---

## 9. Configuração das Variáveis de Ambiente

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

O projeto utiliza:

```text
ConfigModule
ConfigService
```

para carregar e acessar as configurações do ambiente.

---

## 10. Banco de Dados

Crie o banco:

```sql
CREATE DATABASE escola;
```

Selecione o banco:

```sql
USE escola;
```

### Tabela de alunos

```sql
CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    curso VARCHAR(100) NOT NULL
);
```

Caso a tabela tenha sido criada anteriormente sem o campo `email`:

```sql
ALTER TABLE alunos
ADD COLUMN email VARCHAR(150) NOT NULL;
```

### Tabela de disciplinas

```sql
CREATE TABLE disciplinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    carga_horaria INT NOT NULL
);
```

---

## 11. Execução do Projeto

### Ambiente de desenvolvimento

```bash
npm run start:dev
```

A API estará disponível normalmente em:

```text
http://localhost:3000
```

### Build

Para verificar a compilação:

```bash
npm run build
```

### Ambiente de produção

```bash
npm run start:prod
```

---

## 12. ValidationPipe

A aplicação utiliza validação global através do:

```text
ValidationPipe
```

A configuração é realizada no `main.ts`:

```ts
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
);
```

### `whitelist`

A opção:

```text
whitelist: true
```

remove propriedades que não fazem parte dos DTOs.

Por exemplo:

```json
{
  "nome": "Maria",
  "email": "maria@email.com",
  "curso": "ADS",
  "admin": true
}
```

O campo:

```text
admin
```

não pertence ao DTO de aluno e não deve prosseguir como parte dos dados validados.

### `transform`

A opção:

```text
transform: true
```

permite que o sistema de pipes realize transformações quando apropriado.

---

## 13. DTOs

DTO significa:

```text
Data Transfer Object
```

Os DTOs definem o formato dos dados que entram na aplicação.

O fluxo é:

```text
Cliente
   ↓
ValidationPipe
   ↓
DTO
   ↓
Controller
```

No recurso de alunos foram criados:

```text
CreateAlunoDto
UpdateAlunoDto
PatchAlunoDto
```

No recurso de disciplinas:

```text
CreateDisciplinaDto
UpdateDisciplinaDto
```

---

## 14. CreateAlunoDto

O DTO de criação possui regras para:

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

Dessa forma:

- `nome` precisa ser texto;
- `nome` não pode estar vazio;
- `email` precisa possuir formato válido;
- `curso` precisa ser texto;
- os campos obrigatórios não podem estar vazios.

---

## 15. UpdateAlunoDto

O `UpdateAlunoDto` é utilizado pelo:

```http
PUT /alunos/:id
```

Como o `PUT` representa uma atualização completa, os campos são obrigatórios:

```text
nome
email
curso
```

Exemplo:

```json
{
  "nome": "Matheus Ribeiro",
  "email": "matheus@email.com",
  "curso": "Análise e Desenvolvimento de Sistemas"
}
```

---

## 16. PATCH e PartialType

Também foi implementado:

```http
PATCH /alunos/:id
```

O objetivo é permitir atualizações parciais.

Exemplo:

```json
{
  "curso": "Engenharia de Software"
}
```

Para isso, foi utilizado:

```text
PartialType
```

O DTO de atualização parcial é baseado no DTO de criação:

```ts
export class PatchAlunoDto extends PartialType(
  CreateAlunoDto,
) {}
```

Isso permite reutilizar as regras de validação tornando os campos opcionais.

---

## 17. Validação de E-mail

O campo:

```text
email
```

é validado utilizando:

```ts
@IsEmail()
```

Exemplo válido:

```json
{
  "nome": "João",
  "email": "joao@email.com",
  "curso": "ADS"
}
```

Exemplo inválido:

```json
{
  "nome": "João",
  "email": "abc",
  "curso": "ADS"
}
```

O segundo exemplo deve resultar em:

```http
400 Bad Request
```

---

## 18. Recurso Alunos

O fluxo do recurso de alunos é:

```text
Request
   ↓
ValidationPipe
   ↓
DTO
   ↓
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

O `AlunosController` recebe as requisições.

O `AlunosService` coordena as regras da aplicação.

O `AlunosRepository` realiza as operações SQL.

O `DatabaseService` gerencia o pool de conexões.

---

## 19. Endpoints de Alunos

| Método | Endpoint | Descrição |
| ------ | -------- | --------- |
| GET | `/alunos` | Lista todos os alunos |
| GET | `/alunos/:id` | Busca um aluno pelo ID |
| POST | `/alunos` | Cadastra um novo aluno |
| PUT | `/alunos/:id` | Atualiza completamente um aluno |
| PATCH | `/alunos/:id` | Atualiza parcialmente um aluno |
| DELETE | `/alunos/:id` | Exclui um aluno |

---

## 20. Exemplos de Requisição — Alunos

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

### Atualização parcial

```http
PATCH /alunos/1
Content-Type: application/json
```

```json
{
  "curso": "Ciência da Computação"
}
```

---

## 21. Tratamento de Recursos Inexistentes

O `AlunosService` verifica se um aluno existe antes de determinadas operações.

Quando o aluno não é encontrado, é lançada:

```text
NotFoundException
```

Exemplo:

```http
GET /alunos/999
```

Resposta esperada:

```http
404 Not Found
```

Resposta semelhante a:

```json
{
  "statusCode": 404,
  "message": "Aluno não encontrado",
  "error": "Not Found"
}
```

A mesma lógica é aplicada antes de:

```text
PUT
PATCH
DELETE
```

---

## 22. IDs Inválidos

Os IDs das rotas utilizam:

```text
ParseIntPipe
```

Exemplo:

```ts
@Param('id', ParseIntPipe) id: number
```

Se for enviada uma rota como:

```http
GET /alunos/abc
```

o valor não pode ser convertido para número.

A aplicação retorna:

```http
400 Bad Request
```

antes mesmo de executar a regra do Service.

---

## 23. Códigos HTTP

A API utiliza códigos HTTP adequados para cada operação.

### Listagem

```http
GET /alunos
```

Sucesso:

```http
200 OK
```

### Consulta

```http
GET /alunos/1
```

Sucesso:

```http
200 OK
```

Aluno inexistente:

```http
404 Not Found
```

### Criação

```http
POST /alunos
```

Sucesso:

```http
201 Created
```

Dados inválidos:

```http
400 Bad Request
```

### Atualização

```http
PUT /alunos/1
```

Sucesso:

```http
200 OK
```

Dados inválidos:

```http
400 Bad Request
```

Aluno inexistente:

```http
404 Not Found
```

### Exclusão

```http
DELETE /alunos/1
```

Sucesso:

```http
204 No Content
```

Aluno inexistente:

```http
404 Not Found
```

---

## 24. DELETE com 204 No Content

A exclusão utiliza:

```ts
@HttpCode(HttpStatus.NO_CONTENT)
```

Isso faz uma exclusão bem-sucedida retornar:

```http
204 No Content
```

Nesse caso, a resposta não possui corpo.

---

## 25. Repository de Alunos

O `AlunosRepository` concentra as operações SQL.

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

O Repository trabalha com:

```text
SELECT
INSERT
UPDATE
DELETE
```

O campo `email` faz parte das operações de:

```text
SELECT
INSERT
UPDATE
```

As queries utilizam parâmetros:

```sql
WHERE id = ?
```

evitando concatenação direta dos dados recebidos pela API.

---

## 26. Recurso Disciplinas

Nesta etapa também foi criado um novo recurso chamado:

```text
disciplinas
```

Sua arquitetura é:

```text
Request
   ↓
ValidationPipe
   ↓
DTO
   ↓
DisciplinasController
   ↓
DisciplinasService
   ↓
DisciplinasRepository
   ↓
DatabaseService
   ↓
MySQL
```

Cada disciplina possui:

```text
id
nome
carga_horaria
```

---

## 27. Modelo de Disciplina

```text
Disciplina
├── id: number
├── nome: string
└── carga_horaria: number
```

No banco:

```text
disciplinas
├── id INT AUTO_INCREMENT PRIMARY KEY
├── nome VARCHAR(100) NOT NULL
└── carga_horaria INT NOT NULL
```

---

## 28. DTOs de Disciplinas

Foram criados:

```text
CreateDisciplinaDto
UpdateDisciplinaDto
```

O nome utiliza validações como:

```text
@IsString()
@IsNotEmpty()
@MaxLength(100)
```

A carga horária utiliza:

```text
@IsInt()
@Min(1)
```

Dessa forma, valores inválidos são rejeitados antes de chegar ao Controller.

---

## 29. Endpoints de Disciplinas

| Método | Endpoint | Descrição |
| ------ | -------- | --------- |
| GET | `/disciplinas` | Lista todas as disciplinas |
| GET | `/disciplinas/:id` | Busca uma disciplina pelo ID |
| POST | `/disciplinas` | Cadastra uma disciplina |
| PUT | `/disciplinas/:id` | Atualiza uma disciplina |
| DELETE | `/disciplinas/:id` | Exclui uma disciplina |

---

## 30. Exemplo de Disciplina

### Criar disciplina

```http
POST /disciplinas
Content-Type: application/json
```

```json
{
  "nome": "Programação Web",
  "carga_horaria": 80
}
```

### Atualizar disciplina

```http
PUT /disciplinas/1
Content-Type: application/json
```

```json
{
  "nome": "Programação Web 2",
  "carga_horaria": 100
}
```

---

## 31. NotFoundException em Disciplinas

O recurso de disciplinas também verifica a existência de um registro antes de operações como:

```text
GET por ID
PUT
DELETE
```

Caso a disciplina não exista, a API lança:

```text
NotFoundException
```

resultando em:

```http
404 Not Found
```

---

## 32. Persistência com MySQL

Os recursos persistidos utilizam:

```text
mysql2
```

O acesso ao banco é realizado através de um pool de conexões.

```text
Repository
    ↓
DatabaseService
    ↓
Connection Pool
    ↓
MySQL
```

O limite configurado para o pool é:

```text
10 conexões
```

---

## 33. DatabaseModule e DatabaseService

O `DatabaseModule` registra e exporta:

```text
DatabaseService
```

O `DatabaseService` utiliza:

```text
ConfigService
```

para carregar:

```text
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_NAME
```

O serviço também é responsável pelo gerenciamento do pool de conexões.

---

## 34. Encerramento do Pool

O `DatabaseService` implementa:

```text
OnModuleDestroy
```

A aplicação utiliza:

```ts
app.enableShutdownHooks();
```

permitindo que o NestJS execute os lifecycle hooks durante o encerramento.

O pool é finalizado utilizando:

```ts
await this.pool.end();
```

---

## 35. Modelo de Dados

### Aluno

```text
Aluno
├── id: number
├── nome: string
├── email: string
└── curso: string
```

### Disciplina

```text
Disciplina
├── id: number
├── nome: string
└── carga_horaria: number
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

## 36. Recurso Professores

O recurso de professores permanece com:

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
| GET | `/professores` | Lista todos os professores |
| GET | `/professores/:id` | Busca um professor pelo ID |
| POST | `/professores` | Cadastra um novo professor |
| PUT | `/professores/:id` | Atualiza um professor |
| DELETE | `/professores/:id` | Exclui um professor |

---

## 37. Boas Práticas Aplicadas

Nesta etapa foram aplicadas práticas como:

- utilização de DTOs;
- validação em tempo de execução;
- separação das responsabilidades;
- SQL concentrado nos Repositories;
- variáveis de ambiente;
- não versionamento do `.env`;
- queries parametrizadas;
- tratamento de recursos inexistentes;
- códigos HTTP adequados;
- injeção de dependência;
- reutilização das regras através de `PartialType`.

---

## 38. Fluxo Completo

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
DatabaseService
   ↓
MySQL
```

Cada camada possui uma responsabilidade específica.

---

## 39. Verificação do Projeto

Após a implementação dos DTOs, validações, tratamento de erros, `PATCH` e CRUD de disciplinas, foi realizada a compilação através de:

```bash
npm run build
```

O projeto compilou corretamente, sem erros.

As principais rotas disponíveis nesta etapa são:

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

---

## 40. Evolução da Arquitetura

Na primeira etapa:

```text
Controller
    ↓
Service
    ↓
Memória
```

Depois:

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

Nesta etapa:

```text
Request
   ↓
Pipes
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

A aplicação passou a validar os dados antes de executar as regras da aplicação e acessar o banco.

---

## 41. Recursos Implementados Nesta Etapa

Nesta branch foram implementados:

- DTOs;
- `CreateAlunoDto`;
- `UpdateAlunoDto`;
- `PatchAlunoDto`;
- `CreateDisciplinaDto`;
- `UpdateDisciplinaDto`;
- `class-validator`;
- `class-transformer`;
- `ValidationPipe`;
- Validação global;
- `whitelist`;
- `transform`;
- Validação de e-mail;
- `@IsEmail()`;
- `@IsString()`;
- `@IsNotEmpty()`;
- `@MaxLength()`;
- `@IsInt()`;
- `@Min()`;
- `ParseIntPipe`;
- `NotFoundException`;
- Tratamento de `400 Bad Request`;
- Tratamento de `404 Not Found`;
- Retorno de `201 Created`;
- Retorno de `204 No Content`;
- `PATCH`;
- `PartialType`;
- CRUD de disciplinas;
- Persistência de disciplinas em MySQL;
- Separação entre Controller, Service, Repository e DatabaseService.

---

## 42. Versionamento e Organização das Branches

O projeto utiliza branches para separar as atividades desenvolvidas durante as aulas.

A atividade desta etapa foi desenvolvida na branch:

```text
branch_20260929
```

Ela representa uma evolução das branches anteriores:

```text
branch_20260922
        ↓
branch_20260925_extra
        ↓
branch_20260929
```

### `branch_20260922`

Implementação inicial com:

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
Pool de conexões
Campo email
```

### `branch_20260929`

Adição de:

```text
DTOs
ValidationPipe
class-validator
class-transformer
validação de email
NotFoundException
códigos HTTP
PATCH
PartialType
CRUD de disciplinas
```

O desenvolvimento utiliza **Git** para controle de versão e **GitHub** como repositório remoto.

---

## 43. Autor

**Nome:** Matheus Ribeiro Saraiva  
**Unidade Curricular:** Programação Web 2  
**Instituição:** Senac RJ

GitHub:

https://github.com/matheus-ribeiro021

---

## 44. Licença e Uso Acadêmico

Projeto desenvolvido para fins acadêmicos na Unidade Curricular de **Programação Web 2 — Senac RJ**.

O código poderá ser utilizado para avaliação e acompanhamento acadêmico durante o curso.