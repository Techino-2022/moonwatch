import React, {useEffect, useState} from "react";
import {
  Text,
  HStack,
  Center,
  AspectRatio,
  Image,
  Stack,
  Pressable,
  Heading,
  useColorMode,
  StatusBar,
  ScrollView,
  NativeBaseProvider,
  VStack,
  IconButton, Icon, Box
} from "native-base";
import Watchface from '../components/WatchFace';
import {ActivityIndicator, FlatList, View} from 'react-native';

const WatchScreen = props => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getWatchFaces = async () => {
    try {
      const response = await fetch('http://192.168.42.72:8000/watchfaces/');
      const json = await response.json();
      setData(json);
      console.log(json)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWatchFaces();
  }, []);

  const { navigate } = props.navigation;

  return (
    <NativeBaseProvider>
      <StatusBar />
      <ScrollView w="100%" paddingTop="2">
        <VStack space={2} alignItems="center">
          <HStack space={2} alignItems="center">
          {isLoading ? (
        <ActivityIndicator/>
      ) : (
        data.map(watch => (
          <Watchface id={watch.id}
                      key={watch.id}
                      data={watch}
                      name={watch.name}
                      image={watch.image}
                      language={watch.language}
                      downloads={watch.downloadCount}
                      likes={watch.likesCount}
                      tags={watch.tags}
          />
      )))}
          </HStack>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default WatchScreen