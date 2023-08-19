import React from "react";

import styles from "./styles";
import { SwippableModal } from "react-native-swippable-modal";
import { props } from "./types";
import { Text, View } from "react-native";

const SsoModal = ({ title, modalRef, children }: props) => {
  return (
    <SwippableModal 
      ref={modalRef} 
      closeThreadSoldValue={50} 
      modalStyle={styles.modal}
      modalInnerContainerStyle={styles.innerContainer}
      modalContainerStyle={styles.container}
      modalLineStyle={styles.line}
    >
      <View style={styles.titleView}>
        <View />
        <Text style={styles.title}>{title}</Text>
        <View />
      </View>
      {children}
    </SwippableModal>
  );
};

export default SsoModal;