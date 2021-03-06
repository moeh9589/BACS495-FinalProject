import { useNavigate } from "react-router-dom";


function Backbutton() {
    let navigate = useNavigate();

    return(
        <div>
            <>
                <button className="button" onClick={() => navigate(-1)}>
                    Back
                </button>
            </>
        </div>
    );
}

export default Backbutton;