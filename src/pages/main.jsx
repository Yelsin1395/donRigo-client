import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { LandingUser } from "../resources";
import { SearchLocation, CardPrimary } from "../components";
import { navigatorPromise } from "../controllers";

const Main = () => {
  const [geolocation, setGeolocation] = useState({});

  navigatorPromise.then((response) => setGeolocation(response));
  const { lat, lng } = geolocation;

  return (
    <LandingUser>
      {"geolocation" in navigator ? (
        <SearchLocation latitude={lat} longitude={lng} />
      ) : (
        <SearchLocation latitude={""} longitude={""} />
      )}

      <div className="container grid-md">
        <div className="columns">
          <div className="column col-12 col-sm-12">
            <Masonry
              breakpointCols={{ default: 3, 575.98: 2 }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              <CardPrimary
                profileBusiness="https://images.unsplash.com/photo-1518891130017-d5a42dc99521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                state="close"
                calification="4.8"
                name="Mi Angél Gabriel"
                type="Menú"
                direction="av. panamericana norte km 80"
              />

              <CardPrimary
                profileBusiness="https://scontent.ftru1-1.fna.fbcdn.net/v/t1.0-9/15826541_416850658646798_5356154507049001084_n.png?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeEU9gIy8FKHj1Kqv2eKbb4kYtgEvHHsJNJi2AS8cewk0r5mthlWBrDHyvXDbI9lWd_lBo_ITKfwL6vzryLTaZDW&_nc_ohc=kVsk6Vzdy_EAX98_lO_&_nc_ht=scontent.ftru1-1.fna&oh=1082b23be454e365740d75271b38a50b&oe=5F8227A2"
                state="open"
                calification="4.8"
                name="D'chota"
                type="Restaurante"
                direction="av. panamericana norte km 80"
              />

              <CardPrimary
                profileBusiness="https://scontent.ftru1-1.fna.fbcdn.net/v/t1.0-9/27541116_899035740270617_919724440639207100_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeHPmFk6VKDMpD9qok_eColDnA1ixrv_jPucDWLGu_-M-_QqVz2XKXILrqTyNIOZSU4buorSH00vErkinwzM95Hr&_nc_ohc=8m4D4uMf7PQAX8vN8Nc&_nc_ht=scontent.ftru1-1.fna&oh=e8a96e90fc3a5b47736f1cbc74ce30d8&oe=5F828D00"
                state="open"
                calification="4.8"
                name="La B"
                type="Pastelería"
                direction="av. panamericana norte km 80"
              />

              <CardPrimary
                profileBusiness="https://res.cloudinary.com/dwvc88n4u/image/upload/v1599792776/Don_Rigo/logos/logo_donrigo_ipoeao.png"
                state="close"
                calification="4.8"
                name="Mi Angél Gabriel"
                type="Restaurante"
                direction="av. panamericana norte km 80"
              />

              <CardPrimary
                profileBusiness="https://images.unsplash.com/photo-1567720441966-d8a357525219?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                state="close"
                calification="4.8"
                name="Mi Angél Gabriel"
                type="Restaurante"
                direction="av. panamericana norte km 80"
              />
            </Masonry>
          </div>
        </div>
      </div>
    </LandingUser>
  );
};

export default Main;
