import CategoryTitle from "./CategoryTitle";
import ElectronicsBrandCard from "./ElectronicBrandCard";

export default function ElectronicsBrand(){
    return(
        <div>
            <CategoryTitle leading="Top" title="Electronics Brands" link="electronics"/>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 place-items-center  my-12">
                <ElectronicsBrandCard/>
                <ElectronicsBrandCard/>
                <ElectronicsBrandCard/>
                <ElectronicsBrandCard/>
            </div>
        </div>
    )
}