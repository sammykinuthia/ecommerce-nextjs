import CategoryTitle from "./CategoryTitle";
import ElectronicsBrandCard from "./ElectronicBrandCard";

export default function ElectronicsBrand(){
    return(
        <div>
            <CategoryTitle leading="Top" title="Electronics Brands" link="electronics"/>
            <div className=" my-12 flex justify-between">
                <ElectronicsBrandCard/>
                <ElectronicsBrandCard/>
                <ElectronicsBrandCard/>
            </div>
        </div>
    )
}