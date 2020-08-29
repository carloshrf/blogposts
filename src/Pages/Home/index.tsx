import React, { useState, useEffect } from 'react';

import { ScrollView } from 'react-native';

import Input from '../../components/Input';
import Post from '../../components/Post';
import AddButton from '../../components/AddButton';
import Loading from '../../components/Loading';
import CreatePostModal from '../../components/Modal/CreatePost';
import DeletePostModal from '../../components/Modal/DeletePost';
import InformationModal from '../../components/Modal/Information';

import api from '../../services/api';

import { Container, SearchBar, Main, ErrorTitle, ErrorMessage } from './styles';

interface PostsData {
  body: string;
  title: string;
  id: number;
  userId: number;
}

interface ErrorMessage {
  errorTitle: string;
  errorMessage: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostsData[]>([]);
  const [createModalIsVisible, setCreateModalIsVisible] = useState(false);
  const [successCreateModalIsVisible, setSuccessCreateModalIsVisible] = useState(false);
  const [successDeleteModalIsVisible, setSuccessDeleteModalIsVisible] = useState(false);
  const [deleteModalIsVisible, setDeleteModalIsVisible] = useState(false);
  const [errorModalIsVisible, setErrorModalIsVisible] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState({} as ErrorMessage);
  const [postToDelete, setPostToDelete] = useState(0);
  const [addButtonIsDisabled, setAddButtonIsDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
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

  function toggleErrorModal(): void {
    setErrorModalIsVisible(!errorModalIsVisible);
    setErrorModalMessage({ errorTitle: '', errorMessage: '' });
  }

  function toggleDeleteSuccessModal(): void {
    setSuccessDeleteModalIsVisible(!successDeleteModalIsVisible);
  }

  function toggleDeleteModal(postId: number): void {
    setDeleteModalIsVisible(!deleteModalIsVisible);
    setPostToDelete(postId);
  }

  function filterPosts(text: string) {
    api.get(`postsaa/${!!text ? `?title=${text}` : ''}`)
    .then(({data}) => {
      setPosts(data);
    })
    .catch(err => {
      setErrorModalIsVisible(true);
      setErrorModalMessage({
        errorTitle: 'Erro consultar posts',
        errorMessage: err.message
      });
    });
  };

  function verifyCreateContent() {
    if (newPost.title && newPost.body) {
      setAddButtonIsDisabled(false);
    } else {
      setAddButtonIsDisabled(true);
    }
  }

  function handleInputTitleChanges(title: string): void {
    setNewPost({...newPost, title});
  } 

  function handleInputBodyChanges(body: string): void {
    setNewPost({...newPost, body });
  } 

  function handleDeletePost(): void {
    api.delete(`posts/${postToDelete}`)
      .then(() => {
        const remainingPosts = posts.filter(post => post.id !== postToDelete);
        setPosts(remainingPosts);
        setPostToDelete(0);
        setDeleteModalIsVisible(false);
        setSuccessDeleteModalIsVisible(true);
      })
      .catch((err) => {
        setDeleteModalIsVisible(false);
        setErrorModalIsVisible(true);
        setErrorModalMessage({
          errorTitle: 'Erro ao remover post',
          errorMessage: err.message
        });
      });
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
    .catch((err) => {
      setCreateModalIsVisible(false);
      setErrorModalIsVisible(true);
      setErrorModalMessage({
        errorTitle: 'Erro ao criar post',
        errorMessage: err.message
      });
    });

    setAddButtonIsDisabled(true);
  }

  useEffect(() => {
    verifyCreateContent();
  }, [newPost]);

  useEffect(() => {
    setLoading(true);
    setCreateModalIsVisible(false);
    setDeleteModalIsVisible(false);
    setErrorModalIsVisible(false);

    api.get('posts').then(response => {
      setPosts(response.data);
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      setErrorModalIsVisible(true);
      setErrorModalMessage({
        errorTitle: 'Erro ao buscar posts',
        errorMessage: err.message
      });
    });

  }, []);

  return (
    <Container>
      <SearchBar>
        <Input 
          name="search"
          autoCapitalize="none" 
          icon="text-box-search-outline" 
          placeholder="Buscar" 
          onChangeText={(text) => filterPosts(text)}
        />
      </SearchBar>

      <ScrollView>
        <Main>
          {!!loading 
            ? <Loading /> 
            : posts.map(post => {
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
            })
          }
        </Main>
      </ScrollView>

      <AddButton setModalIsVisible={toggleCreateModal} />

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

      <InformationModal visible={errorModalIsVisible} onClose={toggleErrorModal} >
        <ErrorTitle>{errorModalMessage.errorTitle} {"\n\n"}</ErrorTitle>
        <ErrorMessage>{errorModalMessage.errorMessage}</ErrorMessage>
      </InformationModal>
      
    </Container>
  );
};

export default Home;
