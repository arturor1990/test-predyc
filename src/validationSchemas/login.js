import * as yup from 'yup';


export const LoginValidationSchema = yup.object().shape({

    email: yup
        .string()
        .email('Correo no valido')
        .required('El correo es requerido'),
    password: yup
        .string()
        .min(5, 'Muy Corto')
        .max(1000, 'Muy larga')
        .required('La contraseña es requerido'),

})