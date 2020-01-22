
function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

writeCards(gifts,"birthday");
function countdown( n ) {
  while ( n > 0 ) {
    console.log( n );
    n --;
  }
  console.log( n );
}