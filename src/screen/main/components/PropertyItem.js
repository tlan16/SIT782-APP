import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToSaved, removeFromSaved } from '../../../store/properties/actions'
import { bindActionCreators } from 'redux'

class PropertyItem extends React.Component {

  render() {
    const { id, onClick, isAdd } = this.props;
    return (<div>
      <h1>{id}</h1>
      <button onClick = {() => { onClick(id) }}>{isAdd? 'Add': 'Delete'}</button>
    </div>)
  }
}

//const mapDispatchToProps = (dispatch, ownProps) => {
    //  return ownProps.isAdd? { onClick:  (id) => { dispatch((dispatch, getState) => { dispatch(addToSaved(id))})}} 
    //  : { onClick: (id) => { dispatch((dispatch, getState) => {dispatch(removeFromSaved(id))})} }
//}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  onClick: ownProps.isAdd? 
    addToSaved
  : removeFromSaved
}, dispatch)

PropertyItem.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isAdd: PropTypes.bool.isRequired
};

export default PropertyItem

export const ConnectedPropertyItem = connect(null, mapDispatchToProps)(PropertyItem)