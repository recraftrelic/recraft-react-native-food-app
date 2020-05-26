import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import useTheme from "../../hooks/useTheme";
import { AppTheme } from "../../config/DefaultConfig";
import ThemedText from '../UI/ThemedText';

interface Props {
    label: string;
};

const ControlPanel: React.FunctionComponent<Props> = ({
    label,
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View style={style.mainContainer}>
            <View style={[style.imageStyle, {backgroundColor: theme.highlightTextColor}]}>
              <ThemedText styleKey="textColor" style={style.userNameStyle}>{label}</ThemedText>
            </View>
        </View>
    );
};

export default ControlPanel;

interface Style {
    mainContainer: ViewStyle;
    imageStyle: ViewStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    mainContainer: {
        flex: 1,
        padding: 0,
        margin: 0,
        fontSize: 16,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    imageStyle: { 
        width: '100%', 
        height: '100%',
        paddingTop: 50
    },
    userNameStyle: {
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    }
})
