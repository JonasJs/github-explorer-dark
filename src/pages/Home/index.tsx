import React from 'react';

import logo from '../../assets/Logo.svg';

// Components
import Repositories from '../../components/Repositories';

import { Title, Form } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <img src={logo} alt="github_explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form action="">
        <input placeholder="Write the repository name: "></input>
        <button type="submit">Search</button>
      </Form>

      <Repositories />
    </>
  );
};

export default Home;
