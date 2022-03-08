/*

    SÍNCRONO vs ASSÍNCRONO

*/


function primeira() {
    console.log('primeira')
    for(index = 0; index < 500000000; index++) { //teste p demorar

    }
}

function segunda() {
    console.log('segunda')
}

primeira()

segunda()