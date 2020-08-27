import React from 'react';

import { Container, Title, Body, DeleteImage, DeleteButton } from './styles';

import deleteIcon from '../../assets/icons/delete.png';

interface PostProps {
  title: string;
  children: string;
  onDelete(): void;
}

const Post: React.FC<PostProps> = ({title, children, onDelete}) => (
  <Container>
    <DeleteButton  ><DeleteImage source={deleteIcon} /></DeleteButton>
    <Title>{title}</Title>
    <Body>{children}</Body>
  </Container>
);

export default Post;