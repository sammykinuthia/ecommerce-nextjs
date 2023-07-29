import CategoryTitle from "./CategoryTitle";
import ProductCard from "./ProductCard";

export default function SmartPhoneCategory() {
    return (
        <div>
            <CategoryTitle leading="Grab the best deals" title="Smart Phones" link="home" />
            <div className="grid gap-8 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 justify-between md:col-span-2  my-12">
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