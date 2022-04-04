import React from "react";

function Footer() {
    return (
        <footer className="footer bg-light mt-4">
            <div className="container">
                <div className="row">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="./aboutus.html">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="./contactus.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address className="address">
                        121, Clear Water Bay Road<br/>
                        Clear Water Bay, Kowloon<br/>
                        HONG KONG<br/>
                        <i className="fa fa-phone fa-lg"></i> : +852 1234 5678<br/>
                        <i className="fa fa-fax fa-lg"></i> : +852 8765 4321<br/>
                        <i className="fa fa-envelope fa-lg"></i> : <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="https://youtu.be/IOIQPBo1YJ4"><i className="fa fa-google-plus fa-lg"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook fa-lg"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin fa-lg"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-lg"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube fa-lg"></i></a>
                            <a className="btn btn-social-icon btn-reddit" href="mailto:noreply@github.com"><i className="fa fa-envelope-o fa-lg"></i></a>
                        </div>
                    </div>
            </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2018 Ristorante Con Fusion</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
