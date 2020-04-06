import React from 'react';

import { Api, GET_RESULT, BASE_PATH } from '../../utilities';
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
        const {id} = this.props;

        try {
            const resp = await Api.get(GET_RESULT + id);
            if (resp.status === 200) {
                this.setState({ result: resp.data });
            }
        } catch {
            const { history } = this.props;
            history.push(BASE_PATH + 'error');
        }
    }

    render() {
        const { result } = this.state;

        return result ? <ResultCard result={result} /> : <Loader />;
    }
}

export default ResultCardContainer;
