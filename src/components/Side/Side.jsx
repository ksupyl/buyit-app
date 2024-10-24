import './Side.css'

export const Side = ({title, text, img}) => {
    return (
        <>
            <div className="side">
                <img src={img} alt="delivery" className={title} />
                <h5 className="side--title">{title}</h5>
                <p className="side--text">{text}</p>
            </div>
        </>
    )
}