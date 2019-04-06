import {connect} from 'react-redux';
import List from '../components/List';
import {addListItem, removeListItem} from '../actions/list';

const mapStateToProps = state => {
    return {
        listData: state.list.data,
        firebaseListData: state.list.firebaseData
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addListNote: (item) => {dispatch(addListItem(item))},
        removeListItem: (item) => {dispatch(removeListItem(item))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
