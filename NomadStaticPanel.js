import React from 'react';
import { Text, View } from 'react-native';

export default function({ title, children }) {

    return (
        <View>
            { title &&
            <View>
                <View style={styles.titleContainer} >
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
            }
            <View style={styles.panelContainer} >
                {children}
            </View>
        </View>               
    );
};

let styles = {
    titleContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        padding: 10,
        alignItems: "center",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
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
    }
};