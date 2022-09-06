import "./BoardCell.css";

const BoardCell = ({ cell }) => (
    <div className={`BoardCell ${cell.classname}`} >
        <div className="Sparkle"></div>
    </div>
)

export default BoardCell;