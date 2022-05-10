import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, FlatList, Button, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import React, {useState} from "react";
import {Touchable} from "react-native-web";

const SampleGoals = [
    {
        id:'1',
        title:'Faire les courses',
    },
    {
        id:'2',
        title:'Aller à la salle de sport 3 fois par semaine',
    },
    {
        id:'3',
        title:'Monter à plus de 5000m d altitude',
    },
    {
        id:'4',
        title:'Acheter mon premier appartement',
    },
    {
        id:'5',
        title:'Perdre 5 kgs',
    },
    {
        id:'6',
        title:'Gagner en productivité',
    },
    {
        id:'7',
        title:'Apprendre un nouveau langage',
    },
    {
        id:'8',
        title:'Faire une mission en freelance',
    },
    {
        id:'9',
        title:'Organiser un meetup autour de la tech',
    },
    {
        id:'10',
        title:'Faire un triathlon',
    },
]
export default function App() {

    const [text, setText] = React.useState("");
    const[List, setListe] = React.useState(SampleGoals);
    const onPressModal = () => setListe([...List,{id:List.length+1,title:text.toString()}], hideModal());
    const DeleteItem = (id)=> {
        const filtreListe = List.filter(item => item.id !== id);
        setListe(filtreListe);
    }
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

  return (
    <View style={styles.container}>
        <ImageBackground source={require('./assets/bckg.jpg')} resizeMode="cover" style={styles.image}>
      <Text style={styles.textUn}>test</Text>
      <Text>Open up <Text style={styles.textDeux}>App.js</Text> start working on your app!</Text>
            <FlatList data={List} renderItem={({item}) => <Text >{item.title}
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => DeleteItem(item.id)}>
                        <Text>Supprimer</Text>
                    </TouchableOpacity>
                </View>
            </Text>}/>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.button} onPress={showModal}><Text>Ajouter un objectif</Text></TouchableOpacity>
        </View>
            <Modal animationtype="slide" style={styles.modalStyle} visible={visible} onDismiss={hideModal}>
        <TextInput style={styles.input} placeholder="Votre texte ici" onChangeText={(value) => setText(value)}/>
                <TouchableOpacity style={styles.buttonModal} onPress={onPressModal}><Text>Add</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonModal} onPress={hideModal}><Text>Cancel</Text></TouchableOpacity>
            </Modal>

      <StatusBar style="auto" />
        </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textUn:{
    fontSize:20,
    color:"red",
  },
  textDeux:{
    fontWeight: 'bold',
  },
  input:{
      borderColor: "gray",
      width: "50%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
  },
  image:{
      flex: 1,
      alignItems: 'center',
      justifyContent: "center",
      width: '100%',
      height: '100%',
  },
    button:{
        alignItems: "center",
      backgroundColor:"#6495ed",
        padding:10,
    },
    modalStyle: {
        backgroundColor: 'white',
        padding: 20,
        width:"50%",
    },
    buttonModal:{
        alignItems: "center",
        backgroundColor:"#6495ed",
        padding:10,
        marginTop:30,
        width:"50%",
    }
});

