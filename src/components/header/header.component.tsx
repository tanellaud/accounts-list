import React from 'react';
import Button from '@mui/material/Button';
import './header.styles.scss';

const Header = () => (
    <div className='header__container'>
        <div className='header__title-container'>
            <h1 className='header__title'>Account users</h1>
        </div>
        <div className='header__search-box'>
            <form>
                <input type="search" placeholder='Search' className='search-input'/>
                <Button
                    className="button button-blue"
                    size="medium"
                    variant="contained"
                    disableElevation>
                        Connect users
                </Button>
            </form>
        </div>
    </div>   
)

export default Header;