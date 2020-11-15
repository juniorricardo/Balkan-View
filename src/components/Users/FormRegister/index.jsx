import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaSave } from "react-icons/fa";
import { addUser, updateUser } from "../../../redux/actions/userActions";
import { Card, CardDeck } from "react-bootstrap";

const FormRegister = ({ showForm }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    document: "",
    jobTitle: "",
    birthday: "",
    phoneNumber: "",
  });
  const [userType, setUserType] = useState("");
  const [addres, setAddres] = useState({
    street: { number: "", name: "" },
    city: "",
    state: "",
    country: "",
    countryCode: "",
  });
  const [login, setLogin] = useState({
    avatar: "",
    email: "",
    userName: "",
    password: "",
  });

  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();

  const optionDrop = [
    { type: "client", name: "Cliente" },
    { type: "accountManager", name: "Agente de cuentas" },
    { type: "admin", name: "Administrador" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      console.log("Dispatch => Edit");
      console.log("Update user", {
        personalInfo,
        userType,
        addres,
        login,
      });
      dispatch(
        updateUser({
          personalInfo,
          userType,
          addres,
          login,
        })
      );
    } else {
      console.log("Dispatch => Add");
      console.log("New user", {
        personalInfo,
        userType,
        addres,
        login,
      });
      dispatch(
        addUser({
          personalInfo,
          userType,
          addres,
          login,
        })
      );
    }
    localStorage.setItem("userEdit", null);
    showForm(false);
  };

  React.useEffect(() => {
    console.log("editMode", editMode);
    debugger;
    const res = JSON.parse(localStorage.getItem("userEdit"));
    if (res) {
      setEditMode(true);
      setPersonalInfo({ ...res.personalInfo });
      setUserType(res.userType);
      setAddres({ ...res.addres });
      setLogin({ ...res.login });
    }
  }, [editMode]);

  return (
    <Card bg="light">
      <Card.Header>
        <h3>{editMode ? "Actualizar usuario" : "Registro"}</h3>
      </Card.Header>
      <Card.Body>
        <CardDeck>
          {/* Personal Info */}
          <div className="col-lg-6 col-sm-12 mb-2">
            {
              // avatar
              // https://www.youtube.com/watch?v=XeiOnkEI7XI
              // axios post and firabase
            }
            <Card>
              <Card.Body>
                <Card.Title className="mb-4">Datos personales</Card.Title>
                <div className="form-group row">
                  <label
                    htmlFor="firstNameInput"
                    className="col-sm-3 col-form-label"
                  >
                    Nombre
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="firstNameInput"
                      placeholder="Ingrese su nombre"
                      name="firstName"
                      value={personalInfo.firstName}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="lastNameInput"
                    className="col-sm-3 col-form-label"
                  >
                    Apellido
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="lastNameInput"
                      placeholder="Ingrese su Apellido"
                      name="lastName"
                      value={personalInfo.lastName}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="documentInput"
                    className="col-sm-4 col-form-label"
                  >
                    Documento
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="number"
                      className="form-control"
                      id="documentInput"
                      placeholder="Ingrese su documento"
                      name="document"
                      value={personalInfo.document}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="jobTitleInput"
                    className="col-sm-3 col-form-label"
                  >
                    Trabajo
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="jobTitleInput"
                      placeholder="Ingrese el puesto de trabajo"
                      name="jobTitle"
                      value={personalInfo.jobTitle}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="birthdayInput"
                    className="col-sm-4 col-form-label"
                  >
                    Cumpleaños
                  </label>
                  <div className="col-sm-8">
                    <input
                      className="form-control"
                      type="date"
                      id="birthdayInput"
                      name="birthday"
                      defaultValue={personalInfo.birthday}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="phoneNumberInput"
                    className="col-sm-3 col-form-label"
                  >
                    Telefono
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumberInput"
                      name="phoneNumber"
                      placeholder="Ingrese su telefono"
                      value={personalInfo.phoneNumber}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          {/* Login */}
          <div className="col-lg-6 col-sm-12 mb-2">
            <Card>
              <Card.Body className="form-group">
                <Card.Title className="card-title">Iniciar sesion</Card.Title>
                <div className="form-group row">
                  <label
                    htmlFor="emailInput"
                    className="col-sm-3 col-form-label"
                  >
                    Correo
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control"
                      id="emailInput"
                      name="email"
                      placeholder="Ingrese su correo"
                      value={login.email}
                      onChange={(e) =>
                        setLogin({
                          ...login,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="userNameInput"
                    className="col-sm-3 col-form-label"
                  >
                    Usuario
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="userNameInput"
                      name="userName"
                      placeholder="Ingrese un nombre de usuario"
                      value={login.userName}
                      onChange={(e) =>
                        setLogin({
                          ...login,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="passInput"
                    className="col-sm-4 col-form-label"
                  >
                    Contraseña
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="password"
                      className="form-control"
                      id="passInput"
                      name="password"
                      placeholder="Ingrese su contraseña"
                      value={login.password}
                      onChange={(e) =>
                        setLogin({
                          ...login,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <div className="card mt-2">
              <div className="card-body">
                <h4 className="card-title">Categoria de usuario</h4>
                <label htmlFor="userTypeInput">Tipo</label>
                <select
                  className="form-control"
                  id="userTypeInput"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  {editMode ? (
                    optionDrop.map((item, index) => (
                      <option value={item.type} key={index}>
                        {item.name}
                      </option>
                    ))
                  ) : (
                    <React.Fragment>
                      <option defaultValue>Seleccione una opcion</option>
                      {optionDrop.map((item, index) => (
                        <option value={item.type} key={index}>
                          {item.name}
                        </option>
                      ))}
                    </React.Fragment>
                  )}
                </select>
              </div>
            </div>
          </div>
          {/* Addres  */}
          <div className="col-lg-6 col-sm-12 mb-2">
            <div className="card">
              <div className="card-body form-group">
                <h4 className="card-title">Direccion</h4>
                <label htmlFor="streetNameInput">Calle</label>
                <input
                  type="text"
                  className="form-control"
                  id="streetNameInput"
                  name="name"
                  value={addres.street.name}
                  onChange={(e) =>
                    setAddres({
                      ...addres,
                      street: {
                        ...addres.street,
                        [e.target.name]: e.target.value,
                      },
                    })
                  }
                />
                <label htmlFor="streetNumberInput">Numero</label>
                <input
                  type="text"
                  className="form-control"
                  id="streetNumberInput"
                  name="number"
                  value={addres.street.number}
                  onChange={(e) =>
                    setAddres({
                      ...addres,
                      street: {
                        ...addres.street,
                        [e.target.name]: e.target.value,
                      },
                    })
                  }
                />
                <label htmlFor="streetCityInput">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  id="streetCityInput"
                  name="city"
                  value={addres.city}
                  onChange={(e) =>
                    setAddres({
                      ...addres,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <label htmlFor="streetCountyInput">Provincia</label>
                <input
                  type="text"
                  className="form-control"
                  id="streetCountyInput"
                  name="state"
                  value={addres.state}
                  onChange={(e) =>
                    setAddres({
                      ...addres,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <label htmlFor="streetCountryInput">Pais</label>
                <input
                  type="text"
                  className="form-control"
                  id="streetCountryInput"
                  name="country"
                  value={addres.country}
                  onChange={(e) =>
                    setAddres({
                      ...addres,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <label htmlFor="streetCountryCodeInput">Codigo postal</label>
                <input
                  type="text"
                  className="form-control"
                  id="streetCountryCodeInput"
                  name="countryCode"
                  value={addres.countryCode}
                  onChange={(e) =>
                    setAddres({
                      ...addres,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </CardDeck>
      </Card.Body>
      <div className="card-footer text-center">
        <button
          className={`btn w-80 btn-${
            editMode ? "warning text-light" : "success"
          }`}
          onClick={handleSubmit}
        >
          <FaSave />
          {editMode ? " Guardar" : " Agregar"}
        </button>
      </div>
    </Card>
  );
};

export default FormRegister;
