function getAdmins(map) {
    let admins = [];

    for ([key, value] of map) {
        if (value === 'Admins') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Falki', 'Admin');
usuarios.set('Thiago', 'Admin');
usuarios.set('Isis', 'Admin');
usuarios.set('Juliana', 'User');

console.log(getAdmins(usuarios));