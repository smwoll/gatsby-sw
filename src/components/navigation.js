import React from "react"
import { Link } from "gatsby"
import './navigation.scss'

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    render() {
        return (
            <>
                <div id="nav-wrapper" className={this.state.active && 'active'}>
                    <span className="menu-blob"></span>
                    <button onClick={() => this.setState({ active: !this.state.active })} className={this.state.active && 'active'} aria-label="Site Navigation">
                        <span class="menu-icon">
                            <span class="menu-line menu-line-1"></span>
                            <span class="menu-line menu-line-2"></span>
                            <span class="menu-line menu-line-3"></span>
                        </span>
                        
        </button>

                    
                    <div className="menu" onClick={() => this.setState({ active: !this.state.active })} onKeyDown={() => this.setState({ active: !this.state.active })} role="button"
                        tabIndex="0">
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/how">How I made this</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>

                    </div>

                </div>
                
            </>
        )
    }

}

export default Navigation