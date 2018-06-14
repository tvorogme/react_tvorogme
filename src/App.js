import React, {Component} from 'react';
import styles from './styles/atoms/basics.scss';

class App extends Component {
    render() {
        console.log(styles.myCoolHeader);
        return (
            <div>
                <header>
                    <h1 className={styles.myCoolHeader}>Welcome to React</h1>
                </header>
                <p>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
