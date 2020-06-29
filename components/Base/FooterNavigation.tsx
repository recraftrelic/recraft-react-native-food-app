import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import ThemedText from '../../components/UI/ThemedText';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const isIOS = (): Boolean => Platform.OS == "ios";
const {height, width} = Dimensions.get('window');

interface Props extends RouteComponentProps {
    history: any
}

const FooterNavigation: React.FunctionComponent<Props> = ({
    history
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View style={[style.container, {backgroundColor: theme.mainColor}]}>
            <TouchableOpacity >
                <View style={style.iconContainer}>
                  <Icon name="ios-home" size={45} color={theme.highlightTextColor} />
                  <ThemedText styleKey="highlightTextColor" style={style.IconTitle}>HOME</ThemedText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity >
                <View style={style.iconContainer}>
                  <MaterialIcon name="search-web" size={45} color={theme.highlightTextColor} />
                  <ThemedText styleKey="highlightTextColor" style={style.IconTitle}>SEARCH</ThemedText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity >
                <View style={style.iconContainer}>
                  <Icon name="ios-cart" size={45} color={theme.highlightTextColor} />
                  <ThemedText styleKey="highlightTextColor" style={style.IconTitle}>MY CART</ThemedText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity >
                <View style={style.iconContainer}>
                  <Icon name="md-contacts" size={45} color={theme.highlightTextColor} />
                  <ThemedText styleKey="highlightTextColor" style={style.IconTitle}>ACCOUNT</ThemedText>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default FooterNavigation;

interface Style {
    IconTitle: TextStyle;
    container: ViewStyle;
    iconContainer: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        justifyContent: "space-around",
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: isIOS() ? height-790 : 80,
        alignItems: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    IconTitle: {
        fontSize: 12,
    },
});
