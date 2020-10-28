import React from "react";
import { LandingUser } from "../../resources";
import { ProfileBusiness } from "../../components";
import { Attribution } from "css.gg";
import { Link } from "react-router-dom";

const DetailBusiness = () => {
  return (
    <LandingUser>
      <div className="container grid-md">
        <div className="columns">
          <div className="content-btnFloat-donRigo">
            <button className="floatBtn-donRigo">
              <Attribution style={{ transform: "scale(1.5)" }} />
            </button>

            <Link to={`/orderDetail`}>
              <button className="floatBtn-donRigo">
                <b>Pedir</b>
              </button>
            </Link>
          </div>
          <div className="column col-12 col-sm-12">
            <ProfileBusiness
              imgProfile="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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

          <div className="column col-12 col-sm-12">
            <form className="">
              <div className="content-category-car">
                <div className="accordion">
                  <input
                    type="radio"
                    id="accordion-1"
                    name="accordion-checkbox"
                    checked
                    hidden
                  />
                  <label
                    className="accordion-header toggle-category"
                    for="accordion-1"
                  >
                    <i class="icon icon-arrow-right mr-1"></i>
                    Burguer
                  </label>

                  <div class="accordion-body">
                    <div className="description-category">
                      <span>Descripción</span>
                      <span>Precio</span>
                      <span>Cantidad</span>
                    </div>
                    <div className="columns">
                      <div className="column col-4 col-sm-4">
                        <p className="items-title-category">
                          La nono miro artesanal
                        </p>
                      </div>

                      <div className="column col-4 col-sm-4">
                        <p className="items-title-category">S/. 99.00</p>
                      </div>

                      <div className="column col-4 col-sm-4">
                        <input
                          type="number"
                          className="items-title-category input-from2-donRigo"
                          min={0}
                          max={10}
                          defaultValue={0}
                          style={{ marginBottom: "0 !important" }}
                        />
                      </div>

                      <div className="column col-6 col-sm-8">
                        <p className="description-plate-categoruy">
                          Salsa de autor ~ Chorizo ahumado ~ Tocio ahumado ~
                          Piña ~ Complementos de casa ~ Aceituna ~ Hojas de
                          albaca ~ Aros de cebolla ~ Presentación de casa
                        </p>
                      </div>
                    </div>

                    <div className="columns">
                      <div className="column col-4 col-sm-4">
                        <p className="items-title-category">
                          La nono miro artesanal
                        </p>
                      </div>

                      <div className="column col-4 col-sm-4">
                        <p className="items-title-category">S/. 99.00</p>
                      </div>

                      <div className="column col-4 col-sm-4">
                        <input
                          type="number"
                          className="items-title-category input-from2-donRigo"
                          min={0}
                          max={10}
                          defaultValue={0}
                          style={{ marginBottom: "0 !important" }}
                        />
                      </div>

                      <div className="column col-6 col-sm-8">
                        <p className="description-plate-categoruy">
                          Salsa de autor ~ Chorizo ahumado ~ Tocio ahumado ~
                          Piña ~ Complementos de casa ~ Aceituna ~ Hojas de
                          albaca ~ Aros de cebolla ~ Presentación de casa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion">
                  <input
                    type="radio"
                    id="accordion-2"
                    name="accordion-checkbox"
                    hidden
                  />
                  <label
                    className="accordion-header toggle-category"
                    for="accordion-2"
                  >
                    <i class="icon icon-arrow-right mr-1"></i>
                    Burguer
                  </label>

                  <div class="accordion-body">
                    <div className="description-category">
                      <span>Descripción</span>
                      <span>Precio</span>
                      <span>Cantidad</span>
                    </div>
                    <div className="columns">
                      <div className="column col-4 col-sm-4">
                        <p className="items-title-category">
                          La nono miro artesanal
                        </p>
                      </div>

                      <div className="column col-4 col-sm-4">
                        <p className="items-title-category">S/. 99.00</p>
                      </div>

                      <div className="column col-4 col-sm-4">
                        <input
                          type="number"
                          className="items-title-category input-from2-donRigo"
                          min={0}
                          max={10}
                          defaultValue={0}
                          style={{ marginBottom: "0 !important" }}
                        />
                      </div>

                      <div className="column col-6 col-sm-8">
                        <p className="description-plate-categoruy">
                          Salsa de autor ~ Chorizo ahumado ~ Tocio ahumado ~
                          Piña ~ Complementos de casa ~ Aceituna ~ Hojas de
                          albaca ~ Aros de cebolla ~ Presentación de casa
                        </p>
                      </div>
                    </div>

                    <div className="columns">
                      <div className="column col-4 col-sm-4">
                        <p className="items-title-category">
                          La nono miro artesanal
                        </p>
                      </div>

                      <div className="column col-4 col-sm-4">
                        <p className="items-title-category">S/. 99.00</p>
                      </div>

                      <div className="column col-4 col-sm-4">
                        <input
                          type="number"
                          className="items-title-category input-from2-donRigo"
                          min={0}
                          max={10}
                          defaultValue={0}
                          style={{ marginBottom: "0 !important" }}
                        />
                      </div>

                      <div className="column col-6 col-sm-8">
                        <p className="description-plate-categoruy">
                          Salsa de autor ~ Chorizo ahumado ~ Tocio ahumado ~
                          Piña ~ Complementos de casa ~ Aceituna ~ Hojas de
                          albaca ~ Aros de cebolla ~ Presentación de casa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LandingUser>
  );
};

export default DetailBusiness;
