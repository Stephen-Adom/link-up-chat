import { useState } from "react";
import ContactInfo from "./Contact-Info";
import MobileContactList from "./Mobile View/MobileContactList";
import TableContactList from "./TableContactList";
import TabletContactView from "./Tablet-Contact-View";

const ContactList = () => {
  const [contactInfo, setContactInfo] = useState<any>(null);
  const [tabletContactInfo, setTabletContactInfo] = useState<any>(null);

  console.log(window.innerWidth);

  const viewContactInfo = () => {
    if (window.innerWidth > 1024) {
      setContactInfo({ name: "John Doe", mobile: "000 000 0000" });
    } else {
      setTabletContactInfo({ name: "John Doe", mobile: "000 000 0000" });
    }
  };

  return (
    <section id="Contact-List" className="flex items-start">
      <section className={`w-${contactInfo ? "[70%]" : "full"} pr-4`}>
        {window.innerWidth > 768 ? (
          <TableContactList viewContactInfo={viewContactInfo} />
        ) : (
          <MobileContactList />
        )}
      </section>

      <ContactInfo contactInfo={contactInfo} setContactInfo={setContactInfo} />

      <TabletContactView tabletContactInfo={tabletContactInfo} />
    </section>
  );
};

export default ContactList;
