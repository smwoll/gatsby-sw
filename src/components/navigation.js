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
            <div id="nav-wrapper" className={this.state.active && "active"}>
              <span className="menu-blob"></span>
              <button
                onClick={() => this.setState({ active: !this.state.active })}
                className={this.state.active && "active"}
                aria-label="Site Navigation"
              >
                <span class="menu-icon">
                  <span class="menu-line menu-line-1"></span>
                  <span class="menu-line menu-line-2"></span>
                  <span class="menu-line menu-line-3"></span>
                </span>
              </button>

              <div
                className="menu"
                onClick={() => this.setState({ active: !this.state.active })}
                onKeyDown={() => this.setState({ active: !this.state.active })}
                role="button"
                tabIndex="0"
                title="Click anywhere to close the menu."
              >
                <nav>
                  <ul>
                    <li>
                      <Link to="/" title="Go back to the front page.">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/how" title="See some helpful resources that I used while building this site.">
                        How I made this
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" title="Let's chat about how I can be of service.">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </>
        )
    }

}

export default Navigation