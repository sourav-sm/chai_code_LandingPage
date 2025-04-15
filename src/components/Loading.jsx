import chaiIcon from '../assets/chai-white.png';

export default function Loading(){
    return(
        <div className='flex flex-col items-center justify-center h-screen bg-black text-white gap-4'>
            <img src={chaiIcon} alt="chai Icon"  className=' h-32 animate-pulse'/>
            <p className='text-2xl font-semibold animate-bounce text-orange-500'>Preparing Chai...</p>
        </div>
    )
}