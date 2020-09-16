import React from "react";
import { LandingUser } from "../resources";

const OrderDetail = () => {
  return (
    <LandingUser>
      <div className="content-orderDetail">
        <div className="container grid-md">
          <div className="columns">
            <div className="column col-12 col-sm-12">
              <h1 className="tittle-primary" style={{ textAlign: "center" }}>
                Resumen Pedido
              </h1>
              <p style={{ fontSize: "16pt" }}>
                <b>Detalle</b>
              </p>
            </div>

            <div className="column col-12 col-sm-12">
              <table className="table" style={{ marginBottom: "20px" }}>
                <thead>
                  <tr>
                    <th align="center">Descripción</th>
                    <th align="center">Precio</th>
                    <th align="center">Cantidad</th>
                    <th align="center">Sub Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>La Nono Miro Artesanal</td>
                    <td align="center">S/. 15.00</td>
                    <td align="center">S/. 9</td>
                    <td align="center">S/. 999.00</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ textAlign: "right", fontSize: "14pt" }}>
                <b>Sub total: S/. 5.00</b>
              </p>
            </div>

            <div className="column col-12 col-sm-12">
              <p style={{ fontSize: "16pt", marginBottom: "15px" }}>
                <b>Datos de envio</b>
              </p>

              <div className="columns">
                <div className="colmun col-4 col-sm-12">
                  <input
                    type="text"
                    className="input-from2-donRigo"
                    placeholder="Nombre completo"
                    style={{ textTransform: "capitalize" }}
                  />
                </div>

                <div className="colmun col-4 col-sm-12">
                  <input
                    type="text"
                    className="input-from2-donRigo"
                    placeholder="Teléfono"
                    style={{ textTransform: "capitalize" }}
                  />
                </div>

                <div className="colmun col-4 col-sm-12">
                  <select type="text" className="input-from2-donRigo">
                    <option>Distrito</option>
                  </select>
                </div>

                <div className="colmun col-3">
                  <select type="text" className="input-from2-donRigo">
                    <option>Tipo</option>
                  </select>
                </div>

                <div className="colmun col-6">
                  <input
                    type="text"
                    className="input-from2-donRigo"
                    placeholder="Dirección"
                    style={{ textTransform: "lowercase" }}
                  />
                </div>

                <div className="colmun col-3">
                  <input
                    type="text"
                    className="input-from2-donRigo"
                    placeholder="Número"
                  />
                </div>

                <div className="colmun col-12">
                  <p style={{ textAlign: "right" }}>Envío: S/. 5.00</p>
                  <p style={{ textAlign: "right", fontSize: "18pt" }}>
                    <b>Total: S/. 5.00</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingUser>
  );
};

export default OrderDetail;
