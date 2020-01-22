let gifts=["manel","ahmet","selim"];
 
function writeCards( gifts, event ) {
 
  for ( let i = 0; i < gifts.length; i++ ) {
    console.log( `Thank you, ${gifts[i]}, for the wonderful ${event} gift!` )
  }
  return gits;
}
writeCards(gifts,"birthday");
function countdown( n ) {
  while ( n > 0 ) {
    console.log( n );
    n --;
  }
  console.log( n );
}