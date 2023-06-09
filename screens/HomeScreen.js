import React from "react";
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
  NativeBaseProvider,
  VStack,
  IconButton, Icon, Box
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = props => {

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
        {/* <ToggleDarkMode/> */}
        <VStack space={20} alignItems="flex-start">
          <VStack space={5} alignItems="flex-start">
            <Heading size="md">Welcome to <Text color="emerald.500">MoonWatch</Text> App</Heading>
            <Text>Choose your watch brand</Text>
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
              <Pressable onPress={() =>
                navigate('HuaweiModel')
              }>
                <Box>
                  <AspectRatio w="50%" position="absolute" right="0" top="2">
                    <Image resizeMode="contain" opacity="10" source={{
                      uri: "https://raw.githubusercontent.com/Techino-2022/moonwatch/main/assets/images/company_logos/huawei_logo.png"
                    }} alt="Huawei logo"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={3}>
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
            }}
            >
              <Pressable onPress={() =>
                navigate('XiaomiModel')
              }>
                <Box>
                  <AspectRatio w="50%" position="absolute" right="0" top="2">
                    <Image resizeMode="contain" opacity="10" source={{
                      uri: "https://raw.githubusercontent.com/Techino-2022/moonwatch/main/assets/images/company_logos/xiaomi_logo.png"
                    }} alt="Xiaomi logo"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={3}>
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
                </Stack>
              </Pressable>
            </Box>
          </VStack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton icon={<Icon as={MaterialCommunityIcons} name="theme-light-dark" />} borderRadius="full"
      style={{ position: 'absolute', top: '3%', left: '1%' }}
      onPress={toggleColorMode}
      _icon={{
        color: "emerald.500",
        size: "md"
      }} _hover={{
        bg: "emerald.500:alpha.20"
      }} _pressed={{
        bg: "emerald.500:alpha.20",
        _icon: {
          name: "emoji-flirt"
        },
        _ios: {
          _icon: {
            size: "2xl"
          }
        }
      }} _ios={{
        _icon: {
          size: "2xl"
        }
      }} />
  );
}

export default HomeScreen
