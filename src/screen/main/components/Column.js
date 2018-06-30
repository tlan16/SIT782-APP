import React from 'react';
import PropTypes from 'prop-types';
import PropertyItem from './PropertyItem';

class Column extends React.Component{

  render(){
    const { ids, isAdd } = this.props;
    return(
      <ul>
          {ids.map((id) => <li> < PropertyItem id = {id} isAdd = {isAdd} /></li>)}
        </ul>
    )
  }
}

PropertyItem.propTypes = {
  ids: PropTypes.array.isRequired,
  isAdd: PropTypes.bool.isRequired
}

export default Column;