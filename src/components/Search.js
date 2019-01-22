import React from 'react';

/**
 * 検索用コンポーネント
 */
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    handleChange = e => {
        const title = e.target.value;
        // 自分の値を変更
        this.setState({
            title: title
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const {getUrls, history} = this.props;
        getUrls(this.state.title);
        history.push('/viewer');
        this.setState({title: ''});
    };

    render() {
        const {buttonText} = this.props;
        return (<div>
            <h2> find your gif </h2>
            <form onSubmit={this.handleSubmit}>
                <input type="search" value={this.state.title} onChange={this.handleChange} />
                <input type="submit" value={buttonText} />
            </form>
        </div>)
    }
}