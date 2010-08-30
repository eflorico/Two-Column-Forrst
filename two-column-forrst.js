// ==UserScript==
// @name			Two-column Forrst
// @namespace      	twocolumnforrst
// @description		Two-columnifying Forrst.
// @include			http://forrst.com/posts/popular*
// @include			http://forrst.com/posts/filtered/*
// @include			http://forrst.com/*
// @include			http://forrst.com/activity/*
// @include			http://forrst.com/people/*/posts*
// @include			http://forrst.com/people/*/likes*
// @author			Eric Wolf
// @version			1.0
// @resource        jQueryMasonry	http://github.com/desandro/masonry/raw/master/js/jquery.masonry.min.js
// ==/UserScript==

//Take jQuery from Forrst
$ = unsafeWindow.$;

//Returns outer HTML - if multiple elements are selected, HTML is chained
$.fn.outerHTML = function() {
	return $('<div>').append(this.clone()).html();
};

//Include CSS and JS
$('head').append('<style type="text/css">' + 'div.activity.follow { margin-bottom:11px!important; } div#main-col { float:none; } #neat-panel #sidebar,#neat-panel .a-top,#neat-panel .a-bottom,#neat-panel .bottom {display:none!important;}#neat-panel #main-col,#neat-panel {width:100%!important;}#neat-panel .top,#neat-panel .body,#neat-panel .a-body {background:transparent!important;}#neat-panel .top{padding-top:0!important;padding-bottom:20px!important;height:auto!important;}/*TopData*/.topdata,.activity.follow {background:#eaede5!important;-moz-border-radius:5px!important;border-radius:5px;-webkit-border-radius:5px!important;border:1px solid #bac3ab!important;width:100%!important;height:50px!important;overflow:hidden!important;margin:0!important;-moz-box-shadow: inset 0px 0px 15px rgba(0,0,0,0.2),inset 0px 1px 0px rgba(255,255,255,1);-webkit-box-shadow: inset 0px 0px 15px rgba(0,0,0,0.2),inset 0px 1px 0px rgba(255,255,255,1);z-index:0!important;width:450px!important;margin-left:7px!important;}.activity a.user {margin-top:4px!important;display:block!important;margin-right:7px!important;}.sidekick {margin:0!important;}a.user img, a.other-user img {border:1px solid #FFF!important;width:20px!important;height:20px!important;}.topdata p.top-meta {margin-top:3px!important;padding-left:20px!important;font-size:0.9em!important;}.topdata ul {float:right;}.topdata ul li {float:left;border-left:1px solid #bac3ab!important; -moz-box-shadow: inset 1px 0px 0px rgba(255,255,255,0.5);-webkit-box-shadow: inset 1px 0px 0px rgba(255,255,255,0.5);}.topdata ul li.postType {border:none!important;-moz-box-shadow:none;-webkit-box-shadow:none;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAABoCAYAAAANfPt9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4MEUwRkMzQjMyNDExREY4NkE4RDJDNEY3QjgwNDQ1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4MEUwRkM0QjMyNDExREY4NkE4RDJDNEY3QjgwNDQ1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTgwRTBGQzFCMzI0MTFERjg2QThEMkM0RjdCODA0NDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTgwRTBGQzJCMzI0MTFERjg2QThEMkM0RjdCODA0NDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz69nhNcAAAIe0lEQVR42uyaeUwc1x3H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) no-repeat top left!important; text-indent:-9999px; width:25px;height:30px;margin-right:5px!important;}.snap ul li.postType{background-position:0 -80px!important;}.code ul li.postType{background-position:0 -53px!important;}.link ul li.postType{background-position:0 -28px!important;}.question ul li.postType{background-position:0 3px!important;}.topdata ul li a {padding: 5px 7px 0 27px!important;height:30px;display:block!important; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAACbCAYAAACeepDKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYxRjFFQkM5QjMyNDExREZCMUZCQUQ2NzU2ODREMzZFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYxRjFFQkNBQjMyNDExREZCMUZCQUQ2NzU2ODREMzZFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjFGMUVCQzdCMzI0MTFERkIxRkJBRDY3NTY4NEQzNkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjFGMUVCQzhCMzI0MTFERkIxRkJBRDY3NTY4NEQzNkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7a77g9AAAGAElEQVR42uybe2wVRRjF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) no-repeat top left!important; text-decoration:none!important;color:#898677!important;}.topdata ul li a:hover {background-color:rgba(255,255,255,0.3)!important;}.topdata ul li a:active{background-color:rgba(0,0,0,0)!important;}.topdata ul li a.likes {background-position:0 -102px!important; }.topdata ul li a.view {background-position:3px -3px!important;text-indent:-9999px!important;width:0px!important;}.topdata ul li a.likes.on {background-position:0 -126px!important;color:#4C92E9!important;}.topdata ul li a.comments {background-position:0 -77px!important;}.activity.follow .top-meta{margin-top:4px!important;text-align:right!important; padding-right:10px!important;}a.other-user {top:7px!important;left:6px!important;z-index:0!important;}.activity.follow {height:30px!important;}/*ContentArea*/.activity {float:left!important;width:460px!important;}.bubble {-moz-border-radius:5px!important;border-radius:5px!important;-webkit-border-radius:5px!important;background:#FFF!important;float:left!important;width:450px!important;min-height:200px!important;border:1px solid #cbcdc6!important;-moz-box-shadow: inset 0px 1px 0px rgba(255,255,255,1),inset 0px -1px 0px rgba(255,255,255,1),inset 0px 0px 15px rgba(0,0,0,0.2),0px 1px 1px rgba(0,0,0,0.3);-webkit-box-shadow: inset 0px 1px 0px rgba(255,255,255,1),inset 0px -1px 0px rgba(255,255,255,1),inset 0px 0px 15px rgba(0,0,0,0.2),0px 1px 1px rgba(0,0,0,0.3);z-index:30!important;margin-top:-20px!important;}.content.snap p {font-size:0.9em!important; margin-top:0!important;margin-bottom:0.3em!important;line-height:1.5em!important;}.content.snap {width:200px!important;padding-left:14px!important;margin-left:11px!important;}.a-body{padding:10px!important;}#neat-panel div.activity div.real-deal {width:450px!important;}.post.snap {margin-right:0!important; width:430px;}div.post.snap div.snap-wrapper img {max-width:178px!important;border-width:1px!important;-moz-box-shadow:0 0 2px rgba(0,0,0,0.5);-webkit-box-shadow:0 0 2px rgba(0,0,0,0.5);box-shadow:0 0 2px rgba(0,0,0,0.5);}.content.code {width:430px!important;}.inline-ad{float:left!important;width:460px!important;}.inline-ad #merch-upsell {margin:1px 0 11px 7px!important;text-align:left!important;}.inline-ad .ad {margin:1px 0 11px 7px!important;}.inline-ad .ad h5 a{float:left!important;text-decoration:none!important; color:#444444!important;padding-right:5px!important;margin-right:5px!important;border-right:1px solid #DDD!important;height:90px!important;}.inline-ad .ad a {float:left!important;}.inline-ad .ad p {float:left!important; width:250px!important;padding-left:10px!important;}div#posts-loading {background:transparent -moz-linear-gradient(center bottom,rgba(237,233,220,1) 0%,rgba(237,233,220,0) 100%)!important;txt-shadow:0 1px 7px rgba(0,0,0,0.8)!important;color:#6A5C49!important;}#posts-loading img {height:0!important;width:0!important;padding-top:16px!important;padding-left:16px!important;background: url(data:image/gif;base64,R0lGODlhEAAQAPQAAP///2pcSfr6+Yp/cLawp21fTYB0ZObk4cvHwHZqWK6nnaWdke7t68K8td3a1pOJfJyShgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat!important;}.a#new-post.big, button#new-post{top:0!important;}' + '</style>');
$('head').append('<script type="text/javascript">' + GM_getResourceText('jQueryMasonry') + '</script>');

//Modifies a posts DOM to allow new style
function modPost() {
	if ($(this).hasClass('modded')) return;
	
	if (!$(this).hasClass('follow')) { //Regular post
		//Extract data
		var link = $(this).find('.top-meta a:eq(1)').attr('href');
		var time = /\d+ \w/.exec($(this).find('.top-meta:eq(0)').text())[0].replace(' ', '');
		var userLink = $(this).find('.user').attr('href');
		var userName  = $(this).find('.user img').attr('alt');
		var userImage = $(this).find('.user img').attr('src');
		var buttons = $(this).find('.sidekick a');
		
		if ($(this).is('.like') || $(this).is('.new_comment')) {
			var otherUserLink = $(this).find('.other-user').attr('href');
			var otherUserName = $(this).find('.other-user img').attr('alt');
		}
		
		//Generate new top element
		var top = '<div class="topdata">';
		
		top += '<ul>';
		top += '<li class="postType"></li>';
		for (var i = 0; i < buttons.length; ++i)
			top += '<li>' + $(buttons).eq(i).outerHTML() + '</li>';
		top += '</ul>';
	
		top += '<a href="' + userLink + '" class="user normal" title="">';
		top += '<img width="37" height="37" src="' + userImage + '">';
		top += '</a>';
		
		top += '<p class="top-meta">';
		
		if (otherUserName) {
			top += '<a href="' + otherUserLink + '">' + otherUserName + '</a>';
			
			if ($(this).is('.new_comment')) top += ' › ';
			else if ($(this).is('.like')) top += ' ♥ ';
		}
		else top += 'by ';
	
		top += '<a href="' + userLink + '">' + userName + '</a> ';
		top += time + ' ago';
		
		top += '</p>';
		
		top += '</div>';
		
		//Remove unnecessary elements
		$(this).find('.user, .a-top, .a-bottom, .top-meta, .sidekick').remove();
		
		$(this).prepend(top);
	}
	else { //Follow notification
		var top = $(this).find('.top-meta').outerHTML();
		$(this).find('.bubble').remove();
		$(this).append(top);
	}
		
	$(this).addClass('modded');
}

$('.body .activity').each(modPost); //Mod all posts

//Mason posts
$('.body').masonry({
	singleMode: true,
	columnWidth: 463,
	animate: false,
	resizeable: false,
	itemSelector: '.activity:visible'
});


var nextNewPostsId = 0;

//Override applyLibs function - called when new posts are loaded
unsafeWindow.Posts.applyLibsOld = unsafeWindow.Posts.applyLibs;
unsafeWindow.Posts.applyLibs = function () { 
	unsafeWindow.Posts.applyLibsOld(); //Call old function first
	
	//Find new posts
	var newPosts = $('.body .activity:not(.modded)');
	
	if (newPosts.length > 0) { //If any
		//Create container for new posts (necessary for masonry)
		var newPostsId = 'new-posts-' + nextNewPostsId++;
		$('.body').append('<div id="' + newPostsId + '"></div>');
		var newPostsContainer = $('#' + newPostsId);
		
		//Move new posts into container
		newPostsContainer.html(newPosts.outerHTML());
		newPosts.remove();
		
		//Mod and mason new posts
		newPosts = newPostsContainer.children();
		newPosts.each(modPost);
		$('.body').masonry({ appendedContent: newPostsContainer });
	}
};