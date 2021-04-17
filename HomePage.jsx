import React, { Component } from 'react'
import { View, StyleSheet, TextInput, FlatList, ScrollView } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import cat from "./assets/cat.png";
import dog from "./assets/dog1.png";
import dog1 from "./assets/dog2.png";
import Contact from './Contact';

const windowHeight = Dimensions.get('window').height;

export default class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    imgUrl: cat,
                    name: "Pastel",
                    type: "cat",
                    age: "2 years old",
                    location: "93 Shoreline Dr ..."
                },
                {
                    imgUrl: dog,
                    name: "Raka",
                    type: "dog",
                    age: "1.3 years old",
                    location: "93 Shoreline Dr ..."
                },
                {
                    imgUrl: dog1,
                    name: "Jhony",
                    type: "doy",
                    age: "2 years old",
                    location: "93 Shoreline Dr ..."
                },
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <EvilIcons name="search" size={24} color="black" />
                    <TextInput style={{ marginRight: 20 }} placeholder="Search here" />
                </View>
                <ScrollView>
                    <FlatList
                        data={this.state.data}
                        renderItem={(data) => {
                            return (
                                <Contact data={data} />
                            )
                        }}
                        keyExtractor={(item, index) => index}
                    />
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F6F6F6",
        display: "flex",
        height: windowHeight
    },
    inputContainer: {
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 12,
        margin: 9,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
})