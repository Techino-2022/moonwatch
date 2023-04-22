import React, { useState, useEffect } from "react";
import {
  Text,
  HStack,
  Center,
  AspectRatio,
  Image,
  Stack,
  Box,
  Pressable,
  Heading,
  useColorMode,
  StatusBar,
  NativeBaseProvider,
  extendTheme,
  VStack,
} from "native-base";


const HuaweiScreen = props => {

  const { navigate } = props.navigation;

  const [band5Count, setBand5Count] = useState([]);
  const [band6Count, setBand6Count] = useState([]);
  const [band7Count, setBand7Count] = useState([]);

  const getH5Count = async (Hband5count) => {
    try {
      const response = await fetch('http://192.168.42.72:8000/' + Hband5count + '/');
      const json = await response.json();
      setBand5Count(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const getH6Count = async (Hband6count) => {
    try {
      const response = await fetch('http://192.168.42.72:8000/' + Hband6count + '/');
      const json = await response.json();
      setBand6Count(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const getH7Count = async (Hband7count) => {
    try {
      const response = await fetch('http://192.168.42.72:8000/' + Hband7count + '/');
      const json = await response.json();
      setBand7Count(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    getH5Count("h5count");
    getH6Count("h6count");
    getH7Count("h7count");
  }, []);

  return (
    <NativeBaseProvider>
      <StatusBar />
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={2}
        flex={1}
      >
        <VStack space={20} alignItems="flex-start">
          <VStack space={5} alignItems="flex-start">
            <Heading size="sm">Choose your <Text color="emerald.500">Huawei/Honor</Text> watch model</Heading>
          </VStack>
          <VStack space={5} alignItems="flex-start">
            <Box minW="80" maxH="80" minHeight="140" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700"
            }} _web={{
              shadow: 2,
              borderWidth: 0
            }} _light={{
              backgroundColor: "gray.50"
            }}>
              <Box>
                <AspectRatio w="50%" position="absolute" right="0" top="2">
                  <Image resizeMode="contain" opacity="90" source={{
                    uri: "https://raw.githubusercontent.com/Techino-2022/moonwatch/main/assets/images/huawei_models/hw_band5.png"
                  }} alt="Huawei/Honor band 5"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    Band 5
                  </Heading>
                  <Text fontSize="sm" _light={{
                    color: "emerald.500"
                  }} _dark={{
                    color: "emerald.500"
                  }} fontWeight="500" ml="-0.5" mt="-1">
                    Total Watchfaces: {band5Count}
                  </Text>
                </Stack>
                <HStack alignItems="center" space={4} fontSize="xs" justifyContent="space-between">
                  <HStack alignItems="center">
                    {/* <Text color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }} fontWeight="400">
                      Last update: 22 mins ago
                    </Text>
                  */}
                  </HStack>
                </HStack>
              </Stack>
            </Box >
            <Box minW="80" maxH="80" minHeight="140" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700"
            }} _web={{
              shadow: 2,
              borderWidth: 0
            }} _light={{
              backgroundColor: "gray.50"
            }}>
              <Pressable onPress={() =>
                //console.log("Hello")
                navigate('WatchModel')
              }>
                <Box>
                  <AspectRatio w="50%" position="absolute" right="0" top="2">
                    <Image resizeMode="contain" opacity="90" source={{
                      uri: "https://raw.githubusercontent.com/Techino-2022/moonwatch/main/assets/images/huawei_models/hw_band6.png"
                    }} alt="Huawei/Honor band 6"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      Band 6
                    </Heading>
                    <Text fontSize="sm" _light={{
                      color: "emerald.500"
                    }} _dark={{
                      color: "emerald.500"
                    }} fontWeight="500" ml="-0.5" mt="-1">
                      Total Watchfaces: {band6Count}
                    </Text>
                  </Stack>
                  <HStack alignItems="center" space={4} fontSize="xs" justifyContent="space-between">
                    <HStack alignItems="center">
                      {/* <Text color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }} fontWeight="400">
                      Last update: 22 mins ago
                    </Text>
                  */}
                    </HStack>
                  </HStack>
                </Stack>
              </Pressable>
            </Box >

            <Box minW="80" maxH="80" minHeight="140" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700"
            }} _web={{
              shadow: 2,
              borderWidth: 0
            }} _light={{
              backgroundColor: "gray.50"
            }}>
              <Box>
                <AspectRatio w="50%" position="absolute" right="0" top="2">
                  <Image resizeMode="contain" opacity="90" source={{
                    uri: "https://raw.githubusercontent.com/Techino-2022/moonwatch/main/assets/images/huawei_models/hw_band7.png"
                  }} alt="Huawei/Honor band 7"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    Band 7
                  </Heading>
                  <Text fontSize="sm" _light={{
                    color: "emerald.500"
                  }} _dark={{
                    color: "emerald.500"
                  }} fontWeight="500" ml="-0.5" mt="-1">
                    Total Watchfaces: {band7Count}
                  </Text>
                </Stack>
                <HStack alignItems="center" space={4} fontSize="xs" justifyContent="space-between">
                  <HStack alignItems="center">
                    {/* <Text color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }} fontWeight="400">
                      Last update: 22 mins ago
                    </Text>
                  */}
                  </HStack>
                </HStack>
              </Stack>
            </Box >
          </VStack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

export default HuaweiScreen