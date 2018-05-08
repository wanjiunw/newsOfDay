/** [Lecture83] 
    Ajax request to external API
**/

$(document).ready(function(){
	var url = 'https://hn.algolia.com/api/v1/search?query=front end';

	$.getJSON( url, function(data) {
	 	//console.log('getJSON');
	 	//console.log('data:',data);
	 	
	 	var quotes = data.hits;
	 	//console.log('data.hits',quotes);
	 	var currentQuote = " ";

	 	$('.read').on('click',function(){	 		
			currentQuote = quotes[Math.floor(Math.random()*quotes.length)];
	 		console.log(currentQuote.url);
	 		console.log(currentQuote.title);
	 		console.log(currentQuote.author);
	 		$('.quoteBody').hide();
	 		$('.quoteBodyLink').attr('href',currentQuote.url);
	 		$('.quoteBodyLink').attr('target','_blank');
	 		$('.quoteBodyLink').html(currentQuote.title);	 		
	 		$('.quoteAuthor').html("-"+" "+ currentQuote.author);

	 		$('.tweetQuote')
                .attr(
                    'href',
                    'https://twitter.com/intent/tweet?text= ' + currentQuote.title + '  - ' + currentQuote.author
                )
                .attr('target', '_blank')
                .attr('disabled',false);
            $('.read').html('Show me one more');			
	 	});

	 });
});