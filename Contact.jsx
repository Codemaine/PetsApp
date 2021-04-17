import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class Contact extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
                <View style={styles.avatarContainer}>
                                    <Image source={this.props.data.item.imgUrl} style={styles.avatar} />
                                    <View style={styles.infoContainer}>
                                        <Text style={styles.name}>{this.props.data.item.name}</Text>
                                        <Text style={styles.info}>{this.props.data.item.type}</Text>
                                        <Text style={styles.info}>{this.props.data.item.age}</Text>
                                        <View style={{
                                            paddingVertical: 10,
                                            flexDirection: "row",
                                            alignItems: "center"
                                        }}>
                                            <Ionicons name="location-outline" style={{ paddingLeft: -5, marginLeft: -5 }} size={20} color="black" />
                                            <Text style={{ color: "#ADADB1", fontSize: 15 }}>{this.props.data.item.location}</Text>
                                        </View>
                                    </View>
                                </View>
        )
    }
}

const styles = StyleSheet.create({ 
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 20,
        borderColor: "transparent"
    },
    avatarContainer: {
        display: "flex",
        flexDirection: "row",
        margin: 10
    },
    infoContainer: {
        alignSelf: "center",
        backgroundColor: "#fff",
        // justifyContent: "center",
        padding: 15,
        borderRadius: 20,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        width: 200,
    },
    name: {
        color: "#2D2F81",
        paddingLeft: 2,
        fontSize: 20,
        fontWeight: "bold"
    },
    info: {
        display: "flex",
        fontSize: 15,

        paddingVertical: 8,
        color: "#ADADB1"
    }
 })

export default Contact
