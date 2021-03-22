export default function Status() {
    return(
        <div className='flex justify-between border-t-2 pt-6'>
            <div>
                <span class="text-xs font-semibold pr-6">Completos: 2/3</span>
                <div class="flex-1 h-4px bg-gray-300 mt-1 rounded relative">
                    <div class="h-4px w-2/3 bg-blue-500 rounded"></div>
                </div>
            </div>
            <div class="flex items-center">
                <button class="h-7 w-7 mr-2.5">
                    <img src="plus.svg" alt="add"/>
                </button>
                <span class="text-xs font-semibold">Add Tarefa</span>
            </div>      
        </div>
    );

}