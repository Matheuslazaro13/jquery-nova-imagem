$(document).ready(function(){
    $('header button').click(function (){
        $("form").slideDown()
    })

    $("#botao-cancelar").click(function(){
        $("form").slideUp()
    })

    $("form").on("submit", function(e){
        e.preventDefault()
        const enderecoNovaImagem = $('#nova-imagem').val()
        const novoItem = $(`<li style = 'display: none'></li>`)
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem)
        $(`<div>
           <a href=${enderecoNovaImagem} target ="_blank" title =  "ver imagem em tamanho real"
           </a>
           </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo("ul")
        $(novoItem).fadeIn(1000)
        $('#nova-imagem').val('')
    })
})