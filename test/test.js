// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Node utilities:
	util = require( 'util' ),

	// Module to be tested:
	Text = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'Text', function tests() {
	'use strict';

	// SETUP //

	var text;

	beforeEach( function() {
		text = new Text();
	});


	// TESTS //

	it( 'should do export a constructor', function test() {
		expect( Text ).to.be.a( 'function' );
	});

	describe( 'content', function tests() {

		it( 'should provide a method to set/get text content', function test() {
			expect( text.content ).to.be.a( 'function' );
		});

		it( 'should throw an error if provided non-string content', function test() {
			var values = [
					5,
					true,
					undefined,
					null,
					function(){},
					{},
					[],
					NaN
				];

			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[ i ] ) ).to.throw( TypeError );
			}

			function badValue( value ) {
				return function() {
					text.content( value );
				};
			}
		});

		it( 'should set text content', function test() {
			text.content( 'beep' );
			assert.strictEqual( text.content(), 'beep' );
		});

		it( 'should replace any existing content', function test() {
			text.content( 'beep' )
				.content( 'boop' );

			assert.strictEqual( text.content(), 'boop' );
		});

	});

	describe( 'append', function tests() {

		it( 'should provide a method to append content', function test() {
			expect( text.append ).to.be.a( 'function' );
		});

		it( 'should throw an error if provided non-string content', function test() {
			var values = [
					5,
					true,
					undefined,
					null,
					function(){},
					{},
					[],
					NaN
				];

			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[ i ] ) ).to.throw( TypeError );
			}

			function badValue( value ) {
				return function() {
					text.append( value );
				};
			}
		});

		it( 'should append content', function test() {
			text.content( 'beep' )
				.append( 'boop' );

			assert.strictEqual( text.content(), 'beepboop' );
		});

	});

	describe( 'toString', function tests() {

		it( 'should provide a method to serialize a text node', function test() {
			expect( text.toString ).to.be.a( 'function' );
		});

		it( 'should serialize a text node', function test() {
			text.content( 'beep' );
			assert.strictEqual( text.toString(), 'beep' );
		});

	});

});