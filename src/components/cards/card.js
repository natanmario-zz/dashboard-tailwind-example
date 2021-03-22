export default function Card(props) {
    return(
        <div class="bg-white rounded-md px-3 py-4">
            <div class="flex pb-4 pt-2 border-l-2 border-blue-500 pl-5">
                <img src="check.svg" alt="check"
                    class="w-10 h-10 mr-4 p-2.5 rounded-full bg-gray-100 "
                />
            <div>
                <h2 class="text-lg">{props.title}</h2>
                <h3 class="mb-1.5 text-xs text-gray-400">{props.subtitle}</h3>
                <span class="text-xs font-semibold text-blue-500">{props.time}</span>
            </div>
            </div>
        </div>
    );
}