import react,{ Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

class ModalView extends Component{

    constructor(props){
        super(props);
        
    }


    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../img/gas.png')} style={styles.gasImg}/>
                <View style={styles.resultView}>
                    <Text style={styles.resultText}>{this.props.isAlc ? 'Alcohol is worth!' : 'Gasoline is worth!'}</Text>
                    <Text style={styles.pricesText}>With The Prices:</Text>
                    <Text style={styles.price}>Alcohol: ${Number(this.props.alcoholPrice).toFixed(2)}</Text>
                    <Text style={styles.price}>Gasoline: ${Number(this.props.gasolinePrice).toFixed(2)}</Text>
                </View>
            <TouchableOpacity style={styles.btnExit} onPress={this.props.exit}>
            <Text style={styles.btnExitText}>Exit</Text>
            </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center',
    },
    resultView:{
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    resultText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#32cd32'
    },
    pricesText:{
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 15,
        color: 'white',
    },
    price:{
        marginTop: 10,
        fontSize: 20,
        color: 'white'
    },
    gasImg: {
        marginTop: 120,
    },
    btnExit:{
        width: '80%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#900',
        borderRadius: 10,
        marginBottom: 100,
    },
    btnExitText:{
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
    }
})

export default ModalView;