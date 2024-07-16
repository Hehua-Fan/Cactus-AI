import Sidebar from "@/components/sidebar";
import Dashboard from "@/components/dashboard";

const Layout = () => {
    return ( 
        <div className="h-screen flex flex-row justify-start">
            <Sidebar />
            <div className="bg-white flex-1 p-4 text-black flex-grow">
                <Dashboard />
            </div>
        </div>
     );
}
 
export default Layout;