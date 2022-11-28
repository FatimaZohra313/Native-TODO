import React, { useState } from "react";
import { View , Text,TextInput,StyleSheet, Button, TouchableOpacity } from "react-native";


function App(){
  let [txt,setTxt] = useState("")
  let [list,setList] = useState([])


  function add(){
    console.log("Add function");
    setList([...list,txt])
    // setTxt("")
    
    
  }
  function del(i){
    const txtList = [...list];
    txtList.splice(i,1)
    setList([...txtList])
    

  }
  function remove(){
    list = "";
    setList([...list])
    } 

  return(
    <View style={styles.container}>
      <View style={{border:3}}>
      <Text style={{fontSize:30,textAlign:"center",fontWeight:"bold",color:"#EC8B5E",marginTop:50,}}>TO DO</Text>
      <TextInput onChangeText={(e)=>setTxt(e)} style={styles.input} placeholder="Enter your text"/>
      {/* <Text>{txt}</Text> */}
      {list.map((x,i)=><View><Text style={{color:"white", fontSize:20,}} key={i}>{x} <Button onPress={()=>del(i)} color="#EC8B5E" title="Delete"/></Text></View>)}
      <TouchableOpacity style={{margin:10}}><Button style={styles.button} onPress={add} title="ADD" color="#EC8B5E"/></TouchableOpacity>
      <TouchableOpacity style={{margin:10}}><Button style={styles.button} onPress={remove} title="Remove All" color="#EC8B5E"/></TouchableOpacity>
      
     
    
      </View>

      
    </View>
  )
}

export default App;


const styles = StyleSheet.create({
  container:{
    padding:30,
    // margin:10,
    backgroundColor:"#141A46",
    height:"100%",
    
    
  },
  input:{
    width:"100%",
    padding:10,
    fontSize:15,
    marginTop:10,
    marginBottom:10,
    backgroundColor:"white",
    // borderWidth:2,

  },
  button:{
    padding:20,
    // borderBottomColor:"#0b748e",
    // borderTopColor:"#0b748e",
    border:2,

    

  }
})