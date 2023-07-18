import Image from "next/image"

export default function DailyEssentialsCard() {
    return (
        <div className=" ">
            <div className="border-accent p-4 border rounded-3xl ">
                <Image alt="Daily Essential" className={"w-60"} src={"https://media.istockphoto.com/id/119401613/photo/fruit-basket.jpg?s=612x612&w=0&k=20&c=_puYLZkRaT7Ki-Lls5hnSadDZlm_knimpV0RgAL6_tY="}/>
            </div>
            <div className="my-4" >
            <h3 className="text-center text-gray-600 font-semibold">Daily Essentials</h3>
            <h1 className="text-center font-bold text-3xl">UP to 60% OFF</h1>
            </div>
        </div>
    )
}