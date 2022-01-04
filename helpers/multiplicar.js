const colors = require('colors');
// Libreria para manipular archivos
const fs = require('fs');

const tablaMultiplicar = async (base = 5, listar = false, hasta = 10) => {
    try {
        if (listar) {
            console.log("===============");
            console.log(`Tabla del ${base}`.blue)
            console.log("===============");
        }
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        listar && console.log(salida.yellow);
        // Escribiendo un archivo
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt`.red;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    tablaMultiplicar
}