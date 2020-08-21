import React, { useEffect, useState } from 'react';

import { Container } from './styles';

// Images
import octocatSpinner from '../../assets/octocat-spinner.svg';

// Types
interface Props {
  show: boolean;
}

const Loading: React.FC<Props> = ({ show }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    setRender(show);
  }, [show]);

  return (
    <>
      {render && (
        <Container show={show}>
          <img src={octocatSpinner} alt="Loading..." title="Loading..."></img>
        </Container>
      )}
    </>
  );
};

export default Loading;
