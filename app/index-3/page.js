import Layout from "@/components/layout/Layout"
import "app/favicon-3.ico"
import "public/assets/css/color3.css"
import Banner from "@/components/sections/home3/Banner"
import Apps from "@/components/sections/home3/Apps"
import Banking from "@/components/sections/home3/Banking"
import Custom_Banking from "@/components/sections/home3/Custom-Banking"
import Funfact from "@/components/sections/home3/Funfact"
import Calculator from "@/components/sections/home3/Calculator"
import Working from "@/components/sections/home3/Working"
import Creditcard from "@/components/sections/home3/Creditcard"
import Clients from "@/components/sections/home3/Clients"
import Testimonial from "@/components/sections/home3/Testimonial"
import Deals from "@/components/sections/home2/Deals"
export default function Home_Three() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={3}>
                <Banner/>
                <Apps/>
                <Banking/>
                <Custom_Banking/>
                <Funfact/>
                <Calculator/>
                <Working/>
                <Creditcard/>
                <Clients/>
                <Testimonial/>
                <Deals/>
            </Layout>
        </div>
    )
}