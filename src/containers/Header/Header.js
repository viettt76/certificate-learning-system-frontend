import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import styles from './Header.module.scss';
import logo from '~/assets/imgs/VEdu.png';
import { Link } from 'react-router-dom';
import Logout from '~/components/Logout';

const Header = () => {
    return (
        <div className={clsx(styles['header'])}>
            <Link to="/">
                <img width={50} height={50} src={logo} alt="VEdu" />
            </Link>
            <div className={clsx(styles['search-wrapper'])}>
                <input placeholder="Tìm tên khoá học" />
                <button className={clsx(styles['search-button'])}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div>
                <Link className={clsx('btn btn-light font-weight-bold', styles['btn-login'])} to="/login">
                    Đăng nhập
                </Link>
                <Link className={clsx('btn btn-dark font-weight-bold', styles[''])} to="/register">
                    Đăng ký
                </Link>
                <Logout />
            </div>
        </div>
    );
};

export default Header;
