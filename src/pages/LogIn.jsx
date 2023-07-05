import React from "react";
import {View,Button,StyleSheet,Text } from "react-native";
import { Formik, useField } from "formik";
import StyledtextInput from "../components/StyledtextInput";
import Styledtext from "../components/Styledtext";
import {LoginValidationSchema} from '../validationSchemas/login'



const initialValues = {

    email:'',
    password: ''

};

function test (valor){

    //console.log(valor);
}

const styles = StyleSheet.create({

    form: {
        margin: 12
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5,
    }

})


const FormikInputValue = ({name, ...props}) => {


    const [field,meta,helpers] =  useField(name)
    //console.log(meta.error);
    return (
        <>
            <StyledtextInput
                value={field.value}
                error={meta.error}
                //onChange = {test(field)}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <Styledtext style={styles.error}>{meta.error}</Styledtext>}            
        </>
    )



}


// const validate = values => {
    
//     const errors = {};


//     if (!values.email){
//         errors.email = 'Debe indicar un correo electrónico';
//     } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/i.test(values.email)){
//         errors.email = 'El Correo es invalido';
//     }

//     if(!values.password){
//         errors.email = 'Debe especificar una contraseña';
//     }

//     console.log(errors);

//     return errors;

// }

const LogInPage = props => (
    <Formik
      validationSchema={LoginValidationSchema}  
      initialValues={initialValues}
      onChangeText={values => console.log(values)}
      onSubmit={values => console.log(values)}
    >
      {({ handleSubmit ,values}) => (
        <View style={styles.form}>
            <FormikInputValue
                placeholder="E-mail" 
                name = 'email'
                />
            <FormikInputValue
                secureTextEntry={true}
                name = 'password'
                placeholder="Password"
                //onChange={test(values.password)}
            />
            <Button onPress={handleSubmit}  title="Log In"></Button>      
        </View>
      )}
    </Formik>
  );

export default LogInPage;


