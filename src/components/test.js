import React, {
    Component
} from 'react';

class Test extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        if (this.props.celsius >= 100) {
            return <p>The water would boilqw.{this.props.children}</p>;
        }
        return <p>The water would not boil.{this.props.children} {this.props.lastName}</p>;
    }
}

export default Test;