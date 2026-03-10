// memo
let lastInput

/**
 * Side-effect: Writes a line to the console, optionally cleaning up the previous output.
 *
 * @param {string} input - The string to write to the console.
 * @param {boolean} [cleanOutput] - Whether to pad the input with spaces to overwrite the previous line.
 * @returns {void}
 */
const overlog = ( input, cleanOutput ) => {
  if ( cleanOutput && typeof lastInput !== 'undefined' ) {
    const diff = lastInput.length - input.length
    if ( diff > 0 ) { input += Array( diff ).fill( ' ' ).join( '' ) }
  }
  process.stdout.write( input )
  lastInput = input
  if ( input !== '\r\n' ) process.stdout.cursorTo( 0 )
}

export { overlog }
