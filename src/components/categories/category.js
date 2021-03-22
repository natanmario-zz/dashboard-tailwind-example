export default function Category(props) {
    return(
        <div class="flex ">
            <span class="mr-4">{props.name}</span>
            <button class="w-5 rouded-full">
                <img src="more.svg" alt="more" class="opacity-20"/>
            </button>
        </div>
    );
}