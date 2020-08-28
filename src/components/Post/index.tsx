import React from 'react';

import { 
  Container, 
  Title, 
  Body, 
  DeleteButton, 
  TitleContainer 
} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface PostProps {
  title: string;
  children: string;
  onDelete(postId: number): void;
  postId: number;
}

const Post: React.FC<PostProps> = ({title, children, onDelete, postId}) => (
  <Container>    
    <TitleContainer>
      <Title>{title}</Title>

      <DeleteButton onPress={() => onDelete(postId)}>
        <Icon name="delete-forever" size={28} color="red" />
      </DeleteButton>
    </TitleContainer>

    <Body>{children}</Body>
  </Container>
);

export default Post;