import React from 'react';



const Menu = () => {
    return (
        
        <div className="contenerMenu">
            <div className="menu">
                <div className="bordureMenu">
                    <div className="aLinkMenu"><a href="/groups" className="linkMenu">Groups</a></div>
                    <div className="aLinkMenu"><a href="/groups/create" className="linkMenu">Create Group</a></div>
                    <div className="aLinkMenu"><a href="/" className="linkMenu">Home</a></div>
                    <div className="aLinkMenu"><a href="/transaction/create" className="linkMenu">Transaction</a></div>
                </div>
                
            </div>
        </div>
        
    );
};

export default Menu;