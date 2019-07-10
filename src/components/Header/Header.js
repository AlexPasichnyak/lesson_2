import React, {Fragment} from 'react';
import Title from './Title/Title'
import Navigation from './Navigation/Navigation';

const Header = () => {
    return (
        <Fragment>
            <Title/>
            <Navigation/>
        </Fragment>
    )
}

export default Header;

