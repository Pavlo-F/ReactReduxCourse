import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer'
import PageContainer from '../containers/PageContainer'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                </header>

                <PageContainer />
         
            </div>
        )
    }
}
