import { overlog } from './index.js'
const lines = []
lines.push( 'there is a house in New Orleans' )
lines.push( 'they call the Rising Sun' )
lines.push( 'and it has been the ruin of many a poor boy' )
lines.push( 'in god I know I have won' )
lines.push( '' )

let counter = 0
const write = ( lines, interval ) => {
  if ( counter >= lines.length ) { if ( interval ) { clearInterval( interval ) } overlog( '\r\n' ); return }
  overlog( lines[ counter ], true )
  counter++
}

write( lines )
const writer = setInterval( () => write( lines, writer ), 3000 )
