
// eslint-disable-next-line no-unused-vars
/** @jsx jsx */
import { jsx } from '@emotion/core';

// PropTypes
import EditButtonTypes from './EditButton.types';

// Style
import style from './style';

export const EditButton = ({
  selectedTimeIsPassed,
}) => (
  <button
    type="button"
    disabled={selectedTimeIsPassed}
    className="pull-right"
    id="editit"
    css={style.editBtn}
  >
    <i
      className="fa fa-pencil"
      data-toggle={selectedTimeIsPassed ? null : 'modal'}
      data-target="#modal-main"
    />
  </button>
);

EditButton.propTypes = EditButtonTypes;

/** @component */
export default EditButton;
