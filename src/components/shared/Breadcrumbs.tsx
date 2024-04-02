import { Link } from "react-router-dom";

type ItemObject = {
    id: number,
    text: string,
    href: string,
}

type BreadcrumbsPropType = {
    items: ItemObject[]
}

const Breadcrumbs: React.FC<BreadcrumbsPropType> = ({ items }) => {

    const breadcrumbsLength = items.length

    return (<>
        <ul>
            {items.map((item, index) => {
                return <Link key={index} to={item.href}>
                    <li className={`inline text-xs ${index === 0 ? "text-primary" : "text-black"}`}><span>{item.text}</span>{index + 1 !== breadcrumbsLength && <span className="mx-2">/</span>}</li></Link>
            })}
        </ul>
    </>);
}

export default Breadcrumbs;


