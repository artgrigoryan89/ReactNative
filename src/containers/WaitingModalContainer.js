import {connect} from 'react-redux';
import {hideWaitingModal} from '../actions/waitingModal';
import {WaitingModalComponent} from '../components/WaitingModal';

const mapStateToProps = state => {
    return {
        isModalVisible: state.modal.isModalVisible
    }
};

const mapDispatchToProps = dispatch => {
    return {
        hideWaitingModal: () => {
            dispatch(hideWaitingModal())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitingModalComponent);
