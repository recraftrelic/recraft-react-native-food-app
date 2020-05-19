import React from 'react';
import { StyleSheet, View, ViewStyle, TextInput, TextInputProps, Platform } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ErrorText from './ErrorText';

const isIOS = (): Boolean => Platform.OS == "ios";

interface Props extends TextInputProps {
    errors: string[];
};

const Input: React.FunctionComponent<Props> = (props: Props) => {
    const theme: AppTheme = useTheme();
    const { errors, ...restProps } = props;

    return (
        <> 
            <View style={[style.searchContainer, { borderBottomColor: theme.highlightTextColor }]}>
                <View style={style.textContainer}>
                    <TextInput
                        placeholderTextColor={theme.highlightTextColor}
                        style={[style.textContainer, { color: theme.highlightTextColor }]}
                        {...restProps}
                    />
                </View>
            </View>
            <View style={style.errorContainer}>
                <ErrorText
                    errors={errors}
                /> 
            </View>
        </>
    );
};

export default Input;

interface Style {
    textContainer: ViewStyle;
    errorContainer: ViewStyle;
    searchContainer: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    textContainer: {
        flex: 2,
        paddingBottom: isIOS() ? 0 : 4, 
        height: isIOS() ? 15 : 35,
        paddingLeft: isIOS() ? 3 : 5, 
    },
    errorContainer: {
        flex: 1, 
        alignSelf: 'flex-start',
    },
    searchContainer: {
        borderBottomWidth: 0.5,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: isIOS() ? 20 : 10,
        paddingBottom: isIOS() ? 10 : 0,
    },
})
