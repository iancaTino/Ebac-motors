// Espera o DOM estar 100% carregado antes de executar qualquer código
$(document).ready(function () {

    // Inicia o carrossel de imagens com autoplay (usa o plugin Slick)
    $('#carousel-img').slick({
        autoplay: true
    });

    // Ao clicar no menu hambúrguer, o menu de navegação aparece ou desaparece com slide
    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle(); // toggle = alternar (mostra ou esconde)
    });

    // Máscara para o campo de telefone, no formato brasileiro
    $('#telefone').mask('(00) 00000-0000');

    // Validação do formulário usando o plugin jQuery Validate
    $('form').validate({
        rules: { // Define o que é obrigatório no formulário
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true // verifica se o formato é de email válido
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: true
            }
        },
        messages: { // Mensagens personalizadas de erro
            nome: 'Por favor, informe seu nome',
            email: 'Informe um e-mail válido',
            telefone: 'Informe seu telefone',
            mensagem: 'Digite uma mensagem',
            veiculoDeInteresse: 'Informe o veículo de interesse'
        },
        // Se o formulário estiver 100% válido, executa isso aqui
        submitHandler: function (form) {
            console.log(form); // Só printa o form no console, pode trocar por envio real depois
        },
        // Se tiver campos errados, cai aqui
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids(); // Conta os campos errados
            if (camposIncorretos) {
                alert('Existem ' + camposIncorretos + ' campos incorretos!');
            }
        }
    });

    // Quando clicar no botão "Tenho Interesse" de algum veículo
    $('.lista-veiculos button').click(function () {
        const destino = $('#contato'); // Pega a seção de contato
        const nomeVeiculo = $(this).parent().find('h3').text(); // Pega o nome do carro clicado

        $('#veiculoDeInteresse').val(nomeVeiculo); // Preenche o input do form com o nome do carro

        // Rola a página suavemente até a seção de contato
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000); // 1000ms = 1 segundo
    });
});
