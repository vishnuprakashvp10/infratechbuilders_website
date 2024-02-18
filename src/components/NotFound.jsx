import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex w-full flex-col justify-center items-center py-10 text-lg text-center">
            <h1 className="text-7xl font-bold" >404 Error</h1>
            <h3>The page you were looking for may have been moved, deleted, or possibly never existed.</h3>
            <span>Please return to our <Link to={"/"} className="font-semibold text-orange-400">homepage</Link></span>
        </div>
    )
}

export default NotFound;