import {menuCategories1, menuCategories2, menuItems} from "./data";

const rootElement = document.createElement("DIV");
        rootElement.id = "root";
        document.body.appendChild(rootElement);

        function Navbar(props) {
            function renderFarm() {
                return props.menuCategoriesList.map(function (item) {
                    return (
                        <li className="category-name">{item.lableFarsi}</li>
                    );
                });
            }
            return (
                <ul className="navbar">{renderFarm()}</ul>
            );
        }

        function Header() {
            return (
                <div className="header">
                    <div className="container">
                        <div className="header-content">
                            <h1>کافه رستوران مِیسِن</h1>
                            <h2>Mason Cafe & Restaurant Since 1982</h2>
                            <Navbar menuCategoriesList={menuCategories1}></Navbar>
                            <Navbar menuCategoriesList={menuCategories2}></Navbar>
                        </div>
                    </div>
                </div>
            );
        }

        function Footer() {
            return (
                <div className="footer">فوتر</div>
            );
        }

        const siteWrapper = (
            <div className="site-wrapper">
                <Header></Header>
                <Footer></Footer>
            </div>
        );

        ReactDOM.render(siteWrapper, rootElement);