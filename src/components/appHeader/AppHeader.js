import { NavLink } from 'react-router-dom';
import logo from '../../resources/logo.svg';
import burgerMenu from '../../resources/burger-menu.svg';
import './appHeader.css';

const AppHeader = () => {

    const openAndCloseBurger = () => {
        const header = document.querySelector('.header');
        header.classList.toggle('burger-header');
        header.style.zIndex = '777'
        const menu = document.querySelector('.menu__list');
        
       if (menu.style.display === 'block'){
           menu.style.display = 'none'
       } else {
           menu.style.display = 'block'
       }
    }
    return(
        <header className="header">
            <div className="header__container">
                <a href="#/" className="header__logo">
                    <img src={logo} alt="logo" />
                </a>
                <div className="header__timer">Тут должен быть таймер</div>
                <div className="header__menu menu">
                    <div onClick={openAndCloseBurger} className="menu__button">
                        <img src={burgerMenu} alt="" />
                    </div>
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <NavLink to="/timetable" className="menu__link" style={({isActive}) => ({'color' : isActive ? 'red' : '-webkit-link'})}>Расписание</NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink to="/useful" className="menu__link" style={({isActive}) => ({'color' : isActive ? 'red' : '-webkit-link'})}>Чё то полезное</NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink to="/1000-7" className="menu__link" style={({isActive}) => ({'color' : isActive ? 'red' : '-webkit-link'})}>1000-7???</NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink to="/aboutme" className="menu__link" style={({isActive}) => ({'color' : isActive ? 'red' : '-webkit-link', 'marginRight' : '0px'})}>who i am? </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;