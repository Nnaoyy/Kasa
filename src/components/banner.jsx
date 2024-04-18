import './banner.css'

function Banner ({title, page}){

    return (
        <div className={`banner banner-${page}`}>
           <h1> {title} </h1>
        </div>
    )
}

export default Banner