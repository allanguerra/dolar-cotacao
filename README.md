# DolarCotacao

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Subir a aplicação

Para subir a aplicação utilizar o comando:
```bash
npm start
```
Navegue para `http://localhost:4200` para visualizar a aplicação.

## Seções e Artigos

Para adicionar Seções e Artigos a aplicação, editar o arquivo em:
`assets/counteudo/conteudo.json`

Para definir uma nova seção, utilizar a estrutura a seguir:
```json
{
  "titulo": "titulo da seção",
  "descricao": "descrição da seção",
  "artigos": [
    { ... }
  ]
}
```

Para adicionar Artigos em alguma Seção, utilizar a estrutura: 
```json
{
  "titulo": "titúlo do artigo",
  "descricao": "breve descrição sobre o artigo",
  "imagem": "caminho para uma imagem banner para o artigo",
  "artigo": "texto completo sobre o artigo",
  "link": "link da rota para o componente com o artigo completo"
}
```
