import Status from "./status";

export default function AllStatus() {
    return(
        <section className='pt-10 bottom-0 grid grid-cols-3 gap-x-14 gap-y-4 px-16'>
            <Status/>
            <Status/>
            <Status/>
        </section>
    );
}