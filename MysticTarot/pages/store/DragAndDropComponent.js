import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Draggable from "react-native-draggable";

const tarotDeck = [
  { id: 1, content: "The Fool", image: require("./img/fool.png") },
  { id: 2, content: "The Magician", image: require("./img/magician.png") },
  {
    id: 3,
    content: "The High Priestess",
    image: require("./img/priestess.png"),
  },
  // 하드코딩으로 더미 데이터 삽입, 타로 카드들의 정보를 담은 tarotDeck 배열 생성
];

export default function DragAndDropComponent() {
  // droppedCard 상태는 드래그 앤 드롭 기능을 통해 어떤 타로 카드가 초록 박스에 드롭되었는지를 나타냄
  const [droppedCard, setDroppedCard] = useState(null);
  // 반응형 디자인을 위해서 화면의 크기를 가져옴
  const windowWidth = Dimensions.get("window").width; // 현재 창의 너비
  const windowHeight = Dimensions.get("window").height; // 현재 창의 높이

  // 초록 박스 크기 조절 : 카드를 드래그 앤 드롭할 영역
  const dropZoneWidth = windowWidth * 0.2; //초록 박스의 너비
  const dropZoneHeight = windowHeight * 0.25; //초록 박스의 높이

  //드래그 앤 드롭 동작 완료될 때 호출되는 함수
  const onDragRelease = (event, gesture, component, card) => {
    // dropZoneX : 초록 박스 영역에서의 가로좌표
    // (windowWidth - dropZoneWidth) / 2 는 초록 박스를 수평으로 중앙에 위치시키는 역할을 함
    // dropZoneX는 초록 박스의 왼쪽 가장자리의 X좌표가 됨
    const dropZoneY = windowHeight * 0.5;

    // dropZoneY : 초록 박스 영역에서의 세로 좌표
    // windowHeight * 0.5는 현재 창의 높이의 절반 지점에 해당하는 Y 좌표로, 초록 박스를 수직으로 중앙에 위치시키는 역할을 함
    // dropZoneY는 초록 박스의 상단 가장자리의 Y 좌표가 됨
    const dropZoneX = (windowWidth - dropZoneWidth) / 2;

    // 조건문: 드래그가 완료된 지점이 초록 박스 영역 안에 있는지 확인
    /*
    조건문 내용 
    gesture.moveX > dropZoneX : 드래그가 완료된 지점의 가로 좌표가 초록 박스의 왼쪽 가장자리를 넘어서는지 확인
    gesture.moveX < dropZoneX + dropZoneWidth : 드래그가 완료된 지점의 가로 좌표가 초록 박스의 오른쪽 가장자리를 넘어서는지 확인
    gesture.moveY > dropZoneY : 드래그가 완료된 지점의 세로 좌표가 초록 박스의 상단 가장자리를 넘어서는지 확인
    gesture.moveY < dropZoneY + dropZoneHeight : 드래그가 완료된 지점의 세로 좌표가 초록 박스의 하단 가장자리를 넘어서는지 확인
    모든 조건이 만족된다면, 즉 드래그한 카드가 초록 박스 안으로 드롭되었다면 setDroppedCard(card)를 호출하여 drooppedCard 상태를 업데이트함
    */
    if (
      gesture.moveX > dropZoneX &&
      gesture.moveX < dropZoneX + dropZoneWidth &&
      gesture.moveY > dropZoneY &&
      gesture.moveY < dropZoneY + dropZoneHeight
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
        <Draggable
          key={card.id}
          x={(windowWidth - dropZoneWidth) / 2}
          y={windowHeight * 0.3 + (card.id - 1) * 60}
          renderSize={80}
          isCircle={false}
          onDragRelease={(event, gesture, component) =>
            onDragRelease(event, gesture, component, card)
          }
          draggableArea={{
            left: 0,
            top: 0,
            right: windowWidth - 80,
            bottom: windowHeight - 80,
          }}
        >
          <View style={styles.draggableCard}>
            <Image
              source={require("./img/card-back.png")}
              style={styles.cardImage}
            />
          </View>
        </Draggable>
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
  draggableCard: {
    borderRadius: 10,
    padding: 10,
  },
});
