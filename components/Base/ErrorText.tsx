import React from 'react';
import { StyleSheet, View, TextStyle } from 'react-native';
import ThemedText from '../UI/ThemedText';

interface Props {
    errors: string[];
};

const ErrorText: React.FunctionComponent<Props> = ({
    errors,
}: Props) => {

    return (
        <View>
            {
                errors && errors.length ? 
                    <ThemedText styleKey="errorColor" style={style.textContainer}>{errors[0]}</ThemedText>
                : null
            } 
        </View>    
    );
};

export default ErrorText;

interface Style {
    textContainer: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    textContainer: {
        paddingTop: 10, 
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
})
