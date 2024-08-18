
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import {AiOutlineUser} from  "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const [scrolled, setScrolled] = useState(true);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
     const { isAuthenticated } = useAuth0();

   /* const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);*/
     

    const { cartCount, showCart, setShowCart } = useContext(Context);

    return (
        <>
            <header
               className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>Contact us</li>
                   
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />

                       {isAuthenticated?(
                         <span onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      <AiOutlineUser/>
    </span>


                       ):(
 <span onClick={() => loginWithRedirect()}><AiOutlineUser/></span>
                       )}
                        <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
        </>
    );
};

export default Header;