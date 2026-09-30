# API Alunos e Professores — NestJS

API RESTful desenvolvida durante a Unidade Curricular de **Programação Web 2 — Senac RJ**, utilizando **NestJS** e **TypeScript** para gerenciamento de alunos e professores.

---

## 1. Descrição

Este projeto consiste em uma API RESTful desenvolvida com NestJS para gerenciamento de alunos e professores.

A aplicação permite realizar operações de:

- cadastro;
- consulta;
- atualização;
- exclusão.

Nesta etapa do projeto, os dados são armazenados temporariamente **em memória**, sem utilização de banco de dados.

Cada aluno possui os seguintes dados:

- `id`
- `nome`
- `curso`

Cada professor possui:

- `id`
- `nome`
- `disciplina`

A aplicação foi organizada utilizando a estrutura:

```text
Controller
    ↓
Service
    ↓
Dados em memória
```

---

## 2. Funcionalidades

A API possui as seguintes funcionalidades:

### Alunos

- Cadastro de alunos;
- Listagem de alunos;
- Consulta de aluno por ID;
- Atualização de alunos;
- Exclusão de alunos.

### Professores

- Cadastro de professores;
- Listagem de professores;
- Consulta de professor por ID;
- Atualização de professores;
- Exclusão de professores.

Nesta etapa, os dados são armazenados em arrays dentro dos Services.

---

## 3. Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- npm
- Git
- GitHub

---

## 4. Arquitetura e Organização do Projeto

A aplicação utiliza uma organização baseada na arquitetura do NestJS:

```text
Cliente
    ↓
Controller
    ↓
Service
    ↓
Dados em memória
```

### Responsabilidades

**Controller** — recebe e trata as requisições HTTP.

**Service** — contém as operações e regras relacionadas aos dados da aplicação.

**Module** — agrupa e registra Controllers e Services relacionados a determinado recurso.

**Dados em memória** — armazenamento temporário utilizado nesta etapa do projeto.

### Estrutura principal

```text
src/
├── app.module.ts
├── main.ts
│
├── alunos/
│   ├── alunos.module.ts
│   ├── alunos.controller.ts
│   └── alunos.service.ts
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
- Git.

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

## 7. Execução do Projeto

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

## 8. Recurso Alunos

O recurso de alunos foi implementado através de:

```text
AlunosModule
      ↓
AlunosController
      ↓
AlunosService
      ↓
Dados em memória
```

O `AlunosModule` é responsável por registrar:

```text
AlunosController
AlunosService
```

O `AlunosController` recebe as requisições relacionadas à rota:

```text
/alunos
```

O `AlunosService` realiza as operações sobre os dados armazenados em memória.

---

## 9. Endpoints de Alunos

| Método | Endpoint | Descrição |
| ------ | -------- | --------- |
| GET | `/alunos` | Lista todos os alunos |
| GET | `/alunos/:id` | Busca um aluno pelo ID |
| POST | `/alunos` | Cadastra um novo aluno |
| PUT | `/alunos/:id` | Atualiza um aluno |
| DELETE | `/alunos/:id` | Exclui um aluno |

---

## 10. Exemplos de Requisição — Alunos

### Criar aluno

```http
POST /alunos
Content-Type: application/json
```

```json
{
  "nome": "Maria",
  "curso": "Engenharia de Software"
}
```

Exemplo de resposta:

```json
{
  "id": 3,
  "nome": "Maria",
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
  "nome": "Ana Silva",
  "curso": "Sistemas de Informação"
}
```

---

## 11. Recurso Professores

O recurso de professores foi desenvolvido seguindo a mesma organização utilizada no recurso de alunos:

```text
ProfessoresModule
        ↓
ProfessoresController
        ↓
ProfessoresService
        ↓
Dados em memória
```

O `ProfessoresModule` é responsável por registrar:

```text
ProfessoresController
ProfessoresService
```

O `ProfessoresController` recebe as requisições relacionadas à rota:

```text
/professores
```

O `ProfessoresService` realiza as operações sobre os professores armazenados em memória.

---

## 12. Endpoints de Professores

| Método | Endpoint | Descrição |
| ------ | -------- | --------- |
| GET | `/professores` | Lista todos os professores |
| GET | `/professores/:id` | Busca um professor pelo ID |
| POST | `/professores` | Cadastra um novo professor |
| PUT | `/professores/:id` | Atualiza um professor |
| DELETE | `/professores/:id` | Exclui um professor |

---

## 13. Exemplos de Requisição — Professores

### Criar professor

```http
POST /professores
Content-Type: application/json
```

```json
{
  "nome": "João",
  "disciplina": "Banco de Dados"
}
```

Exemplo de resposta:

```json
{
  "id": 3,
  "nome": "João",
  "disciplina": "Banco de Dados"
}
```

### Atualizar professor

```http
PUT /professores/1
Content-Type: application/json
```

```json
{
  "nome": "Bruno Silva",
  "disciplina": "Programação Web"
}
```

---

## 14. Dados em Memória

Nesta etapa, a aplicação ainda não utiliza banco de dados.

Os dados são armazenados diretamente nos Services através de arrays.

### Alunos

```text
AlunosService
     ↓
Array de alunos
```

Exemplo:

```ts
private alunos = [
  {
    id: 1,
    nome: 'Ana',
    curso: 'Sistemas de Informação',
  },
  {
    id: 2,
    nome: 'Carlos',
    curso: 'Ciência da Computação',
  },
];
```

### Professores

```text
ProfessoresService
     ↓
Array de professores
```

Exemplo:

```ts
private professores = [
  {
    id: 1,
    nome: 'Bruno',
    disciplina: 'Programação Web',
  },
  {
    id: 2,
    nome: 'Filipe',
    disciplina: 'Gestão e Governança de TI',
  },
];
```

Como os dados são mantidos somente em memória, alterações realizadas durante a execução são perdidas quando a aplicação é reiniciada.

---

## 15. Injeção de Dependência

O NestJS é responsável pela criação e injeção das dependências utilizadas pela aplicação.

No recurso de alunos:

```text
AlunosController
      ↓
AlunosService
```

No recurso de professores:

```text
ProfessoresController
      ↓
ProfessoresService
```

Os Services são injetados nos Controllers através do construtor.

Exemplo:

```ts
constructor(
  private readonly alunosService: AlunosService,
) {}
```

Dessa forma, o Controller não precisa criar manualmente uma instância do Service.

---

## 16. Decorators Utilizados

Durante o desenvolvimento foram utilizados decorators do NestJS como:

```text
@Module()
@Controller()
@Injectable()
@Get()
@Post()
@Put()
@Delete()
@Body()
@Param()
```

Também foi utilizado:

```text
ParseIntPipe
```

para transformar parâmetros de rota em números.

Exemplo:

```ts
@Param('id', ParseIntPipe) id: number
```

---

## 17. Modelo de Dados

### Aluno

```text
Aluno
├── id: number
├── nome: string
└── curso: string
```

Representação:

```ts
{
  id: number;
  nome: string;
  curso: string;
}
```

### Professor

```text
Professor
├── id: number
├── nome: string
└── disciplina: string
```

Representação:

```ts
{
  id: number;
  nome: string;
  disciplina: string;
}
```

---

## 18. Verificação do Projeto

Após a implementação dos recursos de alunos e professores, foi realizada a compilação do projeto através do comando:

```bash
npm run build
```

O projeto compilou corretamente, sem erros.

As operações implementadas foram:

```text
GET
POST
PUT
DELETE
```

para os recursos:

```text
/alunos
/professores
```

---

## 19. Versionamento e Organização das Branches

O projeto utiliza branches para separar as atividades desenvolvidas durante as aulas.

A atividade desta etapa foi desenvolvida na branch:

```text
branch_20260922
```

Nesta etapa foram implementados:

- estrutura inicial com NestJS;
- utilização de módulos;
- utilização de Controllers;
- utilização de Services;
- injeção de dependência;
- armazenamento temporário em memória;
- CRUD de alunos;
- CRUD de professores;
- utilização de parâmetros de rota;
- utilização do `ParseIntPipe`;
- organização da aplicação por recursos.

O desenvolvimento utiliza **Git** para controle de versão e **GitHub** como repositório remoto.

---

## 20. Autor

**Nome:** Matheus Ribeiro Saraiva  
**Unidade Curricular:** Programação Web 2  
**Instituição:** Senac RJ

GitHub:

https://github.com/matheus-ribeiro021

---

## 21. Licença e Uso Acadêmico

Projeto desenvolvido para fins acadêmicos na Unidade Curricular de **Programação Web 2 — Senac RJ**.

O código poderá ser utilizado para avaliação e acompanhamento acadêmico durante o curso.git add .