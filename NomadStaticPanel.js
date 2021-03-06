import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function({ title, children }) {
    return (
        <View>
            { title &&
            <View style={styles.titleContainer} >
                <Text style={styles.title}>{title}</Text>
            </View>
            }
            <View style={styles.panelContainer} >
                {children}
            </View>
        </View>               
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: "center",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: "#e0e0e0"
    },
    title: {
        fontWeight: '700'
    },
    panelContainer: {
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: "#f2f7f4"
    }
});
