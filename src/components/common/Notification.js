import React from 'react';


export const Notification = ({message, onClose}) => {
    return(
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <button type="button" onClick={onClose} className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"/>
            </div>
            <div className="toast-body">
                {message}
            </div>
        </div>
    )
}