import FaqBox from "@components/user/faq/FaqBox";
import Breadcrumbs from "@components/shared/Breadcrumbs";

const Faq : React.FC = () => {

    const faqList = [
        { id: 1, question: "Which size will fit me best?", answer: "We offer product and body measurements on each of our products pages, just click on “Size Guide” to find your best fit. Measuring guides are included." }
        , { id: 2, question: "How do I contact your Customer Service?", answer: "Our modimal Customer Service Team is available Monday through Friday, 9 am - 5 pm ET, excluding holidays. You can reach us via email at hello@modimal.com (preferred and our fastest response), via chat using the icon in the right bottom cornern of our website, or via voicemail at +1(929) 460-3208. We will make sure to get back to you within 24 business hours." }
        , { id: 3, question: "When will my order ship?", answer: "you can check your order status from your panel" }
        , { id: 4, question: "Can I cancel or modify my order?", answer: "yes you can , you can cacel your order from user panel or from contact us page" }
        , { id: 5, question: "How do your suppliers support their workers? ", answer: "We prioritize supporting suppliers who uphold fair labor practices and provide equitable conditions for their workers. We request our supplier partners to ensure that their employees are treated with respect and fairness, and work in suitable conditions. Additionally, we prefer working with suppliers who adhere to social and environmental standards, contributing to a sustainable and responsible supply chain. We maintain communication with our suppliers and strive to foster a culture of ethical sourcing and accountability." }
        , { id: 6, question: "How do you find and evaluate your suppliers?", answer: "We employ a rigorous process to find and evaluate suppliers. This includes thorough research, qualification based on capabilities and adherence to standards, audits, performance monitoring, collaboration for improvement, and risk management. Our aim is to partner with suppliers who share our commitment to quality, ethics, and sustainability." }
    ]

    let faqBreadcrumbs = [{ id: 1, text: "Home", href: "/" }, { id: 2, text: "Faq", href: "/faq" }]

    return (<>
        <div className="container px-5 mt-8 max-w-7xl mb-28">
            <Breadcrumbs items={faqBreadcrumbs} />
            <div className="max-w-[1000px] mx-auto">

                <h1 className="mb-6 text-2xl font-bold mt-9">FAQs</h1>
                {/* map on faq list */}
                {faqList.map(faq => <FaqBox key={faq.id} answer={faq.answer} question={faq.question} />)}
            </div>

        </div>
    </>);
}

export default Faq;