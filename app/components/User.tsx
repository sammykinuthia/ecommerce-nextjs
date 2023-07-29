import {BiUser} from 'react-icons/bi'
export default function User(){
    return(
        <div className='flex justify-center items-center gap-1 border-r-2 px-8'>
            <a className='flex items-center' href=""><BiUser className='icon w-8 h-8'/>
               <span className='hidden 2xl:block px-2'>Sign up/Sign in</span>
                </a>
        </div>
    )
}