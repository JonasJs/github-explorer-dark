import React from 'react';

import { Container } from './styles';
import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

const LoadingHeaderDetails: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <header className="flex">
          <Skeleton className="avatar-skeleton dark" />
          <div className="column">
            <Skeleton className="row-skeleton dark" />
            <Skeleton className="row-skeleton dark" />
          </div>
        </header>

        <div className="flex">
          <div className="item">
            <Skeleton className="row-skeleton dark" />
            <Skeleton className="row-skeleton dark" />
          </div>
          <div className="item">
            <Skeleton className="row-skeleton dark" />
            <Skeleton className="row-skeleton dark" />
          </div>
          <div className="item">
            <Skeleton className="row-skeleton dark" />
            <Skeleton className="row-skeleton dark" />
          </div>
        </div>
      </Panel>
    </Container>
  );
};

export default LoadingHeaderDetails;
