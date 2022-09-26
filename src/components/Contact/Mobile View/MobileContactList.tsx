const MobileContactList = () => {
  return (
    <section id="Mobile-Contact-List" className="divide-y">
      <div className="mobile-contact-info">
        <div className="contact-avatar w-[60px] h-[60px] rounded-full overflow-hidden">
          <img
            src={require("../../../assets/users/100_12.jpg")}
            className="w-full"
            alt=""
          />
        </div>
        <div>
          <h6 className="font-bold text-[1.3rem]">Cheryl Hanson</h6>
          <span className="block text-gray-500 text-lg">Freelancer</span>
        </div>
      </div>
      <div className="mobile-contact-info">
        <div className="contact-avatar w-[60px] h-[60px] rounded-full overflow-hidden">
          <img
            src={require("../../../assets/users/100_1.jpg")}
            className="w-full"
            alt=""
          />
        </div>
        <div>
          <h6 className="font-bold text-[1.3rem]">John Doe</h6>
          <span className="block text-gray-500 text-lg">Freelancer</span>
        </div>
      </div>
      <div className="mobile-contact-info">
        <div className="contact-avatar w-[60px] h-[60px] rounded-full overflow-hidden">
          <img
            src={require("../../../assets/users/100_2.jpg")}
            className="w-full"
            alt=""
          />
        </div>
        <div>
          <h6 className="font-bold text-[1.3rem]">Candy Patterson</h6>
          <span className="block text-gray-500 text-lg">Freelancer</span>
        </div>
      </div>

      <div className="mobile-contact-info">
        <div className="contact-avatar w-[60px] h-[60px] rounded-full overflow-hidden">
          <img
            src={require("../../../assets/users/100_3.jpg")}
            className="w-full"
            alt=""
          />
        </div>
        <div>
          <h6 className="font-bold text-[1.3rem]">Jack Pearson</h6>
          <span className="block text-gray-500 text-lg">Freelancer</span>
        </div>
      </div>

      <div className="mobile-contact-info">
        <div className="contact-avatar w-[60px] h-[60px] rounded-full overflow-hidden">
          <img
            src={require("../../../assets/users/100_4.jpg")}
            className="w-full"
            alt=""
          />
        </div>
        <div>
          <h6 className="font-bold text-[1.3rem]">Annette Johnson</h6>
          <span className="block text-gray-500 text-lg">Freelancer</span>
        </div>
      </div>
    </section>
  );
};

export default MobileContactList;
