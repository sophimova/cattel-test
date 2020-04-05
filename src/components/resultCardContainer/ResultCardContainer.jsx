import React from 'react';

import { Api, GET_RESULT } from '../../utilities';
import { ResultCard, Loader } from '..';

class ResultCardContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { result: null };
    }

    componentDidMount() {
        this.loadResult();
    }

    async loadResult() {
        try {
            const resp = await Api.get(GET_RESULT + '5e88d1c741b9cb65f8c774bf');
            if (resp.status === 200) {
                this.setState({ result: resp.data });
            }
        } catch {
            const { history } = this.props;
            history.push('/error');
        }
    }

    render() {
        const { result } = this.state;

        return result ? <ResultCard result={result} /> : <Loader />;
    }
}

export default ResultCardContainer;
