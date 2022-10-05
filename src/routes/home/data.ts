export const dataTableData = [
        {
                        firstName: 'Ana',
                        lastName: 'Amaya',
                        birthday: '21/12/1981',
                        gender: 'Femenino',
                        cellphone: '011789345121',
                        addressHome: 'San Salvador colonia medica casa 23',
                        profession: 'Enfermera',
                        incomes: '$875',
        },
        {
                        firstName: 'Elsy',
                        lastName: 'Merino',
                        birthday: '17/12/1977',
                        gender: 'Femenino',
                        cellphone: '01178434522',
                        addressHome: 'Santa tecla ciudad Merliot residencial los cipreses casa 11',
                        profession: 'Ama de casa',
                        incomes: '$775',
        },
        {
                        firstName: 'Marina',
                        lastName: 'Caceres',
                        birthday: '23/12/1986',
                        gender: 'Femenino',
                        cellphone: '01178934533',
                        addressHome: 'San vicente cantón tepitetan barrio san jose casa 1',
                        profession: 'Doctora',
                        incomes: '$1,875',
        },
        {
                        firstName: 'Santiago',
                        lastName: 'Sanchez',
                        birthday: '11/12/1977',
                        gender: 'Masculino',
                        cellphone: '01178934379',
                        addressHome: 'La paz zacatecoluc a colonia san jose casa 23',
                        profession: 'Agricultor',
                        incomes: '$575',
        },
        {
                        firstName: 'Marvin',
                        lastName: 'Arevalo',
                        birthday: '17/12/1977',
                        gender: 'Masculino',
                        cellphone: '01178934320',
                        addressHome: 'San Salvador, colina cuscatlan casa 44',
                        profession: 'Enfermero',
                        incomes: '$899',
        },
        {
                        firstName: 'Luis',
                        lastName: 'Carcamo',
                        birthday: '1/12/1977',
                        gender: 'Masculino',
                        cellphone: '01178934320',
                        addressHome: 'San Salvador, colina cuscatlan casa 33',
                        profession: 'Enfermero',
                        incomes: '$899',
        },
]

export const columns = [
        {
                        name: 'First Name',
                        selector: (row: any) => row.firstName,
        },
        {
                        name: 'Last Name',
                        selector: (row: any) => row.lastName,
        },
        {
                        name: 'Birthday',
                        selector: (row: any) => row.birthday,
        },
        {
                        name: 'Gender',
                        selector: (row: any) => row.gender,
        },
        {
                        name: 'Cellphone',
                        selector: (row: any) => row.cellphone,
        },
        {
                        name: 'Address Home',
                        selector: (row: any) => row.addressHome,
        },
        {
                        name: 'Profession',
                        selector: (row: any) => row.profession,
        },
        {
                        name: 'Incomes',
                        selector: (row: any) => row.incomes,
        },
];