import React, { Component } from "react";
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
import PropTypes from 'prop-types';

const TagWatchFace = props => {
    return (
        <Text fontSize="xs">{props.tag}</Text>
    )
}

export default TagWatchFace