let empleados = [{
        id: 1,
        nombre: "Santiago"
    },
    {
        id: 2,
        nombre: "Wendy"
    },
    {
        id: 3,
        nombre: "Leo"
    }
];

let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con id ${id}`);
    } else {
        resolve(empleadoDB);
    }
}

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
        throw new Error(`No se encontró salario para el empleado ${empleado.nombre}`);
    } else {
        return ({ nombre: empleado.nombre, salario: salarioDB.salario });
    }

}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `el salario de  ${resp.nombre}es de ${resp.salario}`;
}

getInformacion(2)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));


