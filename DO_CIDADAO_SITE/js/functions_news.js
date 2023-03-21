
// focus na busca

window.onload = function() {
  var input = document.getElementById("busca_principal").focus();
}



// Botão de PEsquisa Avançada
$(function () {

  $('#PesAvanc').click(function () {
    $(this).toggleClass("alt")
    $('#BoxPesqAvanc').toggle();
  });

});


// Scroll com header fixo
$(window).on('scroll', function(event) {
  if ($(window).scrollTop() > 80) {
    $('#header_menu').css({"position":"fixed","top":"0"});
    $('.conteudo').css({"margin-top":"110px"});
    
  } else {
      $('#header_menu').css({"position" : "relative"});
      $('.conteudo').css({"margin-top":"10px"});
  }
});


// Selecionando Caderno Executivo


$('input[name="caderno"]').on('click', function() {
  // $('html, body').animate({scrollTop:$('#result_edicao').position().top});
	if($('#CLes, #CExe').is(':checked')) {
    $('#area_secao').slideDown();
	} else {
    $('#area_secao').hide();
	}

  if($('#CExe').is(':checked')) {
    $('#b01').fadeIn();
	} else {
    $('#b01').hide();
	}

  if($('#CLes').is(':checked')) {
    $('#b02').fadeIn();
	} else {
    $('#b02').hide();
	}
});

$('input[name="caderno"]').on('click', function() {
  $('#c01, #c02, #c03').hide();
	if($('#CMun').is(':checked')) {
    $('#b03').fadeIn();
	} else {
    $('#b03').hide();
	}
});

$('input[name="caderno"]').on('click', function() {
  $('#c01, #c02, #c03').hide();
	if($('#CEmp').is(':checked')) {
    $('#b04').fadeIn();
	} else {
    $('#b04').hide();
	}
});

// Selecionando Seção

$('input[name="secao"]').on('click', function() {
	if($('#AN').is(':checked')) {
    $('#c01').fadeIn();
	} else {
    $('#c01').hide();
	}
});

$('input[name="secao"]').on('click', function() {
	if($('#AP').is(':checked')) {
    $('#c02').fadeIn();
	} else {
    $('#c02').hide();
	}
});

$('input[name="secao"]').on('click', function() {
	if($('#NP').is(':checked')) {
    $('#c03').fadeIn();
	} else {
    $('#c03').hide();
	}
});




// Espandir e Retaria Lista de Resultados

$('#abre_fecha_tudo').on('click', function() {
	if($('#abre_fecha_tudo').is(':checked')) {
    $('.treeview input').prop('checked',true);
	} else {
    $('.treeview input').prop('checked',false);
	}
});


//  ------------Links de Acesso para exclusão ....>>>

$('#buscar, #go_resultado').click(function() {
  window.location = "Resultado_busca.html";
});

$('.resultBox, .materia').click(function() {
  window.location = "public.html";
});




$('.img_fundo').hide();

// TESTE DE IMAGEM BANNER CARROSSEL
$(function () {

  $('#box_teste').click(function () {
    $('.swiper .img_fundo').toggle();
  });

});