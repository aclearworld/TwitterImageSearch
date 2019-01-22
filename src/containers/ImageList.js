import {connect} from "react-redux";
import ImageList from '../components/ImageList'

const mapStateToProps = state => {
    return {
        urlList: state.imageUrls
    };
};

export default connect(mapStateToProps, null)(ImageList);
