import { View , StyleSheet, Image, Platform} from "react-native";
import Styledtext from "./Styledtext";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";


const RepositoryItemHeader = ({ownerAvatarUrl,fullName,description,language}) => (

    <View style={{flexDirection:"row", paddingBottom:2}}>
        <View style={{paddingRight: 10}}>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl}}></Image>
        </View>
        <View style={{flex:1}}>
            <Styledtext fontWeight='bold'>{fullName}</Styledtext>
            <Styledtext color='secundary'>{description}</Styledtext>
            <Styledtext style={styles.language}>{language}</Styledtext>
        </View>
    </View>

)


const RepositoryItem = (props) => {


    return(
    <View key={props.id} style={ styles.container }>
        <RepositoryItemHeader {...props}/>
        <RepositoryStats {...props} />
    </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 20, 
        paddingBottom: 5, 
        paddingTop: 5
    },
    language :{
        padding:4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        // backgroundColor: Platform.select({
        //     android:theme.colors.primary,
        //     ios: 'orange',
        //     default : 'purple'
        // }),
        alignSelf: "flex-start",
        marginVertical:4,
        borderRadius: 5,
        overflow: "hidden"
    },
    image: {
        width:48,
        height:48,
        borderRadius: 5
    },
    card:{
        paddingLeft:10

    }


})

export default RepositoryItem;