/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/core';
import { formatPhpTimestamp, minToHour } from '../../../../../../utils/utils';
import DisplayTableType from './DisplayTable.types';
import Title from './components/Title';
import Display from './components/Display';

export const DisplayStyle = {
  bold: css`
    font-weight: bold;
  `,
};

export const DisplayTable = (
  {
    fullname, defaultStartTime, firstDay, lastDay, office,
  },
) => (
  <div className="col-sm-12 col-md-5">
    <table>
      <tbody>

        <tr className="userdata-name">
          <Title id="name">
            Név:
            <span className="pull-right" />
          </Title>
          <td className="username-display" css={DisplayStyle.bold}>
            {fullname}
          </td>
        </tr>

        <tr className="userdata-first-last-day">
          <Title>Időszak:</Title>
          <td className="first-last-day-display" css={DisplayStyle.bold}>
            {`${formatPhpTimestamp(firstDay)} - ${formatPhpTimestamp(lastDay)}`}
          </td>
        </tr>

        <tr className="userdata-default-start-time">
          <Title>Preferált kezdés: </Title>
          <td className="start-time-display" css={DisplayStyle.bold}>
            {minToHour(defaultStartTime)}
          </td>
        </tr>

        <tr className="userdata-office">
          <Title valign="top">
            Telephely:
          </Title>
          <Display string={office}>{office}</Display>
        </tr>

      </tbody>
    </table>

  </div>
);

DisplayTable.propTypes = DisplayTableType;

export default DisplayTable;
