import react,{ Component } from "react";
import { View, StyleSheet, Modal, TextInput, Image, Text, ScrollView, Button, TouchableOpacity } from "react-native";
import ModalView from "./src/components/ModalView";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      alcohol: "",
      gasoline: "",
      alcIsWorth: false,
      modalIsOpen: false,
    }

    this.doCalc = this.doCalc.bind(this);
    this.exit = this.exit.bind(this);
  }

  exit(){
    this.setState({modalIsOpen: false});
  }

  doCalc(){
    let alcoholPrice = Number(this.state.alcohol);
    let gasolinePrice = Number(this.state.gasoline);
 
    if(this.state.alcohol === '' || this.state.gasoline === ''){
      return;
    }

    if(alcoholPrice/gasolinePrice < 0.7){
      this.setState({alcIsWorth: true})
      console.log(this.state.alcIsWorth);
    }else{
      this.setState({alcIsWorth: false});
    }

    this.setState({modalIsOpen: true});
  }

  render(){
    return(
      <ScrollView style={styles.container}>
        <View style={styles.logoView}>
          <Image source={require('./src/img/logo.png')} style={styles.logoImg}/>
          <Text style={styles.logoTitle}>What's the best option?</Text>
        </View>
        <View style={styles.calculatorView}>
          <View>
          <Text style={styles.calculatorTexts}>Alcohol (Price per Liters)</Text>
          <TextInput placeholder="2.00" keyboardType="numeric" style={styles.textInputs} onChangeText={(text) => this.setState({alcohol: text})} />
          </View>
          <View>
          <Text style={styles.calculatorTexts}>Gasoline (Price per Liters)</Text>
          <TextInput placeholder="7.00" keyboardType="numeric" style={styles.textInputs} onChangeText={(text) => this.setState({gasoline: text})}/>
          </View>
        </View>

        <TouchableOpacity style={styles.btnCalc} onPress={this.doCalc}>
          <Text style={styles.btnCalcText}>Calculate</Text>
        </TouchableOpacity>
        <Modal animationType="slide" visible={this.state.modalIsOpen} style={styles.modalView} >
          <ModalView exit={this.exit} isAlc={this.state.alcIsWorth} alcoholPrice={this.state.alcohol} gasolinePrice={this.state.gasoline} />
        </Modal>
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121'
  },
  logoView:{
    flex: 1,
    marginTop: 50,
    gap: 20,
    alignItems: 'center'
  },
  logoTitle:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  calculatorView:{
    flex: 1,
    margin: 20,
    gap: 25,
  },
  calculatorTexts: {
    fontSize: 20,
    color: '#fff',
  },
  textInputs: {
    marginTop: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: 18
  },
  btnCalc:{
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#900',
    borderRadius: 10,
  },
  btnCalcText:{
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',

  },
  modalView:{
    flex:1,
  }
})

export default App;