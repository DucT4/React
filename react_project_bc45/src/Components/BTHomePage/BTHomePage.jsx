//rcc
import React, { Component } from 'react'
import BTContent from './BTContent'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTNavigation from './BTNavigation'

export default class BTHomePage extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <div className='row m-0 p-0'>
                    <div className='col-6'>
                      <BTNavigation/>
                    </div>
                    <div className='col-6'>
                      <BTContent/>
                    </div>
                </div>
                <BTFooter/>
            </div >
        )
    }
}
