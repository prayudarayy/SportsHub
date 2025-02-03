import { useEffect } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router'; 
import * as WebBrowser from 'expo-web-browser';

export default function Detail() {
    const navigation = useNavigation();
    const { article: data } = useLocalSearchParams();
    const article = JSON.parse(data);

      useEffect(() => {
        navigation.setOptions({ title: "Detail" });
      }, [navigation]);

    const openArticle = () => {
        WebBrowser.openBrowserAsync(article.url);
    };

    return (
        <View style={styles.container}>
            {article.urlToImage && <Image source={{ uri: article.urlToImage }} style={styles.image} />}
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.description}>{article.description}</Text>
            <Button title="Read Full Article" onPress={openArticle} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },
});