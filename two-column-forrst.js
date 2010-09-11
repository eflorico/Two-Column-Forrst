// ==UserScript==
// @name			Two-column Forrst
// @namespace      	twocolumnforrst
// @description		Two-columnifying Forrst.
// @include			http://forrst.com/posts/*
// @include			http://forrst.com/
// @include			http://forrst.com/activity/*
// @include			http://forrst.com/people/*/posts*
// @include			http://forrst.com/people/*/likes*
// @author			Eric Wolf
// @version			1.0
// ==/UserScript==

//Take jQuery from Forrst
$ = unsafeWindow.$;

//Returns outer HTML - if multiple elements are selected, HTML is chained
$.fn.outerHTML = function() {
return $('<div>').append(this.clone()).html();
};

//Include CSS
$('head').append('<style type="text/css">#comment-land form fieldset div textarea {width:300px!important;}div.activity.follow{margin-bottom:11px!important;}div#main-col{float:none;}.activity{float:none !important;}.body{position:relative !important;}#neat-panel #sidebar,#neat-panel .a-top,#neat-panel .a-bottom,#neat-panel .bottom {display:none!important;}#neat-panel #main-col,#neat-panel {width:100%!important;}#neat-panel .top,#neat-panel .body,#neat-panel .a-body {background:transparent!important;}#neat-panel .top{padding-top:0!important;padding-bottom:20px!important;height:auto!important;}.activity .topdata,.activity.follow {background:#eaede5!important;-moz-border-radius:5px!important;border-radius:5px;-webkit-border-radius:5px!important;border:1px solid #bac3ab!important;width:100%!important;height:50px!important;overflow:hidden!important;margin:0!important;-moz-box-shadow: inset 0px 0px 15px rgba(0,0,0,0.2),inset 0px 1px 0px rgba(255,255,255,1);-webkit-box-shadow: inset 0px 0px 15px rgba(0,0,0,0.2),inset 0px 1px 0px rgba(255,255,255,1);z-index:0!important;width:450px!important;margin-left:7px!important;}.activity a.user {margin-top:4px!important;display:block!important;margin-right:7px!important;}.activity .sidekick {margin:0!important;}.activity a.user img,a.other-user img {border:1px solid #FFF!important;width:20px!important;height:20px!important;}.activity .topdata p.top-meta {margin-top:3px!important;padding-left:20px!important;font-size:0.9em!important;}.activity .topdata ul {float:right;}.activity .topdata ul li {float:left;border-left:1px solid #bac3ab!important;-moz-box-shadow: inset 1px 0px 0px rgba(255,255,255,0.5);-webkit-box-shadow: inset 1px 0px 0px rgba(255,255,255,0.5);}.activity .topdata ul li.postType {border:none!important;-moz-box-shadow:none;-webkit-box-shadow:none;text-indent:-9999px;width:25px;height:30px;margin-right:5px!important;}.activity .snap ul li.postType{background-position:0 -80px!important;}.activity .code ul li.postType{background-position:0 -53px!important;}.activity .link ul li.postType{background-position:0 -28px!important;}.activity .question ul li.postType{background-position:0 3px!important;}.activity .topdata ul li a {padding:5px 7px 0 27px!important;height:30px;display:block!important;text-decoration:none!important;color:#898677!important;}.activity .topdata ul li a:hover {background-color:rgba(255,255,255,0.3)!important;}.activity .topdata ul li a:active{background-color:rgba(0,0,0,0)!important;}.activity .topdata ul li a.likes {background-position:0 -102px!important;}.activity .topdata ul li a.view {background-position:3px -3px!important;text-indent:-9999px!important;width:0px!important;}.activity .topdata ul li a.likes.on {background-position:0 -126px!important;color:#4C92E9!important;}.activity .topdata ul li a.comments {background-position:0 -77px!important;}.activity.follow .top-meta{margin-top:4px!important;text-align:right!important;padding-right:10px!important;}.activity a.other-user {top:7px!important;left:6px!important;z-index:0!important;}.activity.follow {height:30px!important;}.activity {float:left!important;width:460px!important;}.activity .bubble {-moz-border-radius:5px!important;border-radius:5px!important;-webkit-border-radius:5px!important;background:#FFF!important;float:left!important;width:450px!important;min-height:230px!important;border:1px solid #cbcdc6!important;-moz-box-shadow: inset 0px 1px 0px rgba(255,255,255,1),inset 0px -1px 0px rgba(255,255,255,1),inset 0px 0px 15px rgba(0,0,0,0.2),0px 1px 1px rgba(0,0,0,0.3);-webkit-box-shadow: inset 0px 1px 0px rgba(255,255,255,1),inset 0px -1px 0px rgba(255,255,255,1),inset 0px 0px 15px rgba(0,0,0,0.2),0px 1px 1px rgba(0,0,0,0.3);z-index:30!important;margin-top:-20px!important;}.activity .content.snap p {font-size:0.9em!important;margin-top:0!important;margin-bottom:0.3em!important;line-height:1.5em!important;}.activity .content.snap {width:200px!important;padding-left:14px!important;margin-left:11px!important;}.activity .a-body{padding:10px!important;}#neat-panel div.activity div.real-deal {width:450px!important;}.activity .post.snap {margin-right:0!important;width:430px;}.activity div.post.snap div.snap-wrapper img {max-width:178px!important;border-width:1px!important;-moz-box-shadow:0 0 2px rgba(0,0,0,0.5);-webkit-box-shadow:0 0 2px rgba(0,0,0,0.5);box-shadow:0 0 2px rgba(0,0,0,0.5);}.activity .content.code {width:430px!important;}.inline-ad{float:left!important;width:460px!important;}.inline-ad #merch-upsell {margin:1px 0 11px 7px!important;text-align:left!important;}.inline-ad .ad {margin:1px 0 11px 7px!important;}.inline-ad .ad h5 a{float:left!important;text-decoration:none!important;color:#444444!important;padding-right:5px!important;margin-right:5px!important;border-right:1px solid #DDD!important;height:90px!important;}.inline-ad .ad a {float:left!important;}.inline-ad .ad p {float:left!important;width:250px!important;padding-left:10px!important;}div#posts-loading {background:transparent -moz-linear-gradient(center bottom,rgba(237,233,220,1) 0%,rgba(237,233,220,0) 100%)!important;txt-shadow:0 1px 7px rgba(0,0,0,0.8)!important;color:#6A5C49!important;}#posts-loading img {height:0!important;width:0!important;padding-top:16px!important;padding-left:16px!important;background: url(data:image/gif;base64,R0lGODlhEAAQAPQAAP///2pcSfr6+Yp/cLawp21fTYB0ZObk4cvHwHZqWK6nnaWdke7t68K8td3a1pOJfJyShgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat!important;}.a#new-post.big,button#new-post{top:0!important;}.topdata ul li a,.topdata ul li.postType {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAD+CAYAAADGQw4jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NEI1OUJENzIyQjNERjExQTBBMzk2RjhBNTk3QjdFMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNjFDMTM3MEI0ODIxMURGQTk5NEU3MjFCMzIyMTUwRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNjFDMTM2RkI0ODIxMURGQTk5NEU3MjFCMzIyMTUwRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENzZCRjRFQzgyQjRERjExQTIxMEQzQTlBRkIyNUU5OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NEI1OUJENzIyQjNERjExQTBBMzk2RjhBNTk3QjdFMyIvPiA8L3JkZjpEZXNjcmlwdGlv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) no-repeat top left!important;}.snap ul li.postType{background-position:0 -80px!important;}.code ul li.postType{background-position:0 -53px!important;}.link ul li.postType{background-position:0 -28px!important;}.question ul li.postType{background-position:0 3px!important;}.topdata ul li a.likes {background-position:0 -96px!important;}.topdata ul li a.view {background-position:3px 3px!important;text-indent:-9999px!important;width:0px!important;}.topdata ul li a.likes.on {background-position:0 -120px!important;color:#4C92E9!important;}.topdata ul li a.comments {background-position:0 -71px!important;}.activity.new_comment ul li.postType{background-position:0 -71px!important;}.activity.like ul li.postType{background:none!important;}.topdata p.top-meta {font-size:0.88em!important;}a#new-post.big,button#new-post {top:0px!important;}div#main-col,div#sidebar {float:none!important;}#sidebar {clear:both!important;}#post-panel {width:420px!important;overflow:hidden!important;float:left!important;}#post-panel .body {background:none!important;padding:0!important;}#post-panel .left {width:250px!important;}#post-panel div.post.snap div.snap-wrapper div.content {padding:0!important;margin:0!important;background:none!important;width:400px!important;max-width:none!important;float:left!important;}#post-panel .right {float:right!important;margin-left:10px!important;clear:both!important;}#post-panel div.post.snap div.snap-wrapper img {max-width:400px!important;max-height:350px!important;float:none!important;}#post-panel div.post.snap div.snap-wrapper a {text-align:center;}#post-panel div.post.snap {margin-bottom:15px!important;}#post-panel #like-land {width:400px!important;padding:0!important;clear:both!important;margin-top:15px!important;}#post-panel #like-land a.other-user {margin:0!important;}#post-panel .post.snap {width:420px!important;text-align:center!important;}#post-panel .body .post.question,#post-panel .body .post.code,#post-panel .body .post.link {}#post-panel .body .post.question,#post-panel .body .post.code,#post-panel .body .post.link .right {}#post-panel .body .post.question .content,#post-panel .body .post.code .content,#post-panel .body .post.link .content {font-size:1em!important;line-height:1.5em!important;width:400px!important;}#post-panel .body .post.question h3 a,#post-panel .body .post.code h3 a,#post-panel .body .post.link h3 a {font-size:2em!important;}#comment-land {margin:0!important;margin-left:15px!important;padding:0!important;width:500px!important;overflow:hidden!important;float:right!important;border-left:1px solid #C8C5B7!important;padding-left:20px!important;-moz-box-shadow:inset 1px 0px 0px rgba(255,255,255,0.5);-webkit-box-shadow:inset 1px 0px 0px rgba(255,255,255,0.5);}.comment {margin-bottom:9px!important;border-bottom:1px solid rgba(200,197,183,0.5)!important;-moz-box-shadow:0 1px 0px rgba(255,255,255,0.5);-webkit-box-shadow:0 1px 0px rgba(255,255,255,0.5);}#comments div.comment p span.timestamp,#comments div.comment p a {font-size:11px!important;line-height:1.3em!important;}#comments div.comment .body div p,#comments div.comment .body div a {font-size:13px!important;line-height:1.3em!important;}#comments div.comment h6 {margin-bottom:3px!important;}#comments div.comment h6 a {text-decoration:none!important;}#comments div.comment h6 a img {border:1px solid #FFF!important;width:20px!important;height:20px!important;-moz-box-shadow:0 0 2px rgba(0,0,0,0.3);-webkit-box-shadow:0 0 2px rgba(0,0,0,0.3);vertical-align:middle!important;background:#FFF!important;margin-right:3px!important;}#comments div.comment div.left.body {width:500px!important;}#comment-land h5 {padding:7px 0 0px 0!important;font-size:18px!important;background:none!important;}#comment-land a.add-comment,#comment-land button.form-add-comment {background:transparent -webkit-gradient( linear,left top,left bottom,color-stop(0,rgb(248,251,243)),color-stop(1,rgb(234,237,230))),!important;background-image:-moz-linear-gradient( center top,rgb(248,251,243) 0%,rgb(234,237,230) 100%)!important;text-indent:0!important;font-size:14px!important;font-weight:bold!important;border:1px solid #B1B3AD!important;-webkit-box-shadow: inset 0 0 1px rgba(255,255,255,1);-moz-box-shadow: inset 0 0 1px rgba(255,255,255,1);box-shadow: inset 0 0 1px rgba(255,255,255,1);-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;font-family:\'Helvetica Neue\',Helvetica,Arial,sans-serif!important;color:#82847F!important;text-shadow:0 1px 0 rgb(255,255,255)!important;height:auto!important;width:auto!important;padding:5px 10px!important;text-decoration:none!important;}#comment-land form fieldset div textarea {width:300px!important;}</style>');

//If on a post list page
if (new RegExp('^http://forrst.com/(activity/|posts/(popular|filtered)/|people/\w+/(posts|likes))', 'i').test(document.location.href)) {
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
				
				if ($(this).is('.new_comment')) top += ' &#9658; ';
				else if ($(this).is('.like')) top += ' &hearts; ';
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
		
		//Init vars
		if (modPost.leftPos === undefined) {
			modPost.leftPos = 0;
			modPost.rightPos = 0;
		}
		
		//Align post
		$(this).css({
			position: 'absolute',
			float: 'none'
		});
		
		if (modPost.leftPos <= modPost.rightPos) {
			$(this).css({
				left: 0,
				top: modPost.leftPos
			});
			
			modPost.leftPos += $(this).outerHeight(true);
		}
		else {
			$(this).css({
				right: 0,
				top: modPost.rightPos
			});
			
			modPost.rightPos += $(this).outerHeight(true);
		}
			
		$(this).addClass('modded');
	}
	
	$('.body .activity').each(modPost); //Mod all posts
	
	var nextNewPostsId = 0;

	//Override applyLibs function - called when new posts are loaded
	unsafeWindow.Posts.applyLibsOld = unsafeWindow.Posts.applyLibs;
	unsafeWindow.Posts.applyLibs = function () { 
		unsafeWindow.Posts.applyLibsOld(); //Call old function first
		
		//Mod all new posts
		$('.body .activity:not(.modded)').each(modPost);
	};
}