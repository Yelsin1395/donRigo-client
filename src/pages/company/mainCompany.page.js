import React from "react";
import { LandingCompany } from "../../resources";
import { ProfileBusiness, CardPrimary } from "../../components";
import { Bell, Options } from "css.gg";

const MainCompany = () => {
  return (
    <LandingCompany>
      <div className="container grid-md">
        <div className="columns">
          <div className="content-btnFloat-donRigo">
            <button className="floatBtn-donRigo" title="Notificaciones">
              <Bell style={{ transform: "scale(1.5)" }} />
            </button>

            <button className="floatBtn-donRigo" title="Configuración">
              <Options style={{ transform: "scale(1.3)" }} />
            </button>
          </div>

          <div className="column col-12">
            <ProfileBusiness
              imgProfile="https://scontent.ftru1-1.fna.fbcdn.net/v/t1.0-9/15826541_416850658646798_5356154507049001084_n.png?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeEU9gIy8FKHj1Kqv2eKbb4kYtgEvHHsJNJi2AS8cewk0r5mthlWBrDHyvXDbI9lWd_lBo_ITKfwL6vzryLTaZDW&_nc_ohc=kVsk6Vzdy_EAX98_lO_&_nc_ht=scontent.ftru1-1.fna&oh=1082b23be454e365740d75271b38a50b&oe=5F8227A2"
              calification="4.8"
              stateLocal="Abierto"
              description={
                <p className="description-profileBusiness">
                  Ven y vive la experiencia #DChota
                  <br /> Lo que la tradición une no lo separa nadie.
                </p>
              }
              numberPhone="(+51) 956511409"
              directionBusiness="jr. santa rosa #575"
            />
          </div>

          <div className="column col-6">
            <CardPrimary
              link="/mainCompany/myCardMenu"
              profileBusiness="https://scontent.ftru1-1.fna.fbcdn.net/v/t1.0-9/15826541_416850658646798_5356154507049001084_n.png?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeEU9gIy8FKHj1Kqv2eKbb4kYtgEvHHsJNJi2AS8cewk0r5mthlWBrDHyvXDbI9lWd_lBo_ITKfwL6vzryLTaZDW&_nc_ohc=kVsk6Vzdy_EAX98_lO_&_nc_ht=scontent.ftru1-1.fna&oh=1082b23be454e365740d75271b38a50b&oe=5F8227A2"
              state="open"
              // calification="4.8"
              name="Mi carta menú"
              direction="Crea y actualiza tu carta menú"
            />
          </div>

          <div className="column col-6">
            <CardPrimary
              link="/detailBusiness/1"
              profileBusiness="https://scontent.ftru1-1.fna.fbcdn.net/v/t1.0-9/15826541_416850658646798_5356154507049001084_n.png?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeEU9gIy8FKHj1Kqv2eKbb4kYtgEvHHsJNJi2AS8cewk0r5mthlWBrDHyvXDbI9lWd_lBo_ITKfwL6vzryLTaZDW&_nc_ohc=kVsk6Vzdy_EAX98_lO_&_nc_ht=scontent.ftru1-1.fna&oh=1082b23be454e365740d75271b38a50b&oe=5F8227A2"
              state="open"
              // calification="4.8"
              name="Mis pedidos"
              direction="Gestiona los pedido de tus clientes"
            />
          </div>

          <div className="column col-6">
            <CardPrimary
              link="/detailBusiness/1"
              profileBusiness="https://scontent.ftru1-1.fna.fbcdn.net/v/t1.0-9/15826541_416850658646798_5356154507049001084_n.png?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeEU9gIy8FKHj1Kqv2eKbb4kYtgEvHHsJNJi2AS8cewk0r5mthlWBrDHyvXDbI9lWd_lBo_ITKfwL6vzryLTaZDW&_nc_ohc=kVsk6Vzdy_EAX98_lO_&_nc_ht=scontent.ftru1-1.fna&oh=1082b23be454e365740d75271b38a50b&oe=5F8227A2"
              state="open"
              // calification="4.8"
              name="Mi código QR"
              direction="Comparte tu carta"
            />
          </div>

          <div className="column col-6">
            <CardPrimary
              link="/detailBusiness/1"
              profileBusiness="https://scontent.ftru1-1.fna.fbcdn.net/v/t1.0-9/15826541_416850658646798_5356154507049001084_n.png?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeEU9gIy8FKHj1Kqv2eKbb4kYtgEvHHsJNJi2AS8cewk0r5mthlWBrDHyvXDbI9lWd_lBo_ITKfwL6vzryLTaZDW&_nc_ohc=kVsk6Vzdy_EAX98_lO_&_nc_ht=scontent.ftru1-1.fna&oh=1082b23be454e365740d75271b38a50b&oe=5F8227A2"
              state="open"
              // calification="4.8"
              name="Mis ventas"
              direction="Controla los ingresos"
            />
          </div>
        </div>
      </div>
    </LandingCompany>
  );
};

export default MainCompany;
