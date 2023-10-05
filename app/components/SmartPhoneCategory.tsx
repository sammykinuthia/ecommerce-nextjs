import CategoryTitle from "./CategoryTitle";
import ProductCard from "./ProductCard";

export default function SmartPhoneCategory() {
    return (
        <div>
            <CategoryTitle leading="Grab the best deals" title="Smart Phones" link="home" />
            <div className="grid gap-4 grid-cols-1 min-[420px]:grid-cols-2  md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5 py-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}