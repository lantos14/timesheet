import { fetchAllData, yearSelected, monthSelected } from '../../actions/actions';

export const mapStateToProps = store => ({
  selectedYear: store.calendarStore.selectedYear,
  selectedMonth: store.calendarStore.selectedMonth,
  actualMonth: store.calendarStore.actualMonth,
  yearList: store.calendarStore.yearList,
  monthList: store.calendarStore.monthList,
});

export const mapDispatchToProps = {
  fetchAllData,
  yearSelected,
  monthSelected,
};
