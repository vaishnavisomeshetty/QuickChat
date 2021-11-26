import React, { Component } from 'react';
import download from '../download.jpg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import './profileCard.css'
export default class ProfileCard extends Component {
    render() {
        return (
            <div className="card profilecard">
                <img src={download} className="card-img-top rounded-circle profileImage" alt="profileImage"></img>
                <div className="card-body">
                    <h5 className="card-title text-center">Bill Bradford
                    <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <SettingsOutlinedIcon variant="contained" {...bindTrigger(popupState)} />
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </h5>
                    <p className="card-text text-center">Lead UI/UX Developer</p>
                </div>
            </div>
        )
    }
}