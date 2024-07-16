import SearchBox from "./searchbox";
import NavHeader from './navheader';
import Image from 'next/image';

const Dashboard = () => {
    return ( 
        <div>
            <div className="px-16">
                <NavHeader />
            </div>
            <div className="flex flex-col h-[calc(100vh-74px)] justify-center items-center transition-all duration-500 ease-in-out relative overflow-auto">
                <div className="pb-10">
                    <Image width={64} height={64} alt="Logo" src="/logo.png" />
                </div>
                <div className="pb-10">
                    How can I help you, bruh?
                </div> 
                <SearchBox />
            </div>  
        </div>
     );
}
 
export default Dashboard;