import React from 'react';

import { Container } from './styles';
import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

const LoadingCard: React.FC = () => {
  return (
    <Container>
      <Panel>
        <header className="flex">
          <Skeleton className="avatar-skeleton white" />
          <div className="column">
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
          </div>
        </header>

        <div className="flex">
          <div className="item">
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
          </div>
          <div className="item">
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
          </div>
          <div className="item">
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
          </div>
        </div>
      </Panel>
    </Container>
  );
};

export default LoadingCard;
