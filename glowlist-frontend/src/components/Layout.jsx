import Sidebar from "./Sidebar";


export default function Layout(){
    return (
        <div className="d-flex flex-column w-screen">
            <Headers />
            <div className="d-flex flex-grow-1">
                <Sidebar />
                <div className="container-fluid">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}