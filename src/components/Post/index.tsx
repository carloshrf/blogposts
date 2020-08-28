import React from 'react';

import { Container, Title, Body, DeleteImage, DeleteButton } from './styles';

import deleteIcon from '../../assets/icons/delete.png';

interface PostProps {
  title: string;
  children: string;
  onDelete(id: number): void;
  postId: number;
}

const Post: React.FC<PostProps> = ({title, children, onDelete, postId}) => (
  <Container>
    <DeleteButton onPress={() => onDelete(postId)}>
      <DeleteImage source={deleteIcon} />
    </DeleteButton>
    
    <Title>{title}</Title>
    <Body>{children}</Body>
  </Container>
);

export default Post;