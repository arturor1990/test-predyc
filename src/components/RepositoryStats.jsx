
import { View } from "react-native";
import Styledtext from "./Styledtext";


const ParseThousands = value => {
    return value >= 1000 ? `${Math.round(value/100)/10}K` :  String(value)
}


const RepositoryStats = props => {
    return(       
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <View>
                <Styledtext align='center'>{ParseThousands(props.stargazersCount)}</Styledtext>
                <Styledtext align='center' fontWeight='bold'>Stars</Styledtext>
            </View>
            <View>
                <Styledtext align='center'>{ParseThousands(props.forksCount)}</Styledtext>
                <Styledtext align='center' fontWeight='bold'>Forks</Styledtext>
            </View>
            <View>
                <Styledtext align='center'>{props.reviewCount}</Styledtext>
                <Styledtext align='center' fontWeight='bold'>Review</Styledtext>
            </View>
            <View>
                <Styledtext align='center'>{props.ratingAverage}</Styledtext>
                <Styledtext align='center' fontWeight='bold'>Ratinga</Styledtext>
            </View>
        </View> 
    )
}

export default RepositoryStats;