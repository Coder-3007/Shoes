import Button from "../Navbar/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffers = () => {
  return (
    <section
      className="flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize  font-bold lg:max-w-lg  ">
          <span className="text-coral-red  ">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          sapiente neque odit provident architecto nihil, recusandae sequi ut
          cum accusamus qu.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          blanditiis doloribus illum nulla tenetur, nesciunt eius. Rerum solut.
        </p>
        <div className="mt-14 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-grey"
            textColor="text-slate-grey"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
