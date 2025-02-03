import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import NewsData from "../NewsDataTennis";
import { Link, useNavigation, useRouter } from 'expo-router';

const Tennis = () => {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ title: "Sports Hub",headerTitleAlign: "center"  });
  }, [navigation]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsArticles = NewsData().articles;
      setArticles(newsArticles);
    };

    fetchNews();
  }, []);

  const renderItem = ({ item }) => (
    <Link href={{ 
      pathname: '/NewsDetail',
      params: { article: JSON.stringify(item) }
     }}>
      <View style={styles.articleContainer}>
        {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.image} />}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Link>
    
  );

  return (
    <ScrollView style={styles.container}>
    
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('./NewsList')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('./Football')}>
          <Text style={styles.buttonText}>Football</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('./Basket')}>
          <Text style={styles.buttonText}>Basketball</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('./Badminton')}>
          <Text style={styles.buttonText}>Badminton</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('./Tennis')}>
          <Text style={styles.buttonText}>Tennis</ Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('./VolleyBall')}>
          <Text style={styles.buttonText}>Volleyball</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  button: {
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  articleContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});

export default Tennis;