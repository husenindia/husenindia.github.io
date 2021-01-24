/*************************/
/***** AUTHOR : HUSENTELWALA
/***** DATE : 10-17-2015 : (Standard Date Format mm-dd-yyyy)
/*************************/

$(document).ready(function(){
    var clickedId;
    var hash = window.location.hash; 
	$(function () {
		$tabsLink=$('.responsive-tab .cst-tabs-links');		
		$activeTab=$tabsLink.find('li.active > a');
		showActiveTab($activeTab);
		tabContentInsertMenuLink();
		$activeIdMobile=$tabsLink.find('li.active-tab-mobile > a').attr('href');		
		$($activeIdMobile).addClass('active-tab-mobile').find('.cst-content-link').addClass('active');
		if (hash) {
		    $('.cst-tab-content').hide();
		    $('.responsive-tab').find(hash).fadeIn().addClass('active-tab');
		    $('.cst-tabs-links').find('li').removeClass('active');
		    $('.cst-tabs-links').find('a[href="' + hash + '"]').parents('li').addClass('active');
		    $tabsLink.slideToggle();
		}

		$tabsLink.on('click','> li > a',function(){
			$obj = $(this);		    
			if($obj.attr('data-link')!='true') {
				$('.cst-tab-content').hide();
				showActiveTab($obj);
			}
		});	
		$('body').on('click', '.menu-icon', function () {
		    $obj = $(this);
		    $tabsLink.slideToggle();
		    $obj.toggleClass('active');
		});
	});
	
	var showActiveTab =function($obj) {
	    clickedId = $obj.attr('href');
	    $obj.parents('.responsive-tab').find(clickedId).fadeIn().addClass('active-tab');	   
		$obj.parents('ul').find('li').removeClass('active');
		$obj.parents('li').addClass('active');
		selectedTabText = $obj.text();
		$tabsLink.slideToggle();
        //$('.selected-tab').text(selectedTabText);
	}

	var tabContentInsertMenuLink = function () {
	    selectedTabText = $tabsLink.find('li.active a').text();
	    $('<span class="menu-icon"></span>').insertAfter($tabsLink);
	    //$('<h2 class="selected-tab">' + selectedTabText + '</span>').insertAfter('.menu-icon');
	}
});
