import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket,user }] = useStateValue();
    

    const login = () => {
        if (user) {
            auth.signOut()
        }
    }

    return <nav className="header">
        {/* logo on the left -> img */}  
        <Link to="/">
            <img className="header__logo" src="data:image/jpeg;base64,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avtIiUmpVKDqUAUrfOrAdQ6ao1teYL5GVKWKLXNOvWyZQ6pm5yCcuQcp5s1xe+wvNRnHrKWGRRnVVU7A2sdTa15liwqoKlSoFDaAm9lbK2VrdeYA2N9uk49A13GSpRZwhuHdgiE72AHMyrsCQb2v1m5qwp0whblUtrckkkkkAnU+smNWrj1M+VmIufDYnRTaxv0uLE2jhmFasb1KbLlY5MxUqF0swC6Anz19AZs4Tw93IeoMidE/G3m35R9fSekQBRYCwEzeiTa04XCLTByjU+Jjuf8AXYbCW5F4vMtJiReIExEQEREBERAREQEREBESICReCZgTAyzSM0wvIJgbM0xLTEmYFoGwvINSaS0QJepKeJRXBDKpuLG4uCOxHWWTaQKd9hA8nxGsqMQ9EabM1NKma35GKm/pofKU8H7T2BAw9NFOuZVTPf8AOUsFJt5z21bABgQwFj3nl19mbV7h6XutzysXB/L211109JreicZN6scHxV6pyU2Wpscy0ihA7Nsv1G1p2sJwxVYO4zuNidl/pXYeu86OGwSouVCoHkP1mT4Z+hEXl6MFqTaryqaTDcGZKTMqth5kHlZWmYMCwGk5ppBkgwN14vNQMyBgbJMxEmBMREBERAREQEiTEDAzEzMyLQNZEgibLSMsDWRMCJuKyCsCuVmJWWMsjLA0rebfe2G8xYTUy3gRWrX6yqCR0Pz0+UslDABgV1dgdDcfp5S2ldvIzDL5SVp22gb1rNJL33EhBebAkDXaSBNmWMsDECSBMsskLAxtMgJIEytAgTKJMBERAREQEREBERASJMQMbRaTECCJjaZyDAwtMWPaSxjLA1FZKCbMsWgaysxyeU2kSLQMMsyCaSZkBAwCzJDJtEDK0m0gGZiBFotJiAAkyJMBERAREQEREBERAREQERECDEmRATAmZERaBjaJNotAi0i0ztGWBjaQBM7RaBhlgLM7RaBFpBEytFoGNoBmVotAkGJFpIgJMRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/2Q==" alt=""/>
        </Link>
        
        {/* Search box */}
        <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon" />
        </div>
       
    
        {/* 3 links */}
        <div className="header__nav">
            {/* 1st link */}
            <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__option">
                <span className="header__optionLineOne">HelLo {user?.email}</span>
                <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            
            </Link>
            {/* 2nd link */}
            <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            
            </Link>
            
            {/* 3rd link */}
            <Link to="/checkout" className="header__link" >
                <div className="header__optionBasket">
                    {/* Shopping basket icon */}
                    <ShoppingBasketIcon />
                    {/* Numbers of items in the basket */}
                    <span className="header__optionLineTwo header__basketCount"> {basket?.length}</span>
                </div>
            </Link>
        </div>
        {/* Basket icon with number */}
        
    </nav>;
}

export default Header
