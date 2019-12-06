import { Platform, StyleSheet } from "react-native";


const styles = SVGAElement.create({
    height: Platform.OS === "ios" ? 200 : 100,
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: "red"
            },
            android: {
                backgroundColor:"blue"
            }
        })
    }
});

