import imgOne from "../../../assets/qZone1.png"
import imgTwo from "../../../assets/qZone2.png"
import imgThree from "../../../assets/qZone3.png"

const QuieZone = () => {
    return (
        <div>
            <h4 className="text-start">Quir Zone</h4>
            <img className="mt-2 img-fluid " src={imgOne} alt="" />
            <img className="mt-4 img-fluid " src={imgTwo} alt="" />
            <img className="mt-4 img-fluid " src={imgThree} alt="" />
        </div>
    );
};

export default QuieZone;