import { useOutletContext, useParams } from 'react-router-dom';
import { sideArray } from "../constants"
import { Side } from "../components/Side/Side"

export const Product = () => {
    const { products } = useOutletContext();
    const { id } = useParams();
    const findProduct = products.find((p) => p.id === +id)

    return (
        <>
            <section className="content">
                <div className="container">
                    {findProduct ?
                        <div className="content-box">
                            <div className="content-product">
                                <div className="content-product__left">
                                    <h2 className="content-product__title">{findProduct.title}</h2>

                                    <img src={findProduct.img} alt="product_img" className="content-product__img" />

                                    <p className="content-product__text">
                                        {findProduct.description}</p>
                                </div>
                                <div className="content-product__right">
                                    <h2 className="content-product__price">{findProduct.price}</h2>

                                    <button className="btn btn-primary btn-large">Show phone number</button>
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
                        :
                        <h2>There is no such product</h2>
                    }

                </div>
            </section>
        </>
    )
}