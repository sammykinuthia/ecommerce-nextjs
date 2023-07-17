export default function ElectronicsBrandCard() {
    return (
        <div className="h-72 w-fit flex bg-gray-950 p-4 rounded-3xl">
            <div className="flex px-8 flex-col justify-between">
                <h3 className="text-white ">IPHONE</h3>
                <img className="w-20 h-20 object-cover rounded-3xl" src="https://beebom.com/wp-content/uploads/2021/08/How-to-Type-Apple-Logo-on-iPhone-iPad-and-Mac-1-e1629868886428.jpg?w=290&h=290&crop=1&quality=75" alt="" />
                <h1 className="text-white text-2xl font-bold">UP to 80% OFF</h1>
            </div>
            <div className=" w-40 ">
                <img className="object-cover rounded-xl" src="https://images.macrumors.com/t/9r84bU_ZTOTrUixxwhjHUFsAvD4=/800x0/smart/article-new/2017/09/iphonexdesign.jpg?lossy" alt="" />
            </div>
        </div>
    )
}