import React from 'react';

export default class LifeCycleEg extends React.Component {
    componentDidMount() {
        console.log('mounted');
        this.timer = setTimeout(() => {
            console.log('did unmount');
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
        console.log('unmounted');
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}