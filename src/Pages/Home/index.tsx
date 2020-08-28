import React, { useState, useEffect } from 'react';

import { ScrollView } from 'react-native';

import Input from '../../components/Input';
import Post from '../../components/Post';
import AddButton from '../../components/AddButton';
import CreatePostModal from '../../components/Modal/CreatePost';
import DeletePostModal from '../../components/Modal/DeletePost';
import InformationModal from '../../components/Modal/Information';

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
  const [successCreateModalIsVisible, setSuccessCreateModalIsVisible] = useState(false);
  const [successDeleteModalIsVisible, setSuccessDeleteModalIsVisible] = useState(false);
  const [deleteModalIsVisible, setDeleteModalIsVisible] = useState(false);
  const [postToDelete, setPostToDelete] = useState(0);
  const [addButtonIsDisabled, setAddButtonIsDisabled] = useState(true);
  const [newPost, setNewPost] = useState({
    body: '',
    title: '',
    userId: 1,
  });

  function toggleCreateModal(): void {
    setCreateModalIsVisible(!createModalIsVisible);
  }

  function toggleCreateSuccessModal(): void {
    setSuccessCreateModalIsVisible(!successCreateModalIsVisible);
  }

  function toggleDeleteSuccessModal(): void {
    setSuccessDeleteModalIsVisible(!successDeleteModalIsVisible);
  }

  function toggleDeleteModal(postId: number): void {
    setDeleteModalIsVisible(!deleteModalIsVisible);
    setPostToDelete(postId);
  }

  function filterPosts(text: string) {
    api.get(`posts/${!!text ? `?title=${text}` : ''}`).then(({data}) => {
      setPosts(data);
    }).catch(() => console.log('ERROO!!!'));
  };

  function verifyCreateContent() {
    if (newPost.title && newPost.body) {
      setAddButtonIsDisabled(false);
    } else {
      setAddButtonIsDisabled(true);
    }
    console.log(!!newPost.title, !!newPost.body);
  }

  function handleInputTitleChanges(title: string): void {
    setNewPost({...newPost, title});
  } 

  function handleInputBodyChanges(body: string): void {
    setNewPost({...newPost, body });
  } 

  function handleDeletePost(): void {
    console.log({postToDelete});
    api.delete(`posts/${postToDelete}`)
      .then(() => {
        const remainingPosts = posts.filter(post => post.id !== postToDelete);
        setPosts(remainingPosts);
        setPostToDelete(0);
        setDeleteModalIsVisible(false);
        setSuccessDeleteModalIsVisible(true);
      })
      .catch((err) => console.log(err));
  }

  function handleCreatePost(): void {
    api.post('posts', newPost, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      setPosts([...posts, response.data]);
      setCreateModalIsVisible(false);
      setSuccessCreateModalIsVisible(true);
    })
    .catch(() => console.log('ERROOOO!!!!'));

    setAddButtonIsDisabled(true);
  }

  useEffect(() => {
    verifyCreateContent();
  }, [newPost]);

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
          icon="text-box-search-outline" 
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
                onDelete={toggleDeleteModal}
                postId={post.id}
              >
                {post.body}
              </Post>
            );
          })}
        </Main>
      </ScrollView>

      <AddButton setModalIsVisible={toggleCreateModal} />

          {console.log({homehasContent: addButtonIsDisabled})}
      <CreatePostModal 
        visible={createModalIsVisible}
        hasNoContent={addButtonIsDisabled}
        onClose={toggleCreateModal} 
        handleTitleChange={handleInputTitleChanges} 
        handleBodyChange={handleInputBodyChanges}
        handleCreatePost={handleCreatePost}
      />

      <DeletePostModal 
        visible={deleteModalIsVisible} 
        onClose={toggleDeleteModal} 
        onDelete={handleDeletePost}
      />

      <InformationModal visible={successCreateModalIsVisible} onClose={toggleCreateSuccessModal}>
        Post adicionado com sucesso!
      </InformationModal>

      <InformationModal visible={successDeleteModalIsVisible} onClose={toggleDeleteSuccessModal}>
        Post removido com sucesso!
      </InformationModal>
      
    </Container>
  );
};

export default Home;
