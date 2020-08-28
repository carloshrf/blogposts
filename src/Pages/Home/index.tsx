import React, { useState, useEffect } from 'react';

import { ScrollView, TouchableOpacity, Text } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Post from '../../components/Post';
import AddButton from '../../components/AddButton';
import CreatePostModal from '../../components/Modal/CreatePost';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';

import { Container, SearchBar, Main } from './styles';

interface PostsData {
  body: string;
  title: string;
  id: number;
  userId: number;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostsData[]>([]);
  const [createModalIsVisible, setCreateModalIsVisible] = useState(false);
  const [newPost, setNewPost] = useState({
    body: '',
    title: '',
    userId: 1,
  });

  function toggleModal(): void {
    setCreateModalIsVisible(!createModalIsVisible);
  }

  async function filterPosts(text: string) {
    await api.get(`posts/?title=${text}`).then(({data}) => {
      setPosts(data);
    }).catch(() => console.log('ERROO!!!'));
  };

  function handleInputTitleChanges(title: string): void {
    setNewPost({...newPost, title});
  } 

  function handleInputBodyChanges(body: string): void {
    setNewPost({...newPost, body });
  } 

  function handleDeletePost(id: number): void {
    api.delete(`posts/${id}`)
      .then(response => {
        const remainingPosts = posts.filter(post => post.id !== id);
        setPosts(remainingPosts); 
      })
      .catch(() => console.log('erro'));
  }

  function handleCreatePost(): void {
    api.post('posts', newPost, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      setPosts([...posts, response.data])
    }).catch(() => console.log('ERROOOO!!!!'));
  }

  useEffect(() => {
    api.get('posts').then(response => {
      setPosts(response.data)
    }).catch(() => {
      console.log('Erro ao consultar posts');
    });
  }, []);

  return (
    <Container>
      <SearchBar>
        <Input 
          name="email" 
          icon="mail" 
          placeholder="Buscar" 
          onChangeText={(text) => filterPosts(text)}
        />
      </SearchBar>

      <ScrollView>
        <Main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id} 
                title={post.title} 
                onDelete={handleDeletePost}
                postId={post.id}
              >
                {post.body}
              </Post>
            );
          })}
        </Main>
      </ScrollView>

      <AddButton setModalIsVisible={toggleModal} />

      <CreatePostModal 
        visible={createModalIsVisible} 
        onClose={toggleModal} 
        handleTitleChange={handleInputTitleChanges} 
        handleBodyChange={handleInputBodyChanges}
        handleCreatePost={handleCreatePost}
      />
      
    </Container>
  );
};

export default Home;
