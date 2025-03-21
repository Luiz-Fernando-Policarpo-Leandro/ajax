# Projeto: Sugestão automatica de Municípios com AJAX no Rails

Este projeto foi desenvolvido em Ruby on Rails e utiliza AJAX para sugerir municípios ao usuário quando um estado é selecionado no formulário de endereço.

## Tecnologias Utilizadas
- Ruby on Rails
- AJAX (javascript e jQuery rails)
- Mysql
- HTML, CSS e ERB Basicos

## Funcionalidades
- Cadastro de Endereço, Estados, cidades
- Seleção dinâmica de municípios ao escolher um estado
- Requisições AJAX para carregamento dinâmico sem necessidade de recarregar a página

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/Luiz-Fernando-Policarpo-Leandro/ajax.git
   cd ajax
   ```

2. Instale as dependências:
   ```bash
   bundle install
   ```

3. Configure o banco de dados:
   ```bash
   rails db:create
   rails db:migrate
   ```

4. Inicie o servidor:
   ```bash
   rails server
   ```

5. Acesse `http://localhost:3000` no navegador.

## Como Funciona

1. O formulário de criação de endereço contém um campo para selecionar um estado.
2. Quando um estado é escolhido, um evento dispara uma requisição AJAX.
3. O controlador Rails responde com a lista de municípios filtrados.
4. O JavaScript atualiza dinamicamente o dropdown de municípios sem recarregar a página.

## Estrutura do Código

- **Models:** `Estado`, `cidade`, `Endereco`
- **Controllers:** `EnderecosController`
- **Views:** Formulário de endereço com seleção dinâmica
- **AJAX:** Implementado com jQuery, onde a logica ajax esta no view no create do Enderecos

## javascript

``` Javascript


import "@hotwired/turbo-rails"
import "controllers"
import "jquery"

$(document).ready(function(){
    $("div.form-group.cascata select").val("#value").change(function(){
        if(this.value == ""){
        $(".form-group.cascata-cidades select").html("");
        return
    }
        $.ajax("/cidades.json?estado_id=" + this.value )
        .done(function(data){
            var htmloptions = "";
            for(var i = 0; i<data.length; i++){ htmloptions += "<option value=" + data[i].id + ">" + data[i].nome + "</option>" }
            $(".form-group.cascata-cidades select").html(htmloptions);
        })
        .fail(function(){
            alert( "error" );
        });
    });
});
```
