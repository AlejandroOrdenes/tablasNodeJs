const fs = require('fs');

let salida = ''

const crearArchivo = async( base=5, listar=true, hasta=10 ) => {

    try {
        for(let i = 1; i <= hasta; i++ ) {
            salida += `${ base } * ${ i } = ${ base * i}\n`;
        };
        if( listar ){
            console.log('==================')
            console.log(`   Tabla del ${ base }`)
            console.log('==================')
            console.log( salida.green );
        } 
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        
        return `tabla-${ base }.txt`;
    } catch (err) {
        throw err;
    }

};

module.exports = {
    crearArchivo
}