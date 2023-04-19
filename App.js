import React from "react";
import {
  Text,
  HStack,
  Center,
  AspectRatio,
  Image,
  Stack,
  Heading,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
} from "native-base";
import { IconButton, Icon, Box } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const customTheme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={2}
        flex={1}
      >
        <ToggleDarkMode />
        <VStack space={3} alignItems="flex-start">
          <Heading size="md">Welcome to <Text color="emerald.500">MoonWatch Asisstant</Text> App</Heading>
          <Text>Choose your watch brand</Text>
          <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              The Silicon Valley of India.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
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
      style={{position: 'absolute', top: '3%', left: '1%'}}
      onPress={toggleColorMode}
      _icon={{
      color: "orange.500",
      size: "md"
    }} _hover={{
      bg: "orange.600:alpha.20"
    }} _pressed={{
      bg: "orange.600:alpha.20",
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
