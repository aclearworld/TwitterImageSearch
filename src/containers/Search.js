import {connect} from "react-redux";
import {getUrls} from "../actions";
import Search from "../components/Search";

const mapStateToProps = state => {
    return {
        buttonText: state.buttonText
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUrls: word => dispatch(getUrls(word))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
