/*!
 @inforsis
 @Code by Jadson Moreira | www.jadsonmoreira.com
 @plugin stripe
 @Description: Gerenciador de zebrado para as linhas das tabelas
 @versão: 1.0
 @since january/2012
 @exemple $('identificador').stripe({style1 : '.nomeDaClasse', style2 : '.nomeDaClasse2'});	
!*/

$.fn.stripe = function(options) {

this.each(function() {

var opts = $.extend({}, $.fn.stripe.defaults, options);

var elem = $(this), //identificador da tabela que receberá o zebrado
	style1 = opts.style1, //cor da primeira linha
	style2 = opts.style2 //cor da segunda linha

	//fazendo o zebrado da linha par
	if (opts.style1) {
		$(elem).find('tr:even').addClass(opts.style1);
	}	
	//fazendo o zemrabdo da linha impar
	if (opts.style2) {
  		$(elem).find('tr:odd').addClass(opts.style2);
	}
  })

}