// ==UserScript==
// @name			Two-column Forrst
// @namespace      	twocolumnforrst
// @description		Two-columnifying Forrst.
// @include			http://forrst.com/posts/*
// @include			http://forrst.com/
// @include			http://forrst.com/activity/*
// @include			http://forrst.com/people/*/posts*
// @include			http://forrst.com/people/*/likes*
// @include			http://forrst.com/settings
// @author			Eric Wolf
// @version			1.0
// ==/UserScript==

//Enable both two-column post lists and comments after installation
if (localStorage['two-column-lists'] === undefined) {
	localStorage['two-column-lists'] = true;
	localStorage['two-column-comments'] = true;
}

//Returns outer HTML - if multiple elements are selected, HTML is chained
$.fn.outerHTML = function() {
	return $('<div>').append(this.clone()).html();
};

//If on a post list page
if (localStorage['two-column-lists'] &&
	new RegExp('^http://forrst.com/(activity/|posts/(popular|search|filtered/)|people/\\w+/(posts|likes))', 'i')
	.test(document.location.href)) { 
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

	setTimeout(function() {
		$('.body .activity:not(.modded)').each(modPost);
	}, 40);
}
//If on a single post page
else if (localStorage['two-column-comments'] &&
		 new RegExp('^http://forrst.com/posts/(?!popular|filtered)').test(document.location.href)) {
	$('#post-panel').find('.top, .bottom').remove();
	
	var content = $('#post-panel .content').outerHTML();
	$('#post-panel .content').remove();
	
	var post = $('#post-panel .post').outerHTML();
	var tags = $('#post-panel .tags').outerHTML();
	
	$('#post-panel .left').remove();
	$('#post-panel .body').prepend(post);
	
	var likes = $('#like-land').outerHTML();
	$('#like-land').remove();
	
	$('#post-panel .post').after('<div class="left">' + content + tags + likes + '</div>');
}
//Settings page
else if (document.location.href == 'http://forrst.com/settings') {
	//Inject controls
	$('.controls').before(
		'<div class="inline">' + 
			'<h4>Two-column Forrst:</h4>' +
			'<input id="two-column-lists" type="checkbox" />' + 
			'<label for="two-column-lists">Two-column post lists</label>' +
		'</div>' +
		'<div class="inline">' + 
			'<input id="two-column-comments" type="checkbox" />' + 
			'<label for="two-column-comments">Two-column comments</label>' +
		'</div>'
	);
	
	//Load values
	if (localStorage['two-column-lists']) $('#two-column-lists').attr('checked', true);
	if (localStorage['two-column-comments']) $('#two-column-comments').attr('checked', true);
	
	//Workaround: GM_setValue cannot be called from unsafeWindow context
	var triggerSave = false;
	
	setInterval(function() {
		if (triggerSave) {
			localStorage['two-column-lists'] = $('#two-column-lists').is(':checked');
			localStorage['two-column-comments'] = $('#two-column-comments').is(':checked');
			
			triggerSave = false;
		}
	}, 40);
	
	$('.controls button').click(function() {
		triggerSave = true;
	});
}