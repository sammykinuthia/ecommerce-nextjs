export default function ProductCard() {
    return (
        <div className=" border rounded-xl">
            <div className="img-section bg-gray-50 relative">
                <img className="p-8 h-60" src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg" alt="" />
            </div>
            <div className="desc py-4 px-2 font-semibold">
                <h3>Iphone 13 (4GB | 64GB)</h3>
                <h3>Ksh. 120000 <span className="font-normal text-gray-600 ml-8 line-through">Ksh. 140000</span></h3>

            </div>
            <div className="footer border-t p-2">
                <p className="text-green-400">Save - Ksh. 20000</p>
            </div>
            <div className="floating bg-blue-600 text-white w-16 h-20 absolute top-0 right-0">

            </div>

        </div>
    )
}