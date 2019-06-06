// eslint-disable-next-line import/prefer-default-export
export const mapStateToProps = ({ timesheetStore, calendarStore }) => ({
  tableData: timesheetStore.monthDays,
  selectedTimeIsPassed: calendarStore.selectedTimeIsPassed,
});
