import React from 'react';





const LoginPassword = props => {



    return (
        <form
            onSubmit={props.submit}>
            <input

                type="text"
                value={props.login}
                onChange={props.changeLogin}
                placeholder="Login" />

            <input checked='false'
                type="password"
                value={props.password}
                onChange={props.changePassword}
                placeholder="Password" />

            <button>Zaloguj</button>
        </form>
    );

}
export default LoginPassword;