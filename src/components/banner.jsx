import './banner.scss'

function Banner ({title, page}){

    return (
        <div className={`banner banner-${page}`}>
           {title && <h1>{title}</h1>}
        </div>
    )
}

export default Banner