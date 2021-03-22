
export default function Header() {
    return(
        <header class="px-16 flex justify-between items-center">
            <nav class="flex space-x-6 text-2xl">
                <li class="opacity-20"><a href="">Ontem</a></li>
                <li class=""><a href="">Hoje</a></li>
                <li class="opacity-20"><a href="">Amanhã</a></li>
                <div class="border-l-2 flex items-center">
                    <button class="w-5 ml-6">
                        <img src="more.svg" alt="more" class="opacity-20"/>
                    </button>
                </div>
            </nav>
            <div class="flex items-center">
                <span class="mr-3 text-xs font-semibold">
                    Categorias: <span class="text-blue-500">3/4</span>
                </span>
                <button class="w-7 p-1 rounded-full border-2 border-gray-300 mr-0.5">
                    <img src="right-arrow.svg" alt="next-arrow"
                        class="transform rotate-180"
                    />
                </button>
                <button class="w-7 p-1 rounded-full border-2 border-gray-300 ml-0.5"> 
                    <img src="right-arrow.svg" alt="next-arrow"/>
                </button>
                <div class="border-l-2 border-gray-300 ml-5">
                    <img src='https://github.com/natanmario.png' 
                    class="w-6 rounded-lg ml-5"
                    />
                </div>
                
            </div>
        </header>
    );
}