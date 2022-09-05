import './Menu.css'
const Menu = ({ onClick }) => {
    return (
        <div className="Menu">
            <button className="button" onClick={onClick}>
                Play Tetris
            </button>
        </div>
            
    )
}


export default Menu;