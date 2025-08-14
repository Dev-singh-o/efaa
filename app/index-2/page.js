import Layout from "@/components/layout/Layout"
import "app/favicon-2.ico"
import "public/assets/css/color2.css"
import Banner from "@/components/sections/home2/Banner"
import Banking from "@/components/sections/home2/Banking"
import Funfact from "@/components/sections/home2/Funfact"
import Secure from "@/components/sections/home2/Secure"
import Exchange from "@/components/sections/home2/Exchange"
import Help from "@/components/sections/home2/Help"
import Apps from "@/components/sections/home2/Apps"
import Working from "@/components/sections/home2/Working"
import News from "@/components/sections/home2/News"
import Deals from "@/components/sections/home2/Deals"
import Awards from "@/components/sections/home2/Awards"
import Clients from "@/components/sections/home2/Clients"
import Testimonial from "@/components/sections/home2/Testimonial"
export default function Home_Two() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={2} footerStyle={2}>
                <Banner/>
                <Banking/>
                <Funfact/>
                <Secure/>
                <Exchange/>
                <Help/>
                <Apps/>
                <Working/>
                <News/>
                <Deals/>
                <Awards/>
                <Clients/>
                <Testimonial/>
            </Layout>
        </div>
    )
}