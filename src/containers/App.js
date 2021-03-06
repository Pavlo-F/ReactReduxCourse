﻿import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'
import './App.css'


class App extends Component {
    render() {
        const { user, page, getPhotosAction, handleLoginAction } = this.props
        return (
            <div className="app">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                </header>

                <Page
                    photos={page.photos}
                    year={page.year}
                    isFetching={page.isFetching}
                    error={page.error}
                    getPhotos={getPhotosAction}
                />
                <User
                    name={user.name}
                    isFetching={user.isFetching}
                    error={user.error}
                    handleLogin={handleLoginAction}
                />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user, // вытащили из стора (из редьюсера user все в переменную thid.props.user)
        page: store.page,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPhotosAction: year => dispatch(getPhotos(year)),
        // "приклеили" в this.props.handleLoginAction функцию, которая умеет диспатчить handleLogin
        handleLoginAction: () => dispatch(handleLogin()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)