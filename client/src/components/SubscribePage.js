import { authenticate, loadClient, execute, checkSubscription } from '../scripts/YtAPi'
import React from 'react'
import { useNavigate } from "react-router-dom";

let SubscribePage = (props) => {

    let navigate = useNavigate();

    let checkFunc = async () => {
                await authenticate().then(loadClient)
                let res = await execute()
                let pass = await checkSubscription(res)
                if (pass) {
                    props.setAuth({
                        auth: true,
                        errorMsg: ''
                    })
                    navigate("/ContentPage", { replace: true });
                } else {
                    props.setAuth({
                        auth: false,
                        errorMsg: 'Подписка не оформлена'
                    })
                }
    }

    return (
        <div>
            <h1>Что бы ссылка на код стала доступна, подпишись на мой youtube канал.</h1>
            <div>
            <button onClick={() => {
                window.open('https://www.youtube.com/channel/UCaR4U-N4qZIiwUOAPRMyvBw?sub_confirmation=1')
            }}>Подписаться</button>
            <button onClick={checkFunc}>Я подписался</button>
            </div>

            <div>{props.auth.errorMsg}</div>
        </div>
    )
}

export default SubscribePage