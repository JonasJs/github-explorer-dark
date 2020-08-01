import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import logo from '../../assets/Logo.svg';

// Components
import Repository from '../../components/Repository';

import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function addRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await api.get(`search/repositories?q=${inputValue}`);

    const repository = response.data;
    console.log(repository.items);
    setRepositories(repository.items);
  }

  return (
    <>
      <img src={logo} alt="github_explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form onSubmit={addRepository}>
        <input
          value={inputValue}
          placeholder="Write the repository name: "
          onChange={({ target }) => setInputValue(target.value)}
        ></input>
        <button type="submit">Search</button>
      </Form>
      <Repositories>
        {repositories.map(({ owner, full_name, description }) => (
          <Repository
            owner={owner.login}
            image={owner.avatar_url}
            title={full_name}
            description={description}
          />
        ))}
      </Repositories>
    </>
  );
};

export default Home;
