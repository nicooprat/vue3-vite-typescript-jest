// Setup mocks
global.import_meta = global.import_meta || {}
global.import_meta.globEager = global.import_meta.globEager || function() { }
import.meta.test = 'test'
import.meta.globEager = import.meta.globEager || function() {}

// Check if it works
import.meta.globEager('./*.css')
console.log(import.meta)
