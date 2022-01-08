import { useNavigate } from "react-router-dom";

let CathPage = () => {

    let navigate = useNavigate();

    return (
        <div>
            <h1>Привет я вижу ты хочешь получить код.</h1>
            <p>Забирай код ниже по кнопке</p>
            <button onClick={() => {
                navigate("/Subscribe", { replace: true });
            }}>Получить код</button>
        </div>
    )
}

export default CathPage