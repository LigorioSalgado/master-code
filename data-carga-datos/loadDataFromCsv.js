// Cargar los datos con este script.

// 4.- Insertarlo en la base de datos.

const csv = require('csv-parser');
const fs = require('fs');

const results = [];
// 1.- Abrir el archivo. *
fs.createReadStream('e.csv') // Lee un archivo y lo convierte en una linea de datos que se puede leer.
    .pipe(csv())  //  Pipe transforma datos de un stream a algo. (Ese algo yo lo puedo crear)
    // 2.- Leer cada row del archivo. 
    .on('data', (data) => { // Escuchadores de los eventos que detona el pipe y que a su vez detona csv(), data = row del csv

        // 3.- Procesar / Limpiar los datos.
        // Crear el objeto para mongo.
        const sessionClient = {
            device_mac: data.device_mac,
            branch_office: parseInt(data.branch_office),
            month_tz: parseInt(data.month_tz),
            day_tz: parseInt(data.day_tz),
            day_of_week_tz: data.day_of_week_tz,
            hour_tz: parseInt(data.hour_tz),
            conection_date: new Date(`2016-${data.month_tz}-${data.day_tz}T${data.hour_tz}:00:00Z`),
            visitor: data.visitor === 'true',
            tiempodeses: parseInt(data.tiempodeses),
        };
        results.push(sessionClient);
    })
    .on('end', () => {
        console.log(results);
        for (let i = 0; i < 5; i++) { 
            // Meter a la base de datos (SOLO 5 PARA PRUEBA)
            
            
        }
    })
