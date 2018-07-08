import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToSaved, removeFromSaved } from "../../../store/properties/actions";
import { getAgency, getById } from "../../../store/properties/reducer";
import { bindActionCreators } from "redux";
import { Panel } from "react-bootstrap";
import styles from "./css/PropertyItem.css";


class PropertyItem extends React.Component {
  render() {
    const { id, onClick, isAdd, agency, property } = this.props;
    const headingStyle = { background: agency.brandingColors.primary };
    const logo = agency.logo;
    const mainImage = property.mainImage;
    return (
      <Panel>
        <Panel.Heading style={headingStyle}>
          <span>
            <img src={logo} />
          </span>
        </Panel.Heading>
        <Panel.Body>
          <div className={styles.bodyContainer}>
            <img src={mainImage} className={styles.mainImg} />
            <div className={styles.middle}>
              <button
                className={styles.button}
                onClick={() => {
                  onClick(id);
                }}
              >
                {isAdd ? "Add" : "Delete"}
              </button>
            </div>
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}

//const mapDispatchToProps = (dispatch, ownProps) => {
//  return ownProps.isAdd? { onClick:  (id) => { dispatch((dispatch, getState) => { dispatch(addToSaved(id))})}}
//  : { onClick: (id) => { dispatch((dispatch, getState) => {dispatch(removeFromSaved(id))})} }
//}

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      onClick: ownProps.isAdd ? addToSaved : removeFromSaved
    },
    dispatch
  );

const mapStateToProps = (state, ownProps) => {
  return {
    agency: getAgency(state, getById(state, ownProps.id).agency),
    property: getById(state, ownProps.id)
  };
};

PropertyItem.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isAdd: PropTypes.bool.isRequired,
  agency: PropTypes.object
};

export default PropertyItem;

export const ConnectedPropertyItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyItem);
