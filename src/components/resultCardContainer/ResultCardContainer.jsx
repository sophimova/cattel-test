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
        const { id } = this.props;
        const { history } = this.props;

        try {
            const resp = await Api.get(GET_RESULT + id);

            if (resp.status === 200) {
                this.setState({ result: resp.data });
            }
        } catch (e) {
            if (e.response && e.response.status === 404) {
                history.push('/not-found');
            } else {
                history.push('/error');
            }
        }
    }

    render() {
        const { result } = this.state;

        return result ? <ResultCard result={result} /> : <Loader />;
    }
}

export default ResultCardContainer;
