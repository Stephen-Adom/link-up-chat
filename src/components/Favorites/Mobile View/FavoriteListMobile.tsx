const FavoriteListMobile = () => {
  return (
    <section id="favorite-card-list" className="divide-y">
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
          <span className="block text-gray-500 text-lg">
            Mobile: 054 0430 0893
          </span>
        </div>
      </div>

      <div className="mobile-contact-info">
        <div className="contact-avatar w-[60px] h-[60px] rounded-full overflow-hidden">
          <img
            src={require("../../../assets/users/100_13.jpg")}
            className="w-full"
            alt=""
          />
        </div>
        <div>
          <h6 className="font-bold text-[1.3rem]">Jack Johnson</h6>
          <span className="block text-gray-500 text-lg">
            Mobile: 054 0430 0893
          </span>
        </div>
      </div>

      <div className="mobile-contact-info">
        <div className="contact-avatar w-[60px] h-[60px] rounded-full overflow-hidden">
          <img
            src={require("../../../assets/users/100_14.jpg")}
            className="w-full"
            alt=""
          />
        </div>
        <div>
          <h6 className="font-bold text-[1.3rem]">Timothy Arthur</h6>
          <span className="block text-gray-500 text-lg">
            Mobile: 054 0430 0893
          </span>
        </div>
      </div>
    </section>
  );
};

export default FavoriteListMobile;
