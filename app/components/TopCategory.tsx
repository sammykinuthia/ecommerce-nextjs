import CategoryTitle from "./CategoryTitle";
import TopCategoryProduct from "./TopCategoryProduct";

export default function TopCategory() {
    return (
        <div className="my-4">
            <CategoryTitle leading="Shop From" title="Top Categories" link="categories" />
            <div className="flex justify-between gap-2 my-12">
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