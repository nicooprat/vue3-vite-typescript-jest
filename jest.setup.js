global.import_meta = global.import_meta || {}
global.import_meta = global.import_meta.globEager || function() { }
import.meta.test = 'test'
import.meta.globEager('./*.css')

console.log(import.meta)
