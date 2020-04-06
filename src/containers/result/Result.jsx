import React from 'react';

import { useParams } from 'react-router-dom';
import { ResultCardContainer } from '../../components';

const Result = ({ history }) => {
    const { id } = useParams();
    
    return <ResultCardContainer history={history} id={id} />;
}

export default Result;
