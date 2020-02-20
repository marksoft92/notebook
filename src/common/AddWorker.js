import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import HomeApp, { addWorker } from '../common/HomeApp';
class AddWorker extends Component {
    state = {
        id: '',
        avatarUrl: '',
        name: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        about: ''
    }
    handleChangeId = (e) => {
        this.setState({
            id: e.target.value,
        })
    }
    handleChangeAvatarUrl = (e) => {
        this.setState({
            avatarUrl: e.target.value,
        })
    }
    handleChangeName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }
    handleChangeCompany = (e) => {
        this.setState({
            company: e.target.value,
        })
    }
    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    handleChangePhone = (e) => {
        this.setState({
            phone: e.target.value,
        })
    }
    handleChangeAddress = (e) => {
        this.setState({
            address: e.target.value,
        })
    }
    handleChangeAbout = (e) => {
        this.setState({

            about: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventdefault()
        this.props.location.state.add()
    }

    render() {
        console.log(this.props)
        return (<>

            <form>
                <input type="text" placeholder="id" value={this.state.id} onChange={this.handleChangeId} />
                <input type="text" placeholder="avatarUrl" value={this.state.avatarUrl} onChange={this.handleChangeAvatarUrl} />
                <input type="text" placeholder="name" value={this.state.name} onChange={this.handleChangeName} />
                <input type="text" placeholder="company" value={this.state.company} onChange={this.handleChangeCompany} />
                <input type="text" placeholder="email" value={this.state.email} onChange={this.handleChangeEmail} />
                <input type="text" placeholder="phone" value={this.state.phone} onChange={this.handleChangePhone} />
                <input type="text" placeholder="address" value={this.state.address} onChange={this.handleChangeAddress} />
                <input type="text" placeholder="about" value={this.state.about} onChange={this.handleChangeAbout} />
                <button onClick={this.handleClick}>Add</button>
            </form>
        </>
        )
    }
}
export default AddWorker