var movieReview = [
        "The best movie this year! ",
        "I laughed, I cried, then I laughed again! ",
        "I could not sleep after seeing this movie! "
    ];
$("img").click(function(){
    movieReview.forEach(function(reviews) {
        $("#movieReviews").append(reviews);
    });
 
});
$("#calculateTotal").click(function(){
    var child = $("#numberChild").val();
    var adult = $("#numberAdult").val();
    var total = child*8 + adult*12;
    $("#totalCost").text( "$" + total);
});
if (child||adult<0 ) {
    $(
}
    
    
    


