import Breadcrumbs from "@components/shared/Breadcrumbs";

const Faq = () => {

    let faqBreadcrumbs = [{ id: 1, text: "Home", href: "/" }, { id: 2, text: "Faq", href: "/faq" }]

    return (<>
        <div className="container px-5 mt-8">

            <Breadcrumbs items={faqBreadcrumbs} />
        </div>
    </>);
}

export default Faq;