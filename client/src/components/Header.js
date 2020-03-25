import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderComtent(){
        switch(this.props.auth){
            case null:
                return ;
            case false:
                return <a href="/auth/google">Sign in with goolge</a>;
            default:
                return <a href='/api/logout'>Logout</a>;
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                     to={this.props.auth ? '/surveys' : '/'}    
                     className="brand-logo">
                        GoFeedback
                    </Link>
                    <ul  className="right">
                        <li>
                            {this.renderComtent()}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }){
    return { auth };
}

export default connect(mapStateToProps)(Header);