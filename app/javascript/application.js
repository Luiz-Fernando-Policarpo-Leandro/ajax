// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
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