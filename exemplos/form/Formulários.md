<!--

# Formulários :paintbrush:

Para que serve?
 - Capturar dados de entrada ( input )
 - Interação
 - Controle

Pré requisitos
 - Básicos HTML

# Dominar



 - Estilização
 - Validação
 - Controle customizados
 - Javascript

-->

<!--
    <form>
    - Elemento que definirá uum formulário
    - É um container estilo <section> <footer>
    
    Atributos básicos
    - action
    - method

-->

# Fieldset

- Argumentos de campos
- Mesmo propósito
- Semântico
- Acessibilidade

# Atributos especiais

- Disabled
  - Desabilita todos os elementos internos
  - não serão enviados ao submeter o formulário
- Form
  - O id de um formulário ao qual esse fieldset pertence
  - Não precisa estar dentro do formulário
- Name
  - Nome do grupo
- Legend
  - Nome do agrupamento
  - Primeiro elemento dentro do fieldset

# Label

- Associar e identificar uma (ou mais) tag de entrada de dados
- Acessibilidade
- Você poderá clicar para mudar o foco da entrada de dados

# Atributos

- For
  - Para fazer a conexão entre este label e a tag de entrada de dados
  - É feita via ID do input
  - Só funciona com elementos específicos 
    - button, input (not hidden), meter, output, progress, select, textarea

# button :record_button:

- Representa um botão
- Usado para enviar formulários e outras ações
- É estilizado pelo user agent

# Atributos comuns

- Type
  - submit
  - reset
  - button
- autofocus
- disabled
- name
- value
- form

# Datalist :bookmark_tabs:

- Lista de valores como sugestão a uma tag <input>
- Valores sugestivos e não obrigatórios
- Usuários poderão selecionar um dos valores, diferente da sugestão

 <datalist id="fruitdata">
     <option>Apple</option>
     <option>Banana</option>
     <option>Mango</option>
     <option>Orange</option>
     <option>Cherry</option>
 </datalist>

# List

- Recebe como valor o id de um <datalist> residente no mesmo documento

# Input 

<input> Atributos comuns

- autocomplete
- autofocus
- disabled
- readonly
- value
- form
- name
- required

# Desenhar Formulários :art:

- Pensar nos requisitos
- Ajudar a definir as necessidades

## Dicas :bulb:

- Simples e focado
- Somente dados necessários
- Verifique o que te agrada

# Formulário de contato

1 - O formulário deverá conter um título de nome Contato. Usar fieldset e legend para essa finalidade

2 - O formulário conterá 3 campos

- nome (input texto)
- email (input email)
- mensagem (textarea)

3 - O formulário deverá conter um botão para enviar os dados

## Atenção :warning:

O formulário deverá conter regras de acessibilidade, como label para cada campo e autofocus. :heavy_check_mark:

# Passoword :closed_lock_with_key:

<input type="password">

- Colocar uma senha de maneira segura
- Esconde o que esta sendo digitado no campo
- O estilo da apresentação do campo, depender do User Agent

## Atributos

- minlength / maxlength
  - O número mínimo e/ou  máximo de caracteres para este campo
- size
  - O número aceitável de caracteres que esse campo deverá conter
- pattern
  - Expressão regular para validar o que está sendo digitado
  - Altamente recomendado o uso de um padrão de segurança alta de senhas
  - Exemplos :key:
    - Queremos que a senha contenha caracteres hexadecimais com limite de no mínimo 4 e no máximo 8 caracteres
      - pattern=“[0-9a-fA-F]{4, 8}”



