import {FaChevronRight} from 'react-icons/fa'
interface CategoryTitleProp{
    leading:string,
    title:string,
    link:string
}

export default function CategoryTitle({leading, title,link}:CategoryTitleProp){
    return(
        <div className='flex justify-between items-center border-b '>
            <h2 className='title pb-4  border-b-4 border-blue-700'>{leading} <span className='text-primary'>{title}</span></h2>
            <div className='flex items-center gap-2'>
                <a href={link}>View All</a>
                <FaChevronRight className='icon w-6  '/>
            </div>
        </div>
    )
}