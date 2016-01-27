import React from 'react';


var Header = React.createClass({

    render: function() {
        return (
            <div>
                <header className="col12 pad2y fill-navy-dark clearfix">
                    <div className="limiter contain dark">
                        <a className="inline mb-logo" href=".">Mapbox</a>
                    </div>
                </header>
            </div>
        )
    }
});

export default Header;