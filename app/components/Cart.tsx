import {BsCartDash} from 'react-icons/bs'

export default function Cart(){
    return(
        <div className='flex justify-center items-center gap-1'>
            <BsCartDash className='icon w-8 h-8'/>
            <p>Cart</p>
        </div>
    )
}