import IntroSimulation from './IntroSimulation.jsx';

export default function LeftCol({children}){
    return <div className='fixed w-[50vw] h-[100vh] flex justify-end items-center'>
        {children}
        <div id='left-column'>
            <IntroSimulation />
        </div>

        <div className='w-[1px] h-[20vh] bg-[white] m-5 mr-6'></div>
    </div>;
}