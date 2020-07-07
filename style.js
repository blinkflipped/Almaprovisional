(function (blink) {
	'use strict';

	var AlmaStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	AlmaStyle.prototype = {
		//BK-15873 añadimos el estilo basic como parent para la herencia de los estilos del CKEditor
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_Almaprovisional',
		extraPlugins: ['image2'],
		ckEditorStyles: {
			name: 'alma',
			styles: [

                { name: 'Título 1', element: 'h4', attributes: { 'class': 'bck-title1'} },
                { name: 'Título 2 rosa', element: 'h4', attributes: { 'class': 'bck-title2'} },
                { name: 'Título 3 verde', element: 'h4', attributes: { 'class': 'bck-title3'} },
                { name: 'Título 4 celeste', element: 'h4', attributes: { 'class': 'bck-title4'} },
                { name: 'Título 5', element: 'h4', attributes: { 'class': 'bck-title5'} },
                { name: 'Título 6 amarillo', element: 'h4', attributes: { 'class': 'bck-title6'} },
                { name: 'Título 7 fondo rosa', element: 'h4', attributes: { 'class': 'bck-title7'} },
                { name: 'Título 8 fondo celeste', element: 'h4', attributes: { 'class': 'bck-title8'} },
                { name: 'Título 9 fondo verde', element: 'h4', attributes: { 'class': 'bck-title9'} },
                { name: 'Título 10 fondo amarillo', element: 'h4', attributes: { 'class': 'bck-title10'} },
                { name: 'Título 11 fondo azul', element: 'h4', attributes: { 'class': 'bck-title11'} },
                { name: 'Título 12 fondo rojo', element: 'h4', attributes: { 'class': 'bck-title12'} },
                { name: 'Título 13 Azul', element: 'h4', attributes: { 'class': 'bck-title13'} },
                { name: 'Título 14 Rojo', element: 'h4', attributes: { 'class': 'bck-title14'} },

                { name: 'Énfasis 1 NUM Rosa', element: 'span', attributes: { 'class': 'bck-enfasis1'} },
                { name: 'Énfasis 2 NUM Verde', element: 'span', attributes: { 'class': 'bck-enfasis2'} },
                { name: 'Énfasis 3 NUM Celeste', element: 'span', attributes: { 'class': 'bck-enfasis3'} },
                { name: 'Énfasis 4 NUM Amarillo', element: 'span', attributes: { 'class': 'bck-enfasis4'} },
                { name: 'Énfasis 5 Fondo color', element: 'span', attributes: { 'class': 'bck-enfasis5'} },
                { name: 'Énfasis 6 Rosa', element: 'span', attributes: { 'class': 'bck-enfasis6'} },
                { name: 'Énfasis 7 Verde', element: 'span', attributes: { 'class': 'bck-enfasis7'} },
                { name: 'Énfasis 8 Celeste', element: 'span', attributes: { 'class': 'bck-enfasis8'} },
                { name: 'Énfasis 9 Amarillo', element: 'span', attributes: { 'class': 'bck-enfasis9'} },
                { name: 'Énfasis 10 Font Playtime', element: 'span', attributes: { 'class': 'bck-enfasis10'} },
                { name: 'Énfasis 11 Font Playtime Bold', element: 'span', attributes: { 'class': 'bck-enfasis11'} },
                { name: 'Énfasis 12 NUM Azul', element: 'span', attributes: { 'class': 'bck-enfasis12'} },
                { name: 'Énfasis 13 NUM Rojo', element: 'span', attributes: { 'class': 'bck-enfasis13'} },
                { name: 'Énfasis 14 Azul', element: 'span', attributes: { 'class': 'bck-enfasis14'} },
                { name: 'Énfasis 15 Rojo', element: 'span', attributes: { 'class': 'bck-enfasis15'} },
                
				{ name: 'Lista ordenada 1', element: 'ol', attributes: { 'class': 'bck-ol1' } },
				{ name: 'Lista ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol2' } },
				{ name: 'Lista ordenada 3', element: 'ol', attributes: { 'class': 'bck-ol3' } },
				{ name: 'Lista ordenada 4', element: 'ol', attributes: { 'class': 'bck-ol4' } },
				{ name: 'Lista ordenada 5 abc', element: 'ol', attributes: { 'class': 'bck-ol5' } },
				{ name: 'Lista ordenada 6 celeste', element: 'ol', attributes: { 'class': 'bck-ol6' } },
				{ name: 'Lista ordenada 7 rosa', element: 'ol', attributes: { 'class': 'bck-ol7' } },
				{ name: 'Lista ordenada 8 rosa', element: 'ol', attributes: { 'class': 'bck-ol8' } },
				{ name: 'Lista ordenada 9 rosa', element: 'ol', attributes: { 'class': 'bck-ol9' } },

				{ name: 'Icono cuadrado', element: 'p', attributes: { 'class': 'square-icon'} },
				{ name: 'Icono triángulo', element: 'p', attributes: { 'class': 'triangle-icon'} },
				{ name: 'Icono círculo', element: 'p', attributes: { 'class': 'circle-icon'} },
				{ name: 'Icono rombo', element: 'p', attributes: { 'class': 'rombo-icon'} },

				{ name: 'Celda 1', element: 'td', attributes: { 'class': 'bck-td1' } },
				{ name: 'Celda 2', element: 'td', attributes: { 'class': 'bck-td2' } },
				{ name: 'Celda 3', element: 'td', attributes: { 'class': 'bck-td3' } },
				{ name: 'Celda 4', element: 'td', attributes: { 'class': 'bck-td4' } },

				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-1' } },
				{ name: 'Caja 2 Bombilla', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-2' } },
				{ name: 'Caja 3 Lupa', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-3' } },
				{ name: 'Caja 4 Bocadillo rosa', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-4' } },
				{ name: 'Caja 5 Bocadillo celeste', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-5' } },
				{ name: 'Caja 6 Bocadillo verde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-6' } },
				{ name: 'Caja 7 Franja azul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-7' } },
				{ name: 'Caja 8 Flecha azul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-8' } },
				{ name: 'Caja 9', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-9' } },
				{ name: 'Caja 10 DIECI', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-10' } },
				{ name: 'Caja 11 Puntos rosa', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-11' } },
				{ name: 'Caja 12 Puntos celeste', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-12' } },
				{ name: 'Caja 13 Puntos verde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-13' } },
				{ name: 'Caja 14 Puntos amarillo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-14' } },
				{ name: 'Caja 15 Puntos azul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-15' } },
				{ name: 'Caja 16 Puntos rojo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-16' } }
			]
		},

		init: function () {
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			this.parent.init.call(this);
			this.addActivityTitle();
			if(window.esWeb) return;
			this.removeFinalSlide();
			this.formatCarouselindicators();
		},

		removeFinalSlide: function () {
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			this.parent.removeFinalSlide.call(this, true);
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html() + ' > ' + blink.courseInfo.unit;
			});
		},

		formatCarouselindicators: function () {
			var $navbarBottom = $('.navbar-bottom'),
				$carouselIndicators = $('.slider-indicators').find('li');
			$navbarBottom.find('li').tooltip('destroy');

			var dropDown = '' +
					'<div class="dropdown">' +
						'<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">';

			var navigatorIndex = 0;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = eval('t'+index+'_slide'),
					slideTitle = slide.title;

				if (slide.isConcatenate) continue;

				dropDown += '<li role="presentation"><a role="menuitem">' + (navigatorIndex+1) + '. ' + stripHTML(slideTitle) + '</a></li>';
				$navbarBottom.find('li').eq(navigatorIndex).html('<span title="'+ stripHTML(slideTitle) +'">'+(navigatorIndex+1)+'</span>');
				navigatorIndex++;

			}

			dropDown += '' +
						'</ul>' +
					'</div>';

			$navbarBottom
				.attr('class', 'publisher-navbar')
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before(dropDown)
					.wrap('<div id="top-navigator"/>')
					.end()
				.find('.dropdown').find('li')
					.on('click', function (event) {
						$navbarBottom.find('ol').find('li').eq($(this).index()).trigger('click');
					});

			if (!blink.hasTouch) {
				$navbarBottom
					.find('ol').find('span')
						.tooltip({
							placement: 'bottom',
							container: 'body'
						});
			}
		}

		//BK-15873 Quitamos la funcion getEditorStyles para que la herede de basic
	};

	AlmaStyle.prototype = _.extend({}, new blink.theme.styles.basic(), AlmaStyle.prototype);

	blink.theme.styles['Almaprovisional'] = AlmaStyle;

})( blink );

$(document).ready(function () {
    $('.item').find('.header').find('.title')
		.filter(function () {
			return $(this).find('.empty').length;
		}).hideBlink();

    $('.item').find('.header').find('.title')
		.filter(function () {
			return !$(this).find('.empty').length;
		})
		.each(function () {
			var $header = $(this).find('h3');
			$header.length && $header.html($header.html().replace(' ', ''));
		});

	if (!editar) {
		blink.events.on('showSlide:after', function (index) {
			poolReposition();
		});
	}

});

$(window).load(function() {
	if (!editar) {
		poolReposition();
	}
});
$(window).resize(function() {
	if (!editar) {
		poolReposition();
	}
});

function poolReposition() {
	$('.pool').each(function(i,e) {
		var poolContainer = $(e).width();
		var poolWidth = $(e).find('.rf-searchgamecontainer').width();
		var wordContainerWidth = poolContainer-poolWidth-20;
		if (wordContainerWidth > 150) {
			$(e).find('.rf-wordcontainer').css('width', wordContainerWidth);
		} else {
			$(e).find('.rf-wordcontainer').css('width', poolWidth);
		}
	});
}
