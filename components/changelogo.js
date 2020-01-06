import React, { Component } from 'react';
export default class cl extends Component {
    constructor(props) {
        super(props);
        image_active:true }
    changeLogo() {
        console.log('logo changed');
        this.setState({image_active: this.state.image_active ? false : true});
    }
};
