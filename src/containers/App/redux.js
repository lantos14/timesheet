import { fetchAllData } from '../../actions/actions';

export const mapStateToProps = store => ({
  fetchInProgress: store.fetchStore.fetchInProgress,
  firstLoad: store.fetchStore.firstLoad,
});

export const mapDispatchToProps = {
  fetchAllData,
};
