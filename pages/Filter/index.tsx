import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, Alert, Modal, TextStyle, TouchableHighlight, Platform } from 'react-native';
import { Dispatch } from 'redux';
import ThemedText from '../../components/UI/ThemedText';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from '../../hooks/useTheme';
import RoundButton from '../../components/Base/RoundButton';
import RangeSlider from 'react-native-range-slider';

const isIOS = (): Boolean => Platform.OS == "ios";

interface Props extends RouteComponentProps {
    dispatch: Dispatch,
    history
}

const Filter: React.FunctionComponent<Props> = ({
    history
  }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {Alert.alert("Modal has been closed.");}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.backContainer}>
              <TouchableHighlight style={styles.leftContainer}>
                <ThemedText styleKey="mainColor" style={styles.modalText}>FILTER</ThemedText>
              </TouchableHighlight>
              <View style={styles.rightContainer}>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: theme.mainColor }}
                  onPress={() => {setModalVisible(!modalVisible);}}>
                  <ThemedText styleKey="highlightTextColor" style={styles.textStyle}>x</ThemedText>
                </TouchableHighlight>
              </View>
            </View>
            <View style={styles.backContainer}>
              <TouchableHighlight style={styles.leftContainer}>
                <ThemedText styleKey="textColor" style={styles.textStyle}>Categories</ThemedText>
              </TouchableHighlight>
            </View>
            <View style={styles.backContainer}>
              <TouchableHighlight style={styles.leftContainer}>
                <ThemedText styleKey="textColor" style={styles.textStyle}>Type of Food</ThemedText>
              </TouchableHighlight>
            </View>
            <View style={styles.backContainer}>
              <TouchableHighlight style={styles.leftContainer}>
                <ThemedText styleKey="textColor" style={styles.textStyle}>Ratings</ThemedText>
              </TouchableHighlight>
            </View>
            <View style={styles.backContainer}>
              <TouchableHighlight style={styles.centerContainer}>
                <ThemedText styleKey="textColor" style={styles.textStyle}>Price Range</ThemedText>
              </TouchableHighlight>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <RangeSlider
                minValue={0}
                maxValue={100}
                tintColor={'#da0f22'}
                handleBorderWidth={1}
                handleBorderColor="#454d55"
                selectedMinimum={20}
                selectedMaximum={40}
                style={{ flex: 1, height: 70, padding: 10, backgroundColor: '#ddd' }}
                onChange={ (data)=>{ console.log(data);} }
              />
            </View>
            <RoundButton buttonStyle={[styles.button, { backgroundColor: theme.mainColor}]} label="APPLY" buttonColor={theme.mainColor} labelStyle={theme.highlightTextColor} />
          </View>
        </View>
      </Modal>
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {setModalVisible(true);}}>
        <ThemedText styleKey="highlightTextColor" style={styles.textStyle}>Show Modal</ThemedText>
      </TouchableHighlight>
    </View>
  );
};

export default Filter;

interface Style {
    centeredView: ViewStyle;
    modalView: ViewStyle;
    openButton: ViewStyle;
    backContainer: ViewStyle;
    leftContainer: ViewStyle;
    centerContainer: ViewStyle;
    rightContainer: ViewStyle;
    button: ViewStyle;
    textStyle: TextStyle;
    modalText: TextStyle;
}

const styles: Style = StyleSheet.create<Style>({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 25,
      alignItems: "center",
      shadowRadius: 3.84,
      width: '90%'
    },
    openButton: {
      borderRadius: 50,
      paddingLeft: isIOS() ? 8 : 10,
      paddingRight: isIOS() ? 8 : 10,
      paddingBottom: 3
    },
    backContainer: {
      flexDirection: 'row', 
      justifyContent: "space-between", 
      paddingBottom: 20,
    },
    leftContainer: {
      flex: 3, 
      justifyContent: "center",
    },
    centerContainer: {
      flex: 3, 
      justifyContent: "center",
      alignItems: "center",
    },
    rightContainer: {
      flex: 0, 
      justifyContent: "center", 
    },
    button: {
      marginTop: 10,
      minWidth: '100%',
      borderWidth: 2
    },
    textStyle: {
      fontWeight: "bold",
      fontSize: 20
    },
    modalText: {
      fontWeight: "bold",
      fontSize: 24
    }
});
