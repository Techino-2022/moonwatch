import React from "react";
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


const XiaomiScreen = props => {

  const { navigate } = props.navigation;


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
            <Heading size="md">Choose your <Text color="emerald.500">Xiaomi</Text> watch model</Heading>
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
                  <Image resizeMode="contain" opacity="10" source={{
                    uri: "https://raw.githubusercontent.com/Techino-2022/moonwatch/main/assets/images/huawei_logo.png"
                  }} alt="huawei logo"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    Huawei smartwatches
                  </Heading>
                  <Text fontSize="xs" _light={{
                    color: "emerald.500"
                  }} _dark={{
                    color: "emerald.500"
                  }} fontWeight="500" ml="-0.5" mt="-1">
                    include: Huawei/Honor band 5, Huwaei/Honor band 6, Huwaei/Honor band 7
                  </Text>
                </Stack>
                <HStack alignItems="center" space={4} justifyContent="space-between">
                  <HStack alignItems="center">
                    <Text color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }} fontWeight="400">
                      Last update: 6 mins ago
                    </Text>
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
            }}
            >
              <Pressable onPress={() =>
              navigate('XiaomiModel')
            }>
                <Box>
                  <AspectRatio w="50%" position="absolute" right="0" top="2">
                    <Image resizeMode="contain" opacity="10" source={{
                      uri: "https://raw.githubusercontent.com/Techino-2022/moonwatch/main/assets/images/xiaomi_logo.png"
                    }} alt="huawei logo"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      Xiaomi smartwatches
                    </Heading>
                    <Text fontSize="xs" _light={{
                      color: "emerald.500"
                    }} _dark={{
                      color: "emerald.500"
                    }} fontWeight="500" ml="-0.5" mt="-1">
                      include: Mi band 5, Mi band 6, Mi band 7
                    </Text>
                  </Stack>
                  <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                      <Text color="coolGray.600" _dark={{
                        color: "warmGray.200"
                      }} fontWeight="400">
                        Last update: 1 hour ago
                      </Text>
                    </HStack>
                  </HStack>
                </Stack>
              </Pressable>
            </Box>
          </VStack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

export default XiaomiScreen