import React from "react";
//import Constants from 'expo-constants'
import {View ,Text} from "react-native";
import RepositoryList from "../pages/RepositoryList";
import AppBar from "./AppBar";
import {Routes, Route} from 'react-router-native'
import LogInPage from '../pages/LogIn'

// const AppBar = Platform.select({
//     ios: () => require('./IOSAppBar').default,
//     default: () => require('./AppBar').default

// })();

const Main = () => {


    // return(
    //     <View style={{ flex:1}}>
    //         <AppBar />
    //         <RepositoryList />
    //     </View>
    // )        paddingTop: Constants.statusBarHeight + 10,

    
    const respuesta =         
    <View style={{flex: 1}}>
        <AppBar />
        <Routes>
            <Route path='/'
                element={<RepositoryList />}
            />
            <Route path='/signin'
                element={<LogInPage />}
                />
        </Routes>
    </View>;



    return (respuesta);


}

export default Main;