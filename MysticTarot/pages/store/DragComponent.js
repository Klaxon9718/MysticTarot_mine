import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Draggable from "react-native-draggable";

export default function DragComponent({
  id,
  dropZoneWidth,
  windowWidth,
  windowHeight,
  card,
}) {
  const onDragReleaseHandler = (event, gesture, component) => {
    if (
      greenZone(gesture.moveX, gesture.moveY, 0, 0, windowWidth, windowHeight)
    ) {
      console.log("Card dragged, calling onDragRelease with card:", card);
      onDragRelease(event, gesture, component, card);
    }
  };

  return (
    <Draggable
      x={(windowWidth - dropZoneWidth) / 2}
      y={windowHeight * 0.1 + (id - 1) * 20}
      renderSize={80}
      isCircle={false}
      onDragRelease={onDragReleaseHandler}
    >
      <View style={styles.draggableCard}>
        <Image
          source={require("./img/back-blue-card.png")}
          style={styles.cardImage}
        />
      </View>
    </Draggable>
  );
}

const styles = StyleSheet.create({
  draggableCard: {
    borderRadius: 10,
    padding: 10,
  },
  cardImage: {
    width: 80,
    height: 120,
    resizeMode: "contain",
  },
});
