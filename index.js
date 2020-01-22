let names=["selim","ahmet","murat"];
function writeCards( names, event ) {
  let thankYouCards = []
  for ( let i = 0; i < names.length; i++ ) {
    thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
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