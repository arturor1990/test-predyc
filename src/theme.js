import { Platform } from "react-native";

const theme ={
    appBar:{
        primary:'#24292e',
        tetxtPrimary:'#fff',
        textSecundary: '#888',
    },
    colors:{
        tetxtPrimary: '#24292e',
        textSecundary: '#586069',
        primary: '#0366d6',
        white: '#fff',
    },
    fontSizes:{
        body: 14,
        subheading:16
    },
    font:{
        //main:'System'
        main: Platform.select({
            ios: 'Arial',
            android: 'Roboto',
            default: 'System'
        }),
    },
    fontWeight:{
        nomarl:'400',
        bold:'700'
    }

}

export default theme;