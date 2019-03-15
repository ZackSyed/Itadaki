import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AddFriendContainer from '../friend/add_Friend_Container';
import SearchByUsername from '../add_by_search/search_by_username';
import SearchByEmail from '../add_by_search/search_by_email';
import TabFormContainer from '../tab/tab_form_container';
import DropdownContainer from '../navbar/menu_modal_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
       case 'friend':
          component = <AddFriendContainer />;
          break;
       case 'username':
          component = <SearchByUsername />;
          break;
       case 'email': 
          component = <SearchByEmail />;
          break;
       case 'tab':
          component = <TabFormContainer />;
          break;
        case 'menu':
          component = <DropdownContainer />
          break;
        default:
          return null;
  }


  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);