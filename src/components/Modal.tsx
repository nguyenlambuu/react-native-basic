import React, { Component } from 'react';
import { Modal, View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { COLORS } from '../constants/styles';

class ModalComponent extends Component<any> {
  state = {
    modalVisible: true
  };

  componentDidMount() {
    console.log('works!');
  }

  setModalVisible = (visible: boolean) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (<View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {this.props.children}
            <TouchableHighlight
              style={styles.btnClose}
              onPress={() => {
                this.setModalVisible(false);
              }}
            >
              <Text style={{ color: COLORS.DARK }}>X</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  modalView: {
    margin: 10,
    backgroundColor: COLORS.LIGHT,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  btnClose: {
    position: 'absolute',
    top: 10,
    right: 10
  }
});

export default ModalComponent;