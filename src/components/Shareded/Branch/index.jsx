import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import { branchInit } from "./../../../services/constants/branchInit";
import {
  addBranch,
  removeBranch,
  updateBranch,
} from "./../../../redux/actions/branchAction";
import "./branch.css";

const Branch = () => {
  const [branch, setBranch] = React.useState({ ...branchInit });
  const handleName = ({ name, value }) => {
    setBranch({
      ...branch,
      name: {
        ...branch.name,
        [name]: value,
      },
    });
  };
  const handleStreet = ({ name, value }) => {
    setBranch({
      ...branch,
      addres: {
        ...branch.addres,
        street: {
          ...branch.addres.street,
          [name]: value,
        },
      },
    });
  };
  const handleAddres = ({ name, value }) => {
    setBranch({
      ...branch,
      addres: {
        ...branch.addres,
        [name]: value,
      },
    });
  };
  const handleContact = ({ name, value }) => {
    setBranch({
      ...branch,
      contact: {
        ...branch.contact,
        [name]: value,
      },
    });
  };

  const branchList = useSelector((state) => state.branchList);
  const distpatch = useDispatch();

  const [editMode, setEditMode] = useState(false);

  const sendFormBranch = (ev) => {
    ev.preventDefault();
    console.log("Submit Form");
    if (!editMode) {
      distpatch(addBranch({ ...branch, id: shortid.generate() }));
    } else {
      console.log("Editar");
      distpatch(updateBranch(branch));
    }
    setBranch({ ...branchInit });
    setEditMode(false);
  };

  const handleEdit = (inBranch) => {
    //console.log('Branch to edit: ', inBranch)
    setBranch({ ...inBranch });
    setEditMode(true);
    //debugger
    //console.log('Setting branch to edit on branch state', branch)
  };

  const handleDetele = (id) => {
    console.log("Dispatch -> Remove branch: ", id);

    window.confirm("¿Esta seguro que desea eliminar esta sucursal?") &&
      distpatch(removeBranch(id));
  };

  const showBranchList = (branchList) => {
    return branchList.map((branch, index) => (
      <div className="card" key={index}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="https://dummyimage.com/300x170/a8a8a8/000000.jpg"
              alt=""
              className="card-img"
            />
          </div>
          <div className="col-md-8">
            <h5 className="card-header">{`${branch.name.nameCompany}. ${branch.name.companySuffix}`}</h5>
            <div className="card-body">
              {`${branch.addres.street.streetNumber} - ${branch.addres.street.streetName}`}
              <br />
              {`${branch.addres.city}, ${branch.addres.country}`}
              <br />
              <abbr title="Telefono">Telefono:</abbr>
              {branch.contact.phoneNumber}
              <br />
              <a href={`mailto:${branch.contact.email}`}>
                {branch.contact.email}
              </a>
              <br />
            </div>
            <div className="card-footer btn-group">
              <button
                className="btn btn-warning block"
                onClick={() => handleEdit(branch)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger block"
                onClick={() => handleDetele(branch.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="row">
      <div className="col-lg-4 col-md-5">
        <div className="card" style={{ textAlign: "left" }}>
          <div className="card-body">
            <div className="card-title">
              {editMode ? "Actualizar sucursal" : "Registrar"}
            </div>
            <form onSubmit={sendFormBranch}>
              <hr />
              <h6 className="card-subtitle my-2 text-muted">Nombres</h6>
              <label htmlFor="nameCompanyInput">Nombre de compania</label>
              <input
                type="text"
                className="form-control"
                id="nameCompanyInput"
                required
                name="nameCompany"
                value={branch.name.nameCompany}
                onChange={(e) => handleName(e.target)}
              />
              <label htmlFor="companySuffixInput">Iniciales</label>
              <input
                type="text"
                className="form-control"
                id="companySuffixInput"
                name="companySuffix"
                value={branch.name.companySuffix}
                onChange={(e) => handleName(e.target)}
              />
              <hr />
              <h6 className="card-subtitle my-2 text-muted">Direccion</h6>
              <label htmlFor="addresStreetNameInput">Calle</label>
              <input
                type="text"
                className="form-control"
                id="addresStreetNameInput"
                required
                name="streetName"
                value={branch.addres.street.streetName}
                onChange={(e) => handleStreet(e.target)}
              />
              <label htmlFor="addresStreetNumberInput">Numero</label>
              <input
                type="text"
                className="form-control"
                id="addresStreetNumberInput"
                required
                name="streetNumber"
                value={branch.addres.street.streetNumber}
                onChange={(e) => handleStreet(e.target)}
              />
              <label htmlFor="cityInput">Ciudad</label>
              <input
                type="text"
                className="form-control"
                id="cityInput"
                name="city"
                value={branch.addres.city}
                onChange={(e) => handleAddres(e.target)}
              />
              <label htmlFor="stateInput">Estado</label>
              <input
                type="text"
                className="form-control"
                id="stateInput"
                required
                name="state"
                value={branch.addres.state}
                onChange={(e) => handleAddres(e.target)}
              />
              <label htmlFor="countryInput">Pais</label>
              <input
                type="text"
                className="form-control"
                id="countryInput"
                required
                name="country"
                value={branch.addres.country}
                onChange={(e) => handleAddres(e.target)}
              />
              <label htmlFor="countryCodeInput">Codigo</label>
              <input
                type="text"
                className="form-control"
                id="countryCodeInput"
                required
                name="countryCode"
                value={branch.addres.countryCode}
                onChange={(e) => handleAddres(e.target)}
              />
              <hr />
              <h6 className="card-subtitle my-2 text-muted">Contacto</h6>
              <label htmlFor="phoneNumberInput">Telefono</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumberInput"
                required
                name="phoneNumber"
                value={branch.contact.phoneNumber}
                onChange={(e) => handleContact(e.target)}
              />
              <label htmlFor="emailInput">Correo electronico</label>
              <input
                type="text"
                className="form-control"
                id="emailInput"
                required
                name="email"
                value={branch.contact.email}
                onChange={(e) => handleContact(e.target)}
              />
              <button
                className={`btn btn-${
                  editMode ? "warning" : "success"
                } btn-block`}
              >
                {editMode ? "Actualizar" : "Agregar"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="col">{showBranchList(branchList)}</div>
    </div>
  );
};

export default Branch;
