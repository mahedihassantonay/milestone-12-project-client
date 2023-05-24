import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
    
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
            <CallUs />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;