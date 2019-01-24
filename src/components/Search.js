import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        marginTop: 13,
    },
});

/**
 * 検索用コンポーネント
 */
class Search extends React.Component {
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
        const {getUrls} = this.props;
        getUrls(this.state.title);
        // history.push('/viewer');
        this.setState({title: ''});
    };

    render() {
        const {buttonText, classes} = this.props;
        return (<div>
            {/*<h2> find your gif </h2>*/}
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id="standard-name"
                    label="検索ワード"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.title} onChange={this.handleChange}
                />

                {/*<input type="search" value={this.state.title} onChange={this.handleChange} />*/}
                <Button onClick={this.handleSubmit} variant="contained" color="secondary"
                        className={classes.menuButton}>
                    {buttonText}
                    <SearchIcon />
                </Button>
            </form>
        </div>)
    }
}

export default withStyles(styles)(Search);