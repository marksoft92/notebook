import React from 'react';
import styles from '../HomeApp/HomeApp.scss';
import LoginPassword from '../LoginPassword/LoginPassword.js';


const login = '1';
const password = '1';

class HomeApp extends React.Component {

    state = {
        login: '',
        password: '',
        cheked: false
    }
    handleLoginChange = e => {
        this.setState({
            login: e.target.value
        });
    }
    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.login == login && this.state.password == password) {

            this.setState({

                cheked: true
            }); console.log(this.state.cheked)
        } else { alert('Błędne hasło') }
    }
    render() {
        return (
            <div className={styles.component}>
                <LoginPassword
                    submit={this.handleSubmit}
                    login={this.state.login}
                    password={this.state.password}
                    changeLogin={this.handleLoginChange}
                    changePassword={this.handlePasswordChange}
                />
            </div>
        );
    }
}
export default HomeApp;