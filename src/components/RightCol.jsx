export default function RightCol({children, id}){
    return <div id={'right-column ' + id} className='pl-[50vw] flex flex-col'>
        {children}
    </div>;
}