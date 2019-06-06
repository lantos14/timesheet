/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

// PropTypes
import AppTypes from './App.types';

// Redux
import { mapStateToProps, mapDispatchToProps } from './redux';

// Components
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import Loading from '../../components/Loading/Loading';
import Calendar from '../../components/Calendar/Calendar';

export class App extends Component {
  componentDidMount() {
    this.props.fetchAllData();
  }

  render() {
    const {
      fetchAllData, fetchInProgress, firstLoad,
    } = this.props;
    return (
      <div className="react-app" data-test="component-app">
        {!firstLoad
          ? (
            <div className="app-content">
              <Calendar fetchAllData={fetchAllData} />
              <Header />
              {fetchInProgress ? <Loading /> : <Table />}
            </div>
          )
          : <Loading />
        }
      </div>
    );
  }
}

App.propTypes = AppTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
