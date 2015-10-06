(function($){
	$.fn.gridClasses = function( options ) {	
	
		var _settings = $.extend({
			// defaults
			itemClass: 'grid-item',
			topRow: 'topRow',
			bottomRow: 'bottomRow',
			firstInRow: 'firstInRow',
			lastInRow: 'lastInRow'
		}, options );
			
		var _items = this.find('.' + _settings.itemClass);
		
		var _doSize = function() {
			var _top = _items.first().position().top;
			var _left = _items.first().position().left;		
			var _rows = 0;
			var _cols = 0;
			_items.each(function(){ 
				if($(this).position().top == _top){ _cols++; }
				if($(this).position().left == _left){ _rows++; }
				$(this).removeClass(_settings.topRow + ' ' + _settings.bottomRow + ' ' + _settings.firstInRow + ' ' + _settings.lastInRow);
			});		
			_items.each(function(){
                var _i = $(this).index('.' + _settings.itemClass);
				if(_i % _cols === 0){
					$(this).addClass(_settings.firstInRow);
				}
				if((_i % _cols === (_cols-1)) || (_i == (_items.length-1))){
					$(this).addClass(_settings.lastInRow);
				}
				if(_i < (_cols)){ $(this).addClass(_settings.topRow); }
				if(_i >= (_cols*(_rows-1))){ $(this).addClass(_settings.bottomRow); }
			});
		};
				
		_doSize();
		$(window).on('resize', _doSize);
	};	
}(jQuery));