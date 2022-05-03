import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, FlatList, Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from "react";
import {Touchable} from "react-native-web";


export default function App() {

    const SampleGoals= [
        'Faire les courses',
        'Aller à la salle de sport 3 fois par semaine',
        'Monter à plus de 5000m d altitude',
        'Acheter mon premier appartement',
        'Perdre 5 kgs',
        'Gagner en productivité',
        'Apprendre un nouveau langage',
        'Faire une mission en freelance',
        'Organiser un meetup autour de la tech',
        'Faire un triathlon'
    ];

    const list = (List) => {
        return List.map((Goal, index) => {
            return (
                <View><Text key={index}>{Goal}</Text><TouchableOpacity style={styles.button}
                                                                       onPress={() =>SuppList(index)}><Text>Supprimer</Text></TouchableOpacity></View>);
        });
    }

    const [text, setText] = React.useState("");
    const[List, setListe] = React.useState(SampleGoals);
    const onPress = () => setListe([...List,text]);
    const SuppList = (key) => setListe(List.filter((text) =>text.key));


  return (
    <View style={styles.container}>
        <ImageBackground source={require('./assets/bckg.jpg')} resizeMode="cover" style={styles.image}>

      <Text style={styles.textUn}>test</Text>
      <Text>Open up <Text style={styles.textDeux}>App.js</Text> start working on your app!</Text>
            {list(List)}
        <View style={{flexDirection:'row'}}>
        <TextInput style={styles.input} placeholder="Votre texte ici" onChangeText={(value) => setText(value)}/>
        <TouchableOpacity style={styles.button} onPress={onPress}><Text>Add</Text></TouchableOpacity>
        </View>

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
    }
});

