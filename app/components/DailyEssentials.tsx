import CategoryTitle from "./CategoryTitle";
import DailyEssentialsCard from "./DailyEssentialCard";

export default function DailyEssentials(){
    return(
        <div className="my-8">
            <CategoryTitle leading="Daily" title="Essentials" link="essentials"/>
            <div className=" flex justify-between my-12">
                <DailyEssentialsCard/>
                <DailyEssentialsCard/>
                <DailyEssentialsCard/>
                <DailyEssentialsCard/>
                <DailyEssentialsCard/>
            </div>
        </div>
    )
}