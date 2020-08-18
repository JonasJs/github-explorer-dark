import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import logo from '../../assets/Logo.svg';

// Components
import Repository from '../../components/Repository';
import ButtonNavigation from '../../components/ButtonNavigation';
import Loading from '../../components/Loading';

import { Title, Form, Repositories, ContainerButtonNavigation } from './styles';

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
  const [inputValueTemp, setInputValueTemp] = useState('');
  const [page, setPage] = useState(1c);
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  function previousPage() {
    console.log(333);
    if (page > 1) {
      setPage(page - 1);
      request();
    }
  }

  function nextPage() {
    setPage(page + 1);
    request();
  }

  async function request() {
    try {
      const response = await api.get(
        `search/repositories?q=${inputValueTemp}&page=${page}&per_page=10`,
      );
      const repository = response.data;

      setRepositories(repository.items);
    } catch (error) {
    } finally {
      setInputValue('');
      setLoading(false);
    }
  }

  async function searchRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setRepositories([]);
    if (inputValue !== '') {
      await request();
    }
  }

  return (
    <>
      <Loading show={loading}></Loading>
      <img src={logo} alt="github_explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form onSubmit={searchRepository}>
        <input
          value={inputValue}
          placeholder="Write the repository name: "
          onChange={({ target }) => {
            setInputValue(target.value);
            setInputValueTemp(target.value);
          }}
        ></input>
        <button type="submit">Search</button>
      </Form>
      <Repositories>
        {repositories.length > 0 && (
          <>
            {repositories.map(({ owner, full_name, description }, key) => (
              <Repository
                key={key}
                owner={owner.login}
                image={owner.avatar_url}
                title={full_name}
                description={description}
              />
            ))}
            {repositories.length > 1 && (
              <ContainerButtonNavigation>
                <ButtonNavigation
                  onClick={() => previousPage()}
                  iconLeft={FiChevronLeft}
                >
                  Previous
                </ButtonNavigation>

                <ButtonNavigation
                  onClick={() => nextPage()}
                  iconRight={FiChevronRight}
                >
                  Next
                </ButtonNavigation>
              </ContainerButtonNavigation>
            )}
          </>
        )}
      </Repositories>
    </>
  );
};

export default Home;
