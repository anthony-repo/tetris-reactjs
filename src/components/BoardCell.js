import "./BoardCell.css";

const Boardcell = ({ cell }) => (
    <div className={`BoardCell ${cell.classname}`} >
        <div className="Sparkle"></div>
    </div>
)

export default Boardcell;