import { useSelector } from "react-redux"



const Alert = () => {
    const status = useSelector((state) => state.login.satus)

    return (
        status.isLoggedIn ? (

            <div className={`alert alert-danger`} role="alert">
                <p>{status.message}</p>
            </div>
        ) : (
            <div className="alert alert-success" role="alert">
                <p>{status.message}</p>
            </div>
        )

    )
}

export default Alert