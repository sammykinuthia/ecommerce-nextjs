import CategoryTitle from "./CategoryTitle";
import ProductCard from "./ProductCard";

export default function SmartPhoneCategory() {
    return (
        <div>
            <CategoryTitle leading="Grab the best deals" title="Smart Phones text-primary" link="home" />
            <div className="flex ">
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}