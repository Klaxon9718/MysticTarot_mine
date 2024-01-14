// pagename: {name: 'pagename'},
import { Button } from "react-native";

/**
 * @param {*} props 
 * @param {navigation} navigation
 * @param {title} title
 * @param {name} name
 * @example `<PageChangeButton
				navigation={navigation}
				name={pageNames.Home.name}
			/>`
 * @example `<PageChangeButton
				navigation={navigation}
				title={'실 동작테스트'}
				name={pageNames.Home.name}
			/>`
 */
export const PageChangeButton = (props) => {
  return (
    <Button
      title={props.title ? props.title : props.name}
      onPress={() =>
        props.navigation.navigate(props.name ? props.name : props.title)
      }
    />
  );
};

/**
 * @param {navigation} navigation
 * @example `<PageBackButton
				navigation={navigation}/>`
*/
export const PageBackButton = (props) => {
  return <Button title={"<-"} onPress={() => navigation.goBack()} />;
};

export const pageNames = {
  Thumbnail: { name: "Thumbnail" },

  Home: { name: "Home" },

  Store: { name: "Store" },
  Setting: { name: "Setting" },
  SelectSpread: { name: "SelectSpread" },
  SelectCard: { name: "SelectCard" },
  DraggableComponent: { name: "DraggableComponent" },
  SecondDraggable: { name: "SecondDraggable" },
};

export default pageList = [
  { key: "Home", title: "메인 화면", link: "Home" },

  { key: "Thumbnail", title: "썸네일", link: "Thumbnail" },

  { key: "Store", title: "스토어", link: "Store" },
  { key: "Setting", title: "설정", link: "Setting" },
  { key: "SelectSpread", title: "스프레드 선택", link: "SelectSpread" },
  { key: "SelectCard", title: "카드 선택", link: "SelectCard" },
  {
    key: "DragAndDropComponent",
    title: "드래그 앱",
    link: "DragAndDropComponent",
  },

  { key: "Result", title: "결과", link: "Result" },
];
//{ key: '', title: '', link: ''},
