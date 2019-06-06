/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import DefaultTimeInput from './components/DefaultTimeInput';
// PropTypes
import UserdataModalTypes from './UserdataModalWindow.types';

const UserdataModalWindow = (
  {
    office,
    officeList,
    defaultStartTime,
    // Actions
    setUserData,
  },
) => (
  <div
    className="fade modal modal-main"
    data-keyboard="false"
    data-backdrop="static"
    id="modal-main"
    style={{ display: 'none' }}
  >

    <div className="modal-dialog">
      <div className="modal-content">

        <div className="modal-header bg-primary">
          <h4 className="modal-title pull-left">
          Munkaidő nyilvántartás szerkesztése
          </h4>
          <a className="close" data-dismiss="modal" />
        </div>

        <div className="modal-body">
          <div className="content-body">
            <div className="premodal-form show">
              <form>

                <div className="form-group">
                Telephely
                  <select
                    name="office"
                    className="form-control select2 input-sm"
                    id="set-office-input"
                  >
                    {officeList[0] && officeList.map(entry => (
                      <option
                        key={entry[0]}
                        value={entry[0]}
                        selected={entry[0] === office}
                      >
                        {entry[1]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <div id="default-time-input-container">
                    Preferált kezdési idő beállítása
                    <DefaultTimeInput defaultStartTime={defaultStartTime} minStep={60} />
                  </div>
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="button"
                    // eslint-disable-next-line no-undef
                    onClick={() => setUserData()}
                    data-toggle="modal"
                    data-target="#modal-main"
                  >
                    <i className="fa fa-save" />

                  Mentés
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

UserdataModalWindow.propTypes = UserdataModalTypes;

export default UserdataModalWindow;
