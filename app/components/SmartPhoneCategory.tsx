import CategoryTitle from "./CategoryTitle";
import ProductCard from "./ProductCard";

export default function SmartPhoneCategory() {
    return (
        <div>
            <CategoryTitle leading="Grab the best deals" title="Smart Phones" link="home" />
            <div className="flex justify-between  my-12">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>  
                <ProductCard/>
            </div>
        </div>
    )
}