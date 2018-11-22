import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default class Login extends Component {
    // HERE!!!
    constructor(props) {
        super(props)

        this.username = '';
        this.password = '';
    }
    
    render() {
        return (
            <div>
                
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center text-white mb-4">
                                Bootstrap 4 Login Form
                            </h2>
                            
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <div className="card rounded-0">
                                            <div className="card-header">
                                                <h3 className="mb-0">
                                                    Login
                                                </h3>
                                            </div>
                                        <div className="card-body">
                                            <form className="form" autoComplete="off" id="formLogin" method="POST">
                                                <div className="form-group">
                                                    <label htmlFor="uname1">Username</label>
                                                    <input type="text" className="form-control form-control-lg rounded-0" name="uname1" id="uname1" required=""></input>
                                                    <div className="invalid-feedback">Oops, you missed this one.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control form-control-lg rounded-0" id="pwd1" required="" autoComplete="new-password"></input>
                                                    <div className="invalid-feedback">Enter your password too!</div>
                                                </div>
                                                <div>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"></input>
                                                        <span className="custom-control-indicator"></span>
                                                        <span className="custom-control-description small text-dark">Remember me on this computer</span>
                                                    </label>
                                                </div>
                                                    <button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
                                            </form>
                                        </div>                          {/* <!--/card-block--> */}
                                    </div>
                                                            {/* <!-- /form card login --> */} 
                                </div>
                            </div>
                                                    {/* <!--/row--> */}         
                        </div>
                                                {/* <!--/col--> */}
                    </div>
                                            {/* <!--/row--> */}
                </div>
                            {/* <!--/container--> */}
            </div>
        );
    }
}