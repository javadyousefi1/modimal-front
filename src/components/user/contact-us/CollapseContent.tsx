import { Button } from "antd"

type CollapseContentPropType = {
    onClick: React.MouseEventHandler<HTMLDivElement>,
    description: string,
    button: string

}

const CollapseContent: React.FC<CollapseContentPropType> = ({onClick, description, button}) => {

  return (
    <div className="w-full flex justify-center items-center flex-col gap-y-2 p-2">
          <p className="text-[14px] w-full text-center">{description}</p>
          <Button
            className="w-full !rounded-none text-primary-600 !border-[1px] border-primary-600"
            onClick={onClick}
          >
            {button}
          </Button>
        </div>
  )
}

export default CollapseContent