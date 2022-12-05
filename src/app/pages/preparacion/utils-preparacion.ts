export function randomPlaca(length:number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function randomMarca() {
    let marcas:any[]=['Mazda', 'Chevrolet', 'Ford', 'Camaro', 'Kia', 'Dodge', 'Hyunday', 'Daewoo', 'Ferrari', 'Mercedez Benz', 'Jimp']
    return  marcas[Math.floor(Math.random() * marcas.length)];
}

export function randomModelo() {
    let marcas:any[]=[2020, 2001, 1980, 2022, 2021, 1999, 2002, 2016, 2017, 2018, 2019, 1990, 2000, 2005, 2010, 2011, 2012, 2013, 2014]
    return  marcas[Math.floor(Math.random() * marcas.length)];
}

export function randomKilomnetraje() {
    let marcas:any[]=['0km', '100km', '1000km', '12km', '80km', '2km', '2000km', '50000km', '10km', '30km', '40km']
    return  marcas[Math.floor(Math.random() * marcas.length)];
}

export function randomTransmision() {
    let marcas:any[]=['Hidraulica', 'Electrica', 'Mecanica'];
    return  marcas[Math.floor(Math.random() * marcas.length)];
}
