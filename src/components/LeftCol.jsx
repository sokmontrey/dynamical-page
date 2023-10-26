import IntroSimulation from './visualization/IntroSimulation.jsx';

export default function LeftCol({children, id=''}){
    return <div className='fixed w-[50vw] h-[100vh] flex justify-end items-center' id={'left-col ' + id}>
        <div>
            {children}
        </div>

        <div className='w-[1px] h-[20vh] bg-[white] m-5 mr-6'></div>
    </div>;
}