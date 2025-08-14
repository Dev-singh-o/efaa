import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Banner from "@/components/sections/home1/Banner"
import Online_Service from "@/components/sections/home1/Online-Service"
import Banking_Service from "@/components/sections/home1/Banking-Service"
import Secure_Growth from "@/components/sections/home1/Secure-Growth"
import Custom_Banking from "@/components/sections/home1/Custom-Banking"
import Funfact from "@/components/sections/home1/Funfact"
import Calculator from "@/components/sections/home1/Calculator"
import Creditcard from "@/components/sections/home1/Creditcard"
import Locker from "@/components/sections/home1/Locker"
import Faq from "@/components/sections/home1/Faq"
import News from "@/components/sections/home1/News"
export default function Home() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner/>
                <Online_Service/>
                <Banking_Service/>
                <Secure_Growth/>
                <Custom_Banking/>
                <Funfact/>
                <Calculator/>
                <Creditcard/>
                <Locker/>
                <Faq/>
                <News/>
            </Layout>
        </div>
    )
}