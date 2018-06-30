import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedPropertyItem } from './PropertyItem';

class Column extends React.Component{

  render(){
    const { ids, isAdd } = this.props;
    return(
      <ul>
          {ids.map((id) => <li> < ConnectedPropertyItem id = {id} isAdd = {isAdd} /></li>)}
        </ul>
    )
  }
}

Column.propTypes = {
  ids: PropTypes.array.isRequired,
  isAdd: PropTypes.bool.isRequired
}

export default Column;