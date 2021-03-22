import Cards from './cards';
import Categories from './categories';
import Header from './header';
import AllStatus from './status';

export default function Home() {
    return(
        <div className='mt-7 ml-28 pb-7'>
            <Header/>
            <Categories/>
            <Cards/>
            <AllStatus/>
        </div>
    );
}