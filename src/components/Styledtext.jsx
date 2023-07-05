import { Text, StyleSheet} from "react-native";
import theme from '../theme.js';

const styles = StyleSheet.create({

    text: {
        fontSize: theme.fontSizes.body, 
        color: theme.colors.tetxtPrimary,
        fontWeight: theme.fontWeight.nomarl
    },
    colorPrimary:{
        color:theme.colors.primary
    },
    colorSecundary:{        
        color:theme.colors.textSecundary
    },
    bold :{
        fontWeight: theme.fontWeight.bold,
    },
    subheading:{
        fontSize: theme.fontSizes.subheading
    },
    textAlignCenter:{
        textAlign: 'center'
    }
})

export default function Styledtext ({ align,children,color,fontSize,fontWeight, style, ...restOfProps}) {

    const textStyles = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secundary' && styles.colorSecundary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style


    ]
    return (

        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )

}
