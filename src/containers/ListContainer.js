import {connect} from 'react-redux';
import List from '../components/List';
import {addListItem, removeListItem, addItemRedux, removeItemRedux, changeBase } from '../actions/list';

const mapStateToProps = state => {
    return {
        listData: state.list.data,
        firebaseListData: state.list.firebaseData,
        isFirebase: state.list.isFirebase
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addListItem: (item) => {dispatch(addListItem(item))},
        removeListItem: (item) => {dispatch(removeListItem(item))},
        addItemRedux: (item) => {dispatch(addItemRedux(item))},
        removeItemRedux: (item) => {dispatch(removeItemRedux(item))},
        changeBase: (val) => {dispatch(changeBase(val))}

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
