import Category from "./category";

export default function Categories() {
    return(
        <section className='grid pt-16 grid-cols-3 gap-x-14 gap-y-4 px-16'>
            <Category name='Categoria 1'/>
            <Category name='Categoria 2'/>
            <Category name='Categoria 3'/>
        </section>
    );
}