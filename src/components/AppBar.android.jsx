import React from "react";
import {StyleSheet,View,ScrollView} from 'react-native';
import Styledtext from "./Styledtext";
import Constants from 'expo-constants';
import theme from "../theme";
import { Link,useLocation } from "react-router-native";
import { TouchableWithoutFeedback } from "react-native";


const styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight +10,
        backgroundColor: '#586069',
        flexDirection:"row"
    },
    scroll:{
        paddingBottom: 15
    },
    text:{
        color: theme.appBar.textSecundary,
        paddingHorizontal:10
    },
    active:{
        color:theme.appBar.tetxtPrimary
    }

});

const AppBarTab = ({children,to}) => {
    const {pathname} = useLocation();
    //let pathname= useLocation().pathname;
    const active = pathname === to;
    const textStyles = [
        styles.text, active && styles.active
    ]

    return <Link to ={to} component={TouchableWithoutFeedback}>
        <Styledtext fontWeight='bold' style={textStyles}>
            {children}
        </Styledtext>
    </Link>
}

const AppBar = () => {

    //console.log(userLocation());
    return(
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sing In</AppBarTab>
            </ScrollView>
        </View>
    )


}

export default AppBar;

