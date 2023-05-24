import SectionTitle from "../../components/SectionTitle";
import featureImg from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-gray-300">
          <div className="bg-black bg-opacity-40">
          <SectionTitle
            subHeading={'Check it out'}
            heading={'Featured item'} />
            <div className="md:flex justify-center items-center py-20 px-36 gap-10">
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div>
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                    <div>
                    <button style={{color:'white'}} className="text-white button  mt-4  ">Order Now</button>
                    </div>
                </div>
            </div>
          </div>
            
        </div>
    );
};

export default Featured;