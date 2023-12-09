import React from 'react';

class ErrorCatcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
        console.log(window.location.host);
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('ERRLOG');
        console.log(error);
    }

    render() {
        if (
            this.state.hasError &&
            window.location.host.indexOf('dev') === -1 &&
            window.location.host.indexOf('localhost') === -1 &&
            window.location.host.indexOf('192') === -1
        ) {
            window.location.href = '/user/error';
            return <h1>Something went wrong. (redirect)</h1>;
        }
        if (this.state.hasError) {
            return (
                <div>
                    Something went wrong.
                </div>
            );
        }

        return this.props.children;
    }
}
export default ErrorCatcher;
