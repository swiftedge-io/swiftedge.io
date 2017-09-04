import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import EmailDashboard from '../components/EmailDashboard';


let bookmark = false;
let base = {
  name: 'Alejo Rodriguez',
  email: 'a.rodsott@gmail.com',
  company: 'SwiftEdge'
};
let data = [];
for (var i = 0; i < 100; i++) {
  bookmark = !bookmark;
  data.push({
    bookmark: bookmark,
    name: base.name,
    email: base.email,
    company: base.company
  });
}

function mapStateToProps(state) {
  return {
    filters: {
      showBookmarked: state.emailFilters.showBookmarked,
      showUnBookmarked: state.emailFilters.showUnBookmarked,
      name: state.emailFilters.name,
      email: state.emailFilters.email,
      company: state.emailFilters.company
    },
    data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilters: function(filters) {
      dispatch(updateFilters(filters));
    }
  };
}

const EmailDashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailDashboard);

export default EmailDashboardContainer;
