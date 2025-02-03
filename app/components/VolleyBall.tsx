import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import NewsData from "../NewsDataVolleyBall";
import { Link, useNavigation, useRouter } from 'expo-router';

const Volleyball = () => {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ title: "Sports Hub", headerTitleAlign: "center" });
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
          <Text style={styles.buttonText}>Tennis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('./VolleyBall')}>
          <Text style={styles.buttonText}>Volleyball</Text>
        </TouchableOpacity>
      </View>

      {/* Live Score Section */}
      <View style={styles.liveScoreContainer}>
        <Text style={styles.liveScoreTitle}>Live Score</Text>
        <View style={styles.matchContainer}>
          <Text style={styles.team}>IBK W</Text>
          <Image source={{ uri: 'https://static.flashscore.com/res/image/data/GCVCfeyS-xvCafhCb.png' }} style={styles.teamLogo} />
          <Text style={styles.score}>2 - 3</Text>
          <Image source={{ uri: 'https://static.flashscore.com/res/image/data/EXtx7sXg-EL2iNWK6.png' }} style={styles.teamLogo} />
          <Text style={styles.team}>GS Caltex</Text>
        </View>
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
  liveScoreContainer: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  liveScoreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  team: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  teamLogo: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
});

export default Volleyball;