import React from 'react';

const Header = () => {
    return (
        <div>
            {
                <div className="text-center p-4 border-bottom border-5 border-secondary mb-5" style={{ backgroundColor: 'lavender' }}>
                    <h1 className="header-style fs-1 fw-bold" style={{ color: 'darkblue' }}>The Grand Poets's Festival</h1>
                    <p className="fs-5 text-dark" s>There are list of many poet or writers in this website. you can choose them and learn more information about them from here.</p>
                    <h2><span className="fw-bold total-budget-style" style={{ color: 'rebeccapurple' }}>Total Budget </span> = 1000 tk</h2>
                </div>}
        </div>
    );
};

export default Header;