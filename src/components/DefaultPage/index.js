import './DefaultPage.scss'
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"

export default function DefaultPage() {
    return (
        <div className='header'>
            <Navbar/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}