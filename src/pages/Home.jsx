import { Card } from "../components/Card/Card"
import { sideArray } from "../constants"
import { Side } from "../components/Side/Side"
import { useOutletContext } from "react-router-dom"

export const Home = () => {
    const {products} = useOutletContext()

    return (
            <section className="content">
                <div className="container">
                    <div className="content-box">
                        <div className="content-main">
                            <h2 className="content-main__title">Recommendations for you</h2>

                            <div className="content-main__list">
                                {
                                    products.map(card => (
                                        <Card
                                            key={card.id}
                                            id={card.id}
                                            title={card.title}
                                            price={card.price}
                                            address={card.address}
                                            date={card.date}
                                            img={card.img}
                                        />
                                    ))
                                }

                            </div>
                        </div>

                        <div className="content-side">
                            <h3 className="content-side__title">Services and amenities</h3>

                            <div className="content-side__box">
                                <div className="content-side__list">
                                    {
                                        sideArray.map(side => (
                                            <Side
                                                key={side.id}
                                                title={side.title}
                                                text={side.text}
                                                img={side.img}
                                            />
                                        ))
                                    }
                                </div>

                                <div className="content-side__footer">
                                    <p className="content-side__footer--item">© Buy It Ltd., 2021 - 2024</p>
                                    <a href="#!" className="content-side__footer--item">Privacy Policy</a>
                                    <a href="#!" className="content-side__footer--item">The processing of the data</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}