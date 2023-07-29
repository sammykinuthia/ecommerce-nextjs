import {BsCartDash} from 'react-icons/bs'

export default function Cart(){
    return(
        <div className='flex justify-center items-center gap-1'>
            <a href="" className='flex items-center'>
            <BsCartDash className='icon w-8 h-8'/>
            <span className='hidden 2xl:block px-2 '>
            Cart
            </span>
            </a>
        </div>
    )
}