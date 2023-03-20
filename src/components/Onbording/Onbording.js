import { FlatList, Text, View } from "react-native";
import React from "react";

const Onbording = () => {
  const data = [
    {
      id: 0,
      title: "asccasc",
      description: "This is something.",
      image: require("../../infrastructure/assets/image/00000.jpeg"),
    },
    {
      id: 1,
      title: "asccasc",
      description: "This is something.",
      image: require("../../infrastructure/assets/image/11111.jpeg"),
    },
    {
      id: 2,
      title: "asccasc",
      description: "This is something.",
      image: require("../../infrastructure/assets/image/22222.jpeg"),
    },
    {
      id: 3,
      title: "asccasc",
      description: "This is something.",
      image: require("../../infrastructure/assets/image/33333.jpeg"),
    },
    {
      id: 4,
      title: "asccasc",
      description: "This is something.",
      image: require(""),
    },
  ];
  const renderItem = () => {
    return (
      <>
        <View>
          <Text>Onbording</Text>
        </View>
      </>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        onEndReachedThreshold={32}
        horizontal={props?.isRecentPost ? true : false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        // onScroll={Animated.event(
        //   [{nativeEvent: {contentOffset: {x: scrollX}}}],
        //   {useNativeDriver: false},
        // )}
        // ref={slidesref}
        // viewableItemChange={viewableItemChange}
        // viewConfig={viewConfig}
      />
    </View>
  );
};

export default Onbording;
