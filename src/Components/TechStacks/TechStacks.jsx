import {stacks} from "../../Constants/Stacks"

const TechStacks = () => {
    return (
        <div className="flex justify-center gap-10 mt-10 flex-wrap">
            {
                stacks.map((item, index) => {
                    return (
                        <img key={index} src={ item.logo } alt={ item.logo } className="md:w-20 w-12 h-12 md:h-20"/>
                    )
                })
            }
        </div>
    )
}

export default TechStacks
