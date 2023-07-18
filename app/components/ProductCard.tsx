import Image from "next/image"

export default function ProductCard() {
    return (
        <div className="phone-card rounded-3xl overflow-hidden border border-gray-300 ">
            <div className="img-section bg-gray-50 relative">
                <Image alt='Product' className="p-8 w-60" src={"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"} />
                <div className="floating bg-accent text-white w-16 h-20 absolute top-0 right-0 rounded-bl-3xl flex justify-center items-center">
                    60% <br />
                    OFF
                </div>
            </div>
            <div className="desc py-4 px-3 font-semibold">
                <h3>Iphone 13 (4GB | 64GB)</h3>
                <h3>Ksh. 120000 <span className="font-normal text-gray-600 ml-8 line-through">Ksh. 140000</span></h3>

            </div>
            <div className="footer border-t p-4">
                <p className="text-green-600 font-bold">Save - Ksh. 20000</p>
            </div>


        </div>
    )
}