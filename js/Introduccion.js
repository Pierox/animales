// JavaScript Document

/************************/	

/************************/	


$(document).ready(function(e) {
	
	var entra = $("#sonido1")[0]; //la intro de santillana.
	var menu = $("#sonido2")[0]; //aparecen los botones del menu.
	var fmenu = $("#sonido3")[0]; //musica de fondo del menu.
//	var letmenu = $("#sonido4")[0]; //aparece el letrero del menu.
	var rapido = $("#sonido5")[0]; //mono viene rapido.
	var overmenu = $("#sonido6")[0]; //over los botones del menu
	var jung = $("#sonido7")[0]; //fondo de jungla
	var elef = $("#sonido8")[0]; //elefantes
	var hippo = $("#sonido9")[0]; //elefantes
	var letmono = $("#sonido10")[0]; //letrero de recursos
	var monitos = $("#sonido11")[0]; //los monos 
	var oveejas = $("#sonido12")[0]; //los monos 
	var hoja = $("#sonido13")[0]; //los monos 
	var bote = $("#sonido14")[0]; //los monos 

		
entra.play();		
$("#intro").delay(100).fadeIn(1000).delay(1000).fadeOut(1000,function(){
	carat();
	});


function carat(){
$("#caratula").fadeIn(1,function(){
	 btnCaratula();
	});
}

/*******************************************************/
/************ OVER LOS BOTONES DEL MENU ****************/
/*******************************************************/

$(".men1").mouseover(function(){
	overmenu.play();
	overmenu.currentTime = 0;
	});

$(".men2").mouseover(function(){
	overmenu.play();
	overmenu.currentTime = 0;
	});

$(".men3").mouseover(function(){
	overmenu.play();
	overmenu.currentTime = 0;
	});

$(".men4").mouseover(function(){
	overmenu.play();
	overmenu.currentTime = 0;
	});

$(".men5").mouseover(function(){
	overmenu.play();
	overmenu.currentTime = 0;
	});

$(".men6").mouseover(function(){
	overmenu.play();
	overmenu.currentTime = 0;
	});

/*******************************************************/
/********** INICIO - DERECHA - IZQUIERDA ***************/
/*******************************************************/

$(".inicio").mouseover(function(){

	});
	
$(".izquierda").mouseover(function(){

	});

$(".derecha").mouseover(function(){

	});

$(".inicio").mouseleave(function(){

	});
	
$(".izquierda").mouseleave(function(){

	});

$(".derecha").mouseleave(function(){

	});



$(".inicio").click(function(){
	bote.play();
	bote.currentTime = 0;
	$("#caratula").fadeIn(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	reseteo();
	carat();
	elef.pause();
	elef.currentTime = 0;
	jung.pause();
	jung.currentTime = 0;
	hippo.pause();
	hippo.currentTime = 0;
	monitos.pause();
	monitos.currentTime = 0;
	oveejas.pause();
	oveejas.currentTime = 0;
	hoja.pause();
	hoja.currentTime = 0;
	});

$("#izquierda1").click(function(){
	bote.play();
	bote.currentTime = 0;
	$("#caratula").fadeIn(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	reseteo();
	carat();
	elef.pause();
	elef.currentTime = 0;
	jung.pause();
	jung.currentTime = 0;
	});

$("#derecha1").click(function(){
	bote.play();
	bote.currentTime = 0;
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeIn(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	reseteo();
	tela1();
	tela2();
	tela3();
	arana1();
	arana2();
	arana3();
	arana4();
	elef.pause();
	elef.currentTime = 0;
	jung.play();
	jung.currentTime = 0;
	});

$("#izquierda2").click(function(){
	bote.play();
	bote.currentTime = 0;
	$("#caratula").fadeOut(1);
	$("#escena1").fadeIn(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	reseteo();
	jungla1();
	jung.play();
	jung.currentTime = 0;
	});

$("#derecha2").click(function(){
	bote.play();
	bote.currentTime = 0;
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeIn(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	reseteo();
	flechaRoja();
	jung.play();
	jung.currentTime = 0;
	});


$("#izquierda3").click(function(){
	bote.play();
	bote.currentTime = 0;
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeIn(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	reseteo();
	tela1();
	tela2();
	tela3();
	arana1();
	arana2();
	arana3();
	arana4();
	jung.play();
	jung.currentTime = 0;
	hippo.pause();
	hippo.currentTime = 0;
	});

$("#derecha3").click(function(){
	bote.play();
	bote.currentTime = 0;
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeIn(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	reseteo();
	recurr();
	mon();
	jung.play();
	jung.currentTime = 0;
	hippo.pause();
	hippo.currentTime = 0;
	});


$("#izquierda4").click(function(){
	bote.play();
	bote.currentTime = 0;
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeIn(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	reseteo();
	flechaRoja();
	jung.play();
	jung.currentTime = 0;
	monitos.pause();
	monitos.currentTime = 0;
	});

$("#derecha4").click(function(){
	bote.play();
	bote.currentTime = 0;
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeIn(1);
	$("#escena6").fadeOut(1);
	reseteo();
	sheep();
	jung.play();
	jung.currentTime = 0;
	monitos.pause();
	monitos.currentTime = 0;
	});

$("#izquierda5").click(function(){
	bote.play();
	bote.currentTime = 0;
	mon();
	recurr();
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeIn(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	reseteo();
	jung.play();
	jung.currentTime = 0;
	oveejas.pause();
	oveejas.currentTime = 0;
	});

$("#derecha5").click(function(){
	bote.play();
	bote.currentTime = 0;
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeIn(1);
	reseteo();
	final();
	jung.play();
	jung.currentTime = 0;
	oveejas.pause();
	oveejas.currentTime = 0;
	});

$("#izquierda6").click(function(){
	bote.play();
	bote.currentTime = 0;
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeIn(1);
	$("#escena6").fadeOut(1);
	reseteo();
	sheep();
	jung.play();
	jung.currentTime = 0;
	hoja.pause();
	hoja.currentTime = 0;
	});

$("#derecha6").click(function(){
	location.reload();
	});

////////////////////////////////////////////
///// ENLACE DE LOS BOTONES MENU ///////////
////////////////////////////////////////////

$(".men1").click(function(){
	$("#caratula").fadeOut(1);
	$("#escena1").fadeIn(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	jungla1();
	menu.pause();
	menu.currentTime = 0;
	fmenu.pause();
	fmenu.currentTime = 0;
	jung.play();
	jung.currentTime = 0;	

	});

$(".men2").click(function(){
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeIn(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	tela1();
	tela2();
	tela3();
	arana1();
	arana2();
	arana3();
	arana4();
	menu.pause();
	menu.currentTime = 0;
	fmenu.pause();
	fmenu.currentTime = 0;	
	jung.play();
	jung.currentTime = 0;
	});

$(".men3").click(function(){
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeIn(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	flechaRoja();
	menu.pause();
	menu.currentTime = 0;
	fmenu.pause();
	fmenu.currentTime = 0;	
	jung.play();
	jung.currentTime = 0;
	});

$(".men4").click(function(){
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeIn(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeOut(1);
	recurr();
	mon();
	menu.pause();
	menu.currentTime = 0;
	fmenu.pause();
	fmenu.currentTime = 0;	
	jung.play();
	jung.currentTime = 0;
	});
	
$(".men5").click(function(){
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeIn(1);
	$("#escena6").fadeOut(1);
	sheep();
	menu.pause();
	menu.currentTime = 0;
	fmenu.pause();
	fmenu.currentTime = 0;	
	jung.play();
	jung.currentTime = 0;
	});
	
$(".men6").click(function(){
	$("#caratula").fadeOut(1);
	$("#escena1").fadeOut(1);
	$("#escena2").fadeOut(1);
	$("#escena3").fadeOut(1);
	$("#escena4").fadeOut(1);
	$("#escena5").fadeOut(1);
	$("#escena6").fadeIn(1);
	final();
	menu.pause();
	menu.currentTime = 0;
	fmenu.pause();
	fmenu.currentTime = 0;	
	jung.play();
	jung.currentTime = 0;
	});
	
/************EFECTO DE LOS ARBOLES *******************/
$("#cuad1").mouseover(function(){
	
	rapido.play();
	rapido.currentTime = 0;
	$("#arbol1").sprite({fps: 15, no_of_frames: 6, play_frames: 6});
	});
	
$("#cuad2").mouseover(function(){
	rapido.play();
	rapido.currentTime = 0;
	$("#arbol2").sprite({fps: 15, no_of_frames: 7, play_frames: 7});
	});
	
$("#cuad3").mouseover(function(){
	rapido.play();
	rapido.currentTime = 0;
	$("#arbol3").sprite({fps: 15, no_of_frames: 8, play_frames: 8});
	});
	
$("#cuad4").mouseover(function(){
	rapido.play();
	rapido.currentTime = 0;
	$("#arbol4").sprite({fps: 15, no_of_frames: 7, play_frames: 7});
	});

$("#cuad1").mouseleave(function(){
	$('#arbol1').destroy();
	$('#arbol1').css('background-position','0px 0px');
	});

$("#cuad2").mouseleave(function(){
	$('#arbol2').destroy();
	$('#arbol2').css('background-position','0px 0px');
	});
	
$("#cuad3").mouseleave(function(){
	$('#arbol3').destroy();
	$('#arbol3').css('background-position','0px 0px');
	});

$("#cuad4").mouseleave(function(){
	$('#arbol4').destroy();
	$('#arbol4').css('background-position','0px 0px');
	});
/************FUNCIONES DE LA ESCENA 3 : PROCESO *******************/
$("#boca").click(function(){
	$("#hipo2").fadeIn(5);
	$("#contenedor_hipo").fadeIn(5);
	$("#inicio3").fadeIn(5);
	$("#derecha3").fadeIn(5);
	$("#izquierda3").fadeIn(5);
	$("#flecha3").fadeOut(5);
	hippo.play();
	});	

/*******************************************/
///////////ANIMACIONES//////////////////////
/*******************************************/

function mon(){
	
	$("#mon1").sprite({fps: 7, no_of_frames: 4});
	$("#mon2").sprite({fps: 7, no_of_frames: 4});
	
	$("#mon2").delay(2000).animate({
		left:'-378px'
		},5000,function(){
			$("#mon2").css('left','1090px')
			$("#mon1").delay(2000).animate({
				left:'1090px'
				},5000,function(){
					$("#mon1").css('left','-378px');
					mon();
					});
			
			});
	}

function recurr(){
	monitos.play();
	letmono.play();
	$("#letrero2").delay(200).animate({
		width:'17%',
		top:'530px',
		left:'800px'
		},300,function(){
			$("#letrero2").animate({
				width:'13%',
				top:'566px',
				left:'816px'
				},300,function(){
					$("#letrero2").animate({
						width:'15%',
						top:'545px',
						left:'814px'
						},300,function(){
							//$("#text").fadeIn(1);
							$("#mono_recur").animate({
								top:'482px',
								left:'895px'
								},200);
							});	
					});	
			});	
}

function sheep()
{	oveejas.play();
	$("#nube1").delay(900).fadeIn(350,function(){
		$("#suenio").fadeIn(700,function(){
			$("#suenio").sprite({fps: 10, no_of_frames: 15});
			$("#nube2").delay(200).fadeIn(350,function(){
				$("#nube3").fadeIn(350,function(){
					$("#nube4").fadeIn(350,function(){
						$("#nube5").delay(500).fadeIn(350);
						});
					});
				});
			});
		
		});
	$("#oveja").sprite({fps: 5, no_of_frames: 15});
}


function final()
{	
	hoja.play();
	$('#sabana').sprite({fps: 25, no_of_frames: 15, play_frames: 15});
	$("#textfin").delay(500).fadeIn(5);
}

function btnCaratula(){
	fmenu.play();
	$("#btn1").delay(500).fadeIn(200,function(){
		menu.play();
		});
	$("#btext1").delay(500).fadeIn(200,function(){
		$("#btn2").fadeIn(200);
		$("#btext2").fadeIn(200,function(){
			$("#btn3").fadeIn(200);
			$("#btext3").fadeIn(200,function(){
				$("#btn4").fadeIn(200);
				$("#btext4").fadeIn(200,function(){
					$("#btn5").fadeIn(200);
					$("#btext5").fadeIn(200,function(){
						$("#btn6").fadeIn(200);
						$("#btext6").fadeIn(200,function(){
							$("#letrero").fadeIn(5,function(){
								$("#tit").delay(1000).fadeIn(5,function(){
									//rapido.play();
									});
								});
							letrero();
							
							$("#mono_menu").delay(1200).animate({
								top:'-66px',
								left:'77px'
								},100);
							});
						});
					});
				});
			});
		});
		
}

function letrero(){
	//letmenu.play();
	$("#letrero").sprite({fps: 25, no_of_frames: 21, play_frames: 21});
}

function jungla1()
{
	jung.play();
	elef.play();	
	$('#junglaa1').pan({fps: 30, speed: 2, dir: 'right'});
	$('#sueloo1').pan({fps: 100, speed: 2, dir: 'right'});
	$("#elef1").sprite({fps: 10, no_of_frames: 3});
	$("#elef2").sprite({fps: 9, no_of_frames: 7});
	$("#elef1").animate({
		left:'-1021px'
		},10000,function(){
			$("#elef2").animate({
				left:'157px'
				},10000,function(){
					
					});
			});
}

function flechaRoja(){
	$("#flecha3").delay(1000).fadeIn(5,function(){
		rapido.play();
			$("#flecha3").animate({
			top:'528px',
			left:'216px'
			},rojo());
		});
	
	
}

function rojo(){
	
	$("#flecha3").animate({
		top:'547px',
		left:'186px'
		},300,function(){
			$("#flecha3").animate({
				top:'528px',
				left:'216px'
				},300,function(){
					rojo();
					});
			});
}

/*******ANIMACION DE LAS ESCENA 2: TAREAS ****************/

/**TELARAÑAS**/

function tela1(){
	$("#tela1").delay(500).animate({
		height:'436px'
		},1000,function(){
			$("#tela1").animate({
				height:'142px'
				},1000,tela1());
			});
}
function tela2(){			
	$("#tela2").delay(500).animate({
		height:'290px'
		},1000,function(){
			$("#tela2").animate({
				height:'63px'
				},1000,tela2());
		});
}
function tela3(){
	$("#tela3").delay(500).animate({
		height:'34px'
		},1000,function(){
			$("#tela3").animate({
				height:'343px'
				},1000,tela3());
		});
}

/**************************************************/

/**ARAÑAS**/

function arana1(){
	$("#aranita2").delay(500).animate({
		top:'478px'
		},1000,function(){
			$("#aranita2").animate({
				top:'185px'
				},1000,arana1());
			});
}
function arana2(){			
	$("#aranita3").delay(500).animate({
		top:'339px'
		},1000,function(){
			$("#aranita3").animate({
				top:'113px'
				},1000,arana2());
		});
}
function arana3(){
	$("#aranita4").delay(500).animate({
		top:'34px'
		},1000,function(){
			$("#aranita4").animate({
				top:'327px'
				},1000,arana3());
		});
}

function arana4(){
	$("#aranita5").delay(2000).animate({
		top:'96px'
		},7000);
}	
/********************************************************/



////////////////////////////////////////////
///////////RESETEO//////////////////////////
////////////////////////////////////////////

function reseteo(){
	

	
	$("#izquierda3").css('display','none');
	$("#derecha3").css('display','none');
	$("#inicio3").css('display','none');
	
	$("#hipo2").css('display','none');
	$("#contenedor_hipo").css('display','none');
	
	$(".btext").css('display','none');
	$(".btn").css('display','none');
	$("#caratula").css('display','none');
	
	$("#mono_menu").css('top','28px');
	$("#mono_menu").css('left','-157px');
	
	$('#letrero').destroy();
	$('#letrero').css('background-position','0px 0px');
	$('#letrero').css('display','none');
	
	$('#sueloo1').destroy();
	$('#sueloo1').css('background-position','0px 0px');
	
	$('#mon1').destroy();
	$('#mon1').css('background-position','0px 0px');

	$('#mon2').destroy();
	$('#mon2').css('background-position','0px 0px');
	
	$('#oveja').destroy();
	$('#oveja').css('background-position','0px 0px');
	
	$('#suenio').destroy();
	$('#suenio').css('background-position','0px 0px');
	
	$('#sabana').destroy();
	$('#sabana').css('background-position','0px 0px');
	
	$('#junglaa1').destroy();
	
	$('#elef1').destroy();
	
	$('#elef2').destroy();

	$('#letrero2').css('width','0px');
	$('#letrero2').css('top','679px');
	$('#letrero2').css('left','888px');
	}
	
	
	$(".inicio").on("click", function () {
			$('#elef1').clearQueue().stop().css('left','1703px');
			$('#elef2').clearQueue().stop().css('left','983px');
			$("#aranita5").clearQueue().stop().css('top','-125px');
			$('.eso').clearQueue().stop().css('display','none');
			$('#flecha3').clearQueue().stop().css('left','-1px');
			$("#flecha3").clearQueue().stop().css('top','676px');
			$('#textfin').clearQueue().stop().css('display','none');
			//$('#text').clearQueue().stop().css('display','none');
			$("#mono_recur").clearQueue().stop().css('top','516px');
			$("#mono_recur").clearQueue().stop().css('left','1053px');
			$("#mon1").clearQueue().stop().css('left','-378px');
			$("#mon2").clearQueue().stop().css('left','1090px');
			$('#tit').clearQueue().stop().css('display','none');
			$('#flecha3').clearQueue().stop().css('display','none');

	});
	
	$("#izquierda1").on("click", function () {
			$('#tit').clearQueue().stop().css('display','none');
			$('#elef1').clearQueue().stop().css('left','1703px');
			$('#elef2').clearQueue().stop().css('left','983px');
	});
	
	$("#derecha1").on("click", function () {
			$('#elef1').clearQueue().stop().css('left','1703px');
			$('#elef2').clearQueue().stop().css('left','983px');
	});
	
	$("#izquierda2").on("click", function () {
			$("#aranita5").clearQueue().stop().css('top','-125px');
	});
	
	$("#derecha2").on("click", function () {
			$("#aranita5").clearQueue().stop().css('top','-125px');
	});
	
	$("#izquierda3").on("click", function () {
			$('#flecha3').clearQueue().stop().css('display','none');
			$('#flecha3').clearQueue().stop().css('left','-1px');
			$("#flecha3").clearQueue().stop().css('top','676px');
	});
	
	$("#derecha3").on("click", function () {
		$('#flecha3').clearQueue().stop().css('display','none');
			$('#flecha3').clearQueue().stop().css('left','-1px');
			$("#flecha3").clearQueue().stop().css('top','676px');
	});
	
	
	
	$("#izquierda5").on("click", function () {
			$('.eso').clearQueue().stop().css('display','none');
	});
	$("#derecha5").on("click", function () {
			$('.eso').clearQueue().stop().css('display','none');
	});
	
	$("#izquierda6").on("click", function () {
			$('#textfin').clearQueue().stop().css('display','none');
	});
	
	
	
	
	$("#izquierda4").on("click", function () {
			//$('#text').clearQueue().stop().css('display','none');
			$("#mono_recur").clearQueue().stop().css('top','516px');
			$("#mono_recur").clearQueue().stop().css('left','1053px');
			$("#mon1").clearQueue().stop().css('left','-378px');
			$("#mon2").clearQueue().stop().css('left','1090px');
			
	});
	$("#derecha4").on("click", function () {
			//$('#text').clearQueue().stop().css('display','none');
			$("#mono_recur").clearQueue().stop().css('top','516px');
			$("#mono_recur").clearQueue().stop().css('left','1053px');
			$("#mon1").clearQueue().stop().css('left','-378px');
			$("#mon2").clearQueue().stop().css('left','1090px');
	});

	
	$(".men1").on("click", function () {
			//$('#text').clearQueue().stop().css('display','none');
			
	});
	
	
}); //fin de ready//


















