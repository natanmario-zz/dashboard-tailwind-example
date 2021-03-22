export default function Sidebar() {
    return(
        <div className="fixed py-7 items-center flex flex-col justify-between -mt-7 bg-white w-28 h-full">
            <img src="to-do-list.svg" alt="logo" className="w-8"/>
            <div className="flex flex-col space-y-8">
                <img src="calendar.svg" alt="calendar" className="w-5"/>
                <img src="list.svg" alt="list" className="w-5 opacity-20"/>
                <img src="money-graph-with-up-arrow.svg" alt="graph" className="w-5 opacity-20"/>
                <img src="settings.svg" alt="" className="w-5 opacity-20"/>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-blue-500 text-lg">16:00</span>
                <span className="text-xs">May 19</span>
            </div>
        </div>
    );
}