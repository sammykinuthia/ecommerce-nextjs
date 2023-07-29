import CategoryTitle from "./CategoryTitle";
import TopCategoryProduct from "./TopCategoryProduct";

export default function TopCategory() {
    return (
        <div className="my-4">
            <CategoryTitle leading="Shop From" title="Top Categories" link="categories" />
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 justify-between md:col-span-2  my-12 place-items-center">
                <TopCategoryProduct />
                <TopCategoryProduct />
                <TopCategoryProduct />
                <TopCategoryProduct />
                <TopCategoryProduct />
                <TopCategoryProduct />

            </div>
        </div>
    )
}