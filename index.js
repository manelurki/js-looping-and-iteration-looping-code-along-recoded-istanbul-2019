let names=["selim","ahmet","murat"];
function writeCards( names, event ) {
  let thanks = []
  for ( let i = 0; i < names.length; i++ ) {
    thanks.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
  }
  return thanks
}

writeCards(gifts,"birthday");
function countdown( n ) {
  while ( n > 0 ) {
    console.log( n-- );
   
  }

}
countdown(11);