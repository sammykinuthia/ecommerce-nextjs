import Image from "next/image"
import iphone from "../../public/iPhone-14-Pro.png"
import ProductBudge from "./ProductBudge"

export default function ProductCard() {
    return (
        <div className="phone-card">
            <div className="img-section bg-gray-50 relative">
                <Image width={400} height={600} alt='Product' className="p-8" src={iphone} />
                <ProductBudge discount={60}/>
            </div>
            <div className="desc py-4 px-3 font-semibold">
                <h4>Iphone 13 (4GB | 64GB)</h4>
                <h4>Ksh. 120000 <span className="font-normal text-gray-600 ml-8 line-through">Ksh. 140000</span></h4>
            </div>
            <div className="footer border-t p-4">
                <p className="text-green-600 font-bold">Save - Ksh. 20000</p>
            </div>
        </div>
    )
}