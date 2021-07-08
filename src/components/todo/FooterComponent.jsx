import React, {Component} from 'react'

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2021 @React.js App by Suraj Thomas.</span>
                <span className="text-muted">If this app has benfited you ,please share a small amount for SickKids of Canada </span>
                <span className="text-muted">This Project is created to support SickKids you can visit them here <div><a href="https://www.sickkids.ca/" className="navbar-brand">Sick Kids </a></div> </span>
                <span> <span onclick="window.location.href='';"></span> </span>

                <div><a href="https://secure.sickkidsfoundation.com/donate?appeal=GEA-DIGT-SKR" className="navbar-brand">Please donate directly </a></div>
            </footer>
        )
    }
}

export default FooterComponent