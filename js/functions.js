// $('#video, .dashboard, .desktop, #xp_02, #webdesigner, #Ilustrador, #designerintruct').hide();
$('#video, .dashboard, .impressao, #xp_02, #webdesigner, #Ilustrador, #designerintruct').hide();

$(document).ready(function () {

  X = 0;

  $(".toggle").click(function (event) {
    $(".toggle").hide();
    $(".dashboard, .impressao").fadeOut();
    $(".menuToggle").removeClass('active');
    $("input[name='tela']").prop("checked", false);
    $(".navigation").addClass('active');
    $(".layout_group").fadeOut();
    setTimeout(function () {
      $(".desktop").fadeIn(1000);
    }, 500);


    X = X + 1;
    var resto = X % 2;
    if (resto == 0) {
      $(".navigation span").css({ "background": "#00ced1" });
      $(".navigation ul li").removeClass("hover1");
      $(".navigation ul li").addClass("hover2");
      $(".open h1 span").css("color", "#00ced1");
    }
    else {
      $(".navigation span").css({ "background": "crimson" });
      $(".navigation ul li").removeClass("hover2");
      $(".navigation ul li").addClass("hover1");
      $(".open h1 span").css("color", "crimson");
    }
  });

  $(".toggle_recolhe, .navigation ul li a").click(function (event) {
    $(".toggle").show();
    $(".navigation").removeClass('active');
    $(".layout_group").fadeIn();
  });

  // Menuzinho  Modelo ------------


  $(".menuToggle").click(function () {
    $(this).toggleClass('active');
    $("input[name='tela']").prop("checked", false);
    $(".dashboard, .impressao").fadeOut(1000);
    setTimeout(function () {
      $(".desktop").fadeIn(1000);
    }, 1500);


  });

  // PLAY VÍDEO ------------

  $("#play").click(function () {
    $("#texto").slideUp(1000);
    setTimeout(function () {
      $("#video").slideDown(1000);
    }, 1200);

  });

  $("#stop").click(function () {
    $("#video").slideUp(1000);
    setTimeout(function () {
      $("#texto").slideDown(1000);
    }, 1200);

  });

  // Exibir dashboard 

  $("#sistem_view").click(function () {
    $(".desktop, .impressao").fadeOut(1000);
    setTimeout(function () {
      $(".dashboard, .principal").fadeIn(1000);
    }, 1500);

  });

    // Exibir mobile

    // $("#mobile_view").click(function () {
    //   $(".impressao, .dashboard, .principal").fadeOut(1000);
    //   setTimeout(function () {
    //     $(".desktop").fadeIn(1000);

    //   }, 1500);
    // });


  // Exibir Modelo de Impressão

  $("#print_view").click(function () {
    $(".desktop, .dashboard, .principal").fadeOut(1000);
    setTimeout(function () {
      $(".impressao").fadeIn(1000);
    }, 1500);

  });


  // menu dashboard ........

  $("#btn01").click(function () {
    $(".telas").fadeOut(1000);
    $(".link_menu").removeClass("ativo");
    $(this).addClass("ativo");
    setTimeout(function () {
      $("#principal").fadeIn(1000);
    }, 500);
  });

  $("#btn02").click(function () {
    $(".telas").fadeOut(1000);
    $(".link_menu").removeClass("ativo");
    $(this).addClass("ativo");
    setTimeout(function () {
      $("#webdesigner").fadeIn(1000);
    }, 500);
  });

  $("#btn03").click(function () {
    $(".telas").fadeOut(1000);
    $(".link_menu").removeClass("ativo");
    $(this).addClass("ativo");
    setTimeout(function () {
      $("#Ilustrador").fadeIn(1000);
    }, 500);
  });

  $("#btn04").click(function () {
    $(".telas").fadeOut(1000);
    $(".link_menu").removeClass("ativo");
    $(this).addClass("ativo");
    setTimeout(function () {
      $("#designerintruct").fadeIn(1000);
    }, 500);
  });





  //  Mudar Timeline---------------------

  $("#xp").change(function () {
    if ($('#xp').is(':checked')) {
      $("#xp_01").slideUp(1000);
      setTimeout(function () {
        $("#xp_02").slideDown(1000);
      }, 1000);
    }else{
      $("#xp_02").slideUp(1000);
      setTimeout(function () {
        $("#xp_01").slideDown(1000);
      }, 1000);
    }

  });

});


