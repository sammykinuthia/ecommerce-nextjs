import CategoryTitle from "./CategoryTitle";
import DailyEssentialsCard from "./DailyEssentialCard";

export default function DailyEssentials(){
    return(
        <div className="my-8">
            <CategoryTitle leading="Daily" title="Essentials" link="essentials"/>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 place-items-center  my-12">
                <DailyEssentialsCard/>
                <DailyEssentialsCard/>
                <DailyEssentialsCard/>
                <DailyEssentialsCard/>
                <DailyEssentialsCard/>
                <DailyEssentialsCard/>
            </div>
        </div>
    )
}