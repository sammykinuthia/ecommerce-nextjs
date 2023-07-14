import {BiUser} from 'react-icons/bi'
export default function User(){
    return(
        <div className='flex justify-center items-center gap-1 border-r-2 px-8'>
            <BiUser className='icon w-8 h-8'/>
            <a href="">Sign up/Sign in</a>
        </div>
    )
}