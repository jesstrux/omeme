import { Component } from 'react';

class MiniRouter extends Component {
    componentDidMount(){
        window.addEventListener('popstate', function(event) {
            if (event.state) {
                console.log("Popstate changed: ", event.state);
            }
        }, false);
    }

    render() { 
        return null;
    }
}
 
export default MiniRouter;