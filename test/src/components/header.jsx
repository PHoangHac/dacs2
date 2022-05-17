import React, { useState } from 'react';
import logo from '../../src/assets/img/logo.png';
import '../components/styles.scss';
import { Link } from 'react-router-dom';

const Header = () => {

    // Hook chỉ dùng với function components
    //output: name, setname
    //input: giá trị khởi tạo useState(initState) gán vào name(tham số đầu tiên)

    //nav: variable, setnav (function)
    //Khi muốn thay đổi nav thì gọi hàm setnav và truyền cho nó something 
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        //Khi lăng chuột trục y >= 50 --> gọi function setnav và thay đổi giá trị
        if (window.scrollY >= 50) {
            //
            setnav(true);
        } else {
            setnav(false);
        }
    }

    //Bắt sự kiện cuộn chuột
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <div className='nav-left'>
                <img src={logo} alt="" />
                <a>ROOM RENTED</a>
            </div>
            <input className='menu-btn' type="checkbox" id='menu-btn' />
            <label className="menu-icon" htmlFor="menu-btn" >
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Features'>Features</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/Login'>Login</Link>
                </li>
                <li>
                    <Link to='/Register'>Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;