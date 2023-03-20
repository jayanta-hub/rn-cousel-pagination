import {FlatList, Text, View, Image, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import LOGOSVG from '../../infrastructure/assets/image/airoplane.svg';
import img0 from '../../infrastructure/assets/image/00000.jpeg';
import img1 from '../../infrastructure/assets/image/11111.jpeg';
import img2 from '../../infrastructure/assets/image/22222.jpeg';
import img3 from '../../infrastructure/assets/image/33333.jpeg';
import img4 from '../../infrastructure/assets/image/55555.jpeg';
import {scale, width} from '../../infrastructure/utils/screenUtility';
import Pagination from '../Pagination/Pagination';
const Onbording = () => {
  const data = [
    {
      id: 0,
      title: 'Rocky',
      description: 'This is something.',
      image: img0,
    },
    {
      id: 1,
      title: 'Milo',
      description: 'This is something.asdd dw qdqw dw qd qwd qwd qwd wd',
      image: img1,
    },
    {
      id: 2,
      title: 'Buddy',
      description:
        'This is something.zxccwq we we cw cwqec q vfdv scas qwc qc qwc qwc',
      image: img2,
    },
    {
      id: 3,
      title: 'Teddy',
      description: 'This is something.',
      image: img3,
    },
    {
      id: 4,
      title: 'asccasc',
      description: 'This is something.',
      image: img4,
    },
  ];
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesref = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const viewableItemChange = useRef(({viewableItems}) => {
    setActiveIndex(viewableItems(0).index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const renderItem = ({item}) => {
    return (
      <>
        <View
          key={item.id}
          style={{
            width: width,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <View
            style={
              {
                // backgroundColor: 'red'
              }
            }>
            <Image
              source={item.image}
              style={[
                {
                  flex: 0.7,
                  justifyContent: 'center',
                  width,
                  resizeMode: 'contain',
                },
              ]}
            />
          </View>
          <View
            style={{
              flex: 0.3,
              paddingTop: scale(10),
            }}>
            <Text
              style={{
                fontWeight: '800',
                fontSize: scale(28),
                marginBottom: scale(10),
                color: '#146C94',
                textAlign: 'center',
              }}>
              {item.title}
            </Text>
            <View style={{marginTop: scale(10)}}>
              <Text
                style={{
                  fontWeight: '300',
                  color: '#19A7CE',
                  textAlign: 'center',
                  paddingHorizontal: scale(64),
                }}>
                {item.description}
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <View style={{flex: 1}}>
        {/* <View>
        <LOGOSVG
          width="250px"
          height="55px"
          style={{flex: 1, marginTop: scale(20), right: scale(15)}}
        />
      </View> */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          onEndReachedThreshold={32}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          ref={slidesref}
          viewableItemChange={viewableItemChange}
          viewConfig={viewConfig}
        />
      </View>
      <View style={{flex: 0.1}}>
        <Pagination
          renderData={data}
          activeIndex={activeIndex}
          scrollX={scrollX}
        />
      </View>
    </>
  );
};

export default Onbording;
