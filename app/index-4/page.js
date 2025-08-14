import Layout from "@/components/layout/Layout"
import "app/favicon-4.ico"
import "public/assets/css/color4.css"
import Banner from "@/components/sections/home4/Banner"
import Investment from "@/components/sections/home4/Investment"
import Banking_Service from "@/components/sections/home4/Banking"
import Secure from "@/components/sections/home4/Secure"
import Exchange from "@/components/sections/home4/Exchange"
import Instant from "@/components/sections/home4/Instant"
import Working from "@/components/sections/home4/Working"
import Locker from "@/components/sections/home4/Locker"
import Creditcard from "@/components/sections/home4/Creditcard"
import Clients from "@/components/sections/home4/Clients"
import Testimonial from "@/components/sections/home3/Testimonial"
export default function Home_Four() {

    return (
        <div className="boxed_wrapper home_4">
            <Layout headerStyle={4} footerStyle={4}>
                <Banner/>
                <Investment/>
                <Banking_Service/>
                <Secure/>
                <Exchange/>
                <Instant/>
                <Working/>
                <Locker/>
                <Creditcard/>
                <Clients/>
                <Testimonial/>
            </Layout>
        </div>
    )
}