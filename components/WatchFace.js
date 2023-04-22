import React, { Component } from "react";
import {
    Text,
    AspectRatio,
    Image,
    Pressable,
    Heading,
    View,
    Box
} from "native-base";
import PropTypes from 'prop-types';
import TagWatchFace from '../components/TagWatchFace';

const WatchScreen = props => {
    return (
        <Box bg={["#e5e5e5"]} p="2" rounded="xs" w="46%" minWidth="46%" maxWidth="46%" H="100%" minHeight="100%" maxHeight="100%"  shadow={1}>
            <Heading size="md" paddingBottom="2" textAlign="center">{props.name}</Heading>
            <AspectRatio >
                <Image resizeMode="contain" source={{
                    uri: props.image
                }} alt="retro band 6" />
            </AspectRatio>
            <Text paddingTop="2" textAlign="center">Language: {props.language}</Text>
            <Text textAlign="center">Downloads: {props.downloads}</Text>
            <Text textAlign="center">Likes: {props.likes}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', overflow: 'visible', flexWrap: 'wrap' }}>
                {(
                    props.tags.map(tag => (
                        <Box bg="emerald.200" margin="0.5" padding="1" rounded="md">
                            <TagWatchFace id={tag.id}
                                key={tag.id}
                                tag={tag}
                            />
                        </Box>
                    )))}
            </View>
        </Box>
    )
}

export default WatchScreen