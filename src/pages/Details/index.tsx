import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

// Services
import api from '../../services/api';

// Components
import Header from '../../components/Header';
import Card from '../../components/Card';

// Styles
import { RepositoryInfo, Issues } from './styles';

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

interface Issues {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
    avatar_url: string;
  };
  labels: {
    name: string;
    color: string;
    url: string;
  }[];
}
const Details: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issues[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(({ data }) => {
      setRepository(data);
    });

    api.get(`repos/${params.repository}/issues`).then(({ data }) => {
      console.log(data);
      setIssues(data);
    });
  }, [params.repository]);

  return (
    <>
      <Header goBack={true} />
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.avatar_url}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Open Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues.map(issues => (
          <a href={issues.html_url}>
            <Card
              image={issues.user.avatar_url}
              owner={issues.user.login}
              title={issues.title}
              description={issues.user.login}
            />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Details;
