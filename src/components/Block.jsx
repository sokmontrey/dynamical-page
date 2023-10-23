export default function Block({
    children, 
    h='auto', 
    w='80%',
}){

    return <div className='flex justify-start items-center'
    style={{
        width: w,
        height: h,
    }}>
        <div>
            {children}
        </div>
    </div>;
}