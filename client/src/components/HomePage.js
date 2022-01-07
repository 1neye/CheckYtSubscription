import { authenticate, loadClient, execute, checkSubscription } from '../scripts/YtAPi'
import React from 'react'
import { Navigate } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
let HomePage = (props) => {

    let navigate = useNavigate();

    return (
        <div>
            <button onClick={async () => {
                await authenticate().then(loadClient)
                let res = await execute()
                let pass = await checkSubscription(res)
                console.log(pass)
                if (pass) {
                    props.setAuth(true)
                    navigate("/ContentPage", { replace: true });
                }

            }}>authorize and load</button>
            <button onClick={() => {
                navigate("/success", { replace: true });
            }
            }>
                New route
            </button>

        </div>
    )
}

export default HomePage