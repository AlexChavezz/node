const fs = require('fs');
const createTable = async (base, numero, boolean) => {

    try {
        let salida = '';

        for (let i = 0; i <= numero; i++) {
            salida += `${base} X ${[i]} = ${base * [i]}\n`;
        }
        if(boolean){
            console.log(salida)
        }else{
        }

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt`);
    }
    catch (err) {
        throw err;
    }



}

module.exports = {
    createTable
}