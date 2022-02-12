import './galaxy-card.css'
const GalaxyCard = () => {
    return (
        <article className="galaxy-card">
            <div className='galaxy-card-title'>
            <h3 className="galaxy-name">Name goes here</h3>
            </div>
            <div className="card-info">
            <img className='galaxy-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Andromeda_Galaxy_560mm_FL.jpg/1024px-Andromeda_Galaxy_560mm_FL.jpg' alt=''/>
            </div>
        </article>
    )
}
export default GalaxyCard