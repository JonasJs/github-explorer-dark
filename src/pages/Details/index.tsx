import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

// Services
import api from '../../services/api';

// Components
import Header from '../../components/Header';

// Styles
// import { Container } from './styles';

// Types
interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Details: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      console.log(response);
    });
  }, [params.repository]);

  return (
    <div>
      <Header goBack={true} />
      <h1> Detalhes</h1>
    </div>
  );
};

export default Details;
