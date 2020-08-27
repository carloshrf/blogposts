import React from 'react';

import { Button, ButtonImage } from './styles';

import AddImage from '../../assets/icons/add.png';

const AddButton: React.FC = () => (
  <Button>
    <ButtonImage source={AddImage} />
  </Button>
);

export default AddButton;