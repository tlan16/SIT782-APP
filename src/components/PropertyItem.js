import React from 'react';
import PropTypes from 'prop-types';

class PropertyItem extends React.Component {

  render() {
    const { id, onClick, isAdd } = this.props;
    return (<div>
      <button onClick = {() => { onClick(id) }}>{isAdd? 'Add': 'Delete'}</button>
    </div>)
  }
}

PropertyItem.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isAdd: PropTypes.bool.isRequired
};

export default PropertyItem