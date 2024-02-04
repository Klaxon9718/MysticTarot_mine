import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Draggable from "react-native-draggable";
import DragComponent from "./DragComponent";

const tarotDeck = [
  { id: 1, content: "The Fool", image: require("./img/fool.png") },
  { id: 2, content: "The Magician", image: require("./img/magician.png") },
  {
    id: 3,
    content: "The High Priestess",
    image: require("./img/priestess.png"),
  },
];

export default function DropComponent() {
  const [droppedCard, setDroppedCard] = useState(null);

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const dropZoneWidth = windowWidth * 0.5;
  const dropZoneHeight = windowHeight * 0.35;

  const greenZone = (
    gestureMoveX,
    gestureMoveY,
    dropZoneX,
    dropZoneY,
    dropZoneWidth,
    dropZoneHeight
  ) => {
    const condition1 = gestureMoveX > dropZoneX;
    const condition2 = gestureMoveX < dropZoneX + dropZoneWidth;
    const condition3 = gestureMoveY > dropZoneY;
    const condition4 = gestureMoveY < dropZoneY + dropZoneHeight;
    const conditionComplete =
      condition1 && condition2 && condition3 && condition4;
    return conditionComplete;
  };

  useEffect(() => {
    console.log("droppedCard state updated:", droppedCard);
  }, [droppedCard]);

  const onDragRelease = (event, gesture, component, card) => {
    const dropZoneY = windowHeight * 0.5;
    const dropZoneX = (windowWidth - dropZoneWidth) / 2;

    if (
      greenZone(
        gesture.moveX,
        gesture.moveY,
        dropZoneX,
        dropZoneY,
        dropZoneWidth,
        dropZoneHeight
      )
    ) {
      setDroppedCard(card);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.dropZone,
          { width: dropZoneWidth, height: dropZoneHeight },
        ]}
      >
        <Text style={styles.dropText}>Drag here</Text>
        {droppedCard && (
          <View style={styles.droppedContent}>
            <Image source={droppedCard.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{droppedCard.content}</Text>
          </View>
        )}
      </View>
      {tarotDeck.map((card) => (
        <DragComponent
          id={card.id}
          card={card}
          key={card.id}
          dropZoneWidth={dropZoneWidth}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
          greenZone={greenZone}
          onDragRelease={(event, gesture, component) =>
            onDragRelease(event, gesture, component, card)
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropZone: {
    backgroundColor: "#4CAF50",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  dropText: {
    color: "white",
  },
  droppedContent: {
    marginTop: 20,
    alignItems: "center",
  },
  cardImage: {
    width: 80,
    height: 120,
    resizeMode: "contain",
  },
  cardText: {
    color: "white",
    marginTop: 10,
    fontSize: 16,
  },
});
