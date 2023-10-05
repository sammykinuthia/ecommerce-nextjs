import {FaChevronRight} from 'react-icons/fa'
import Link from 'next/link'
interface CategoryTitleProp{
    leading:string,
    title:string,
    link:string
}

export default function CategoryTitle({leading, title,link}:CategoryTitleProp){
    return(
        <div className='flex justify-between items-center border-b '>
            <p className='title   border-b-4 border-blue-700 text-xm'>{leading} <span className='text-primary'>{title}</span></p>
            <div className='flex items-center gap-2 text-sm'>
                <Link href={link}>View All</Link>
                <FaChevronRight className='icon w-6  '/>
            </div>
        </div>
    )
}