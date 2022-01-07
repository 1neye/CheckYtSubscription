import {authenticate, loadClient, execute, checkSubscription} from '../scripts/YtAPi'

let HomePage = () => {
    return (
        <div>
            <button onClick={ async () => {
        await authenticate().then(loadClient)
        let res = await execute()
        let pass = await checkSubscription(res)
        console.log(pass)
      }}>authorize and load</button>
        </div>
    )
} 

export default HomePage