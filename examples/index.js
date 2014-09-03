var Text = require( './../lib' );

var text = new Text();

text.content( 'beep' );

for ( var i = 0; i < 10; i++ ) {
	text.append( '!' );
}

console.log( text.toString() );
// Returns 'beep!!!!!!!!!!'