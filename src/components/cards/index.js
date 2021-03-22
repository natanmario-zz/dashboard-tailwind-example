import Card from "./card";

export default function Cards() {

    return(
        <section className='pt-6 grid grid-cols-3 gap-x-14 gap-y-4 px-16'>
            <Card title='Título' subtitle='Subtítulo' time='00:00 - 23:59'/>
            <Card title='Título' subtitle='Subtítulo' time='00:00 - 23:59'/>
            <Card title='Título' subtitle='Subtítulo' time='00:00 - 23:59'/>
            <Card title='Título' subtitle='Subtítulo' time='00:00 - 23:59'/>
            <Card title='Título' subtitle='Subtítulo' time='00:00 - 23:59'/>
            <Card title='Título' subtitle='Subtítulo' time='00:00 - 23:59'/>
            <Card title='Título' subtitle='Subtítulo' time='00:00 - 23:59'/>
            <Card title='Título' subtitle='Subtítulo' time='00:00 - 23:59'/>
        </section>
    );
}