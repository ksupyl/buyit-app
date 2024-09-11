import { Header } from "../components/Header/Header"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { cardArray } from "../constants";

export const Layout = () => {
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState([]);

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }

    const handleSearchArray = () => {
        setProducts(cardArray.filter((p) => p.title.includes(searchText) || p.price.includes(searchText)));
    }

    useEffect(() => {
        setProducts(cardArray);
    }, [])

    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input 
                                type="text" 
                                value={searchText}
                                onChange={handleSearch}
                            />
                            <button className="btn btn-primary search-btn" onClick={handleSearchArray}>
                                <img src="/img/search.svg" alt="search" className="search-btn__icon" />
                                <span className="search-btn__text">Search</span>
                            </button>
                        </div>
                    </div>
                </section>

                <Outlet context={{products}}/>
            </main>
        </>
    )
}