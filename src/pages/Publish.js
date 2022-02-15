import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Publish = ({ isConnected }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [condition, setCondition] = useState();
  const [city, setCity] = useState();
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [picture, setPicture] = useState();

  const [previewPicture, setPreviewPicture] = useState();

  // TODO :
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();

  const handleSubmitPublishForm = async (event) => {
    try {
      event.preventDefault();

      if (title && price && description) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("condition", condition);
        formData.append("city", city);
        formData.append("brand", brand);
        formData.append("size", size);
        formData.append("color", color);
        formData.append("picture", picture);

        const token = Cookies.get("token");

        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
          formData,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        response.data && navigate(`/offer/${response.data._id}`);
      }
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  };

  return !isConnected ? (
    <Navigate to="/login"></Navigate>
  ) : (
    <div className="publish-main">
      <div className="publish-container">
        <h2 id="publish-title">Vends ton article</h2>
        <form id="publish-form" onSubmit={handleSubmitPublishForm}>
          <div className="publish-picture-container">
            {previewPicture ? (
              <>
                <img
                  src={previewPicture}
                  alt="Image que vous avez selectionné"
                  className="publish-preview-picture"
                />
                <p
                  className="publish-delete-preview-picture"
                  onClick={() => {
                    setPreviewPicture("");
                  }}
                >
                  Supprimer l'image
                </p>
              </>
            ) : (
              <>
                <div className="publish-picture-style-container">
                  <label htmlFor="publish-file">
                    <span className="publish-plus-symbol">+ </span>
                    <span className="publish-picture-text">
                      Ajouter une photo
                    </span>
                  </label>
                </div>
                <input
                  type="file"
                  id="publish-file"
                  onChange={(event) => {
                    setPicture(event.target.files[0]);
                    setPreviewPicture(
                      URL.createObjectURL(event.target.files[0])
                    );
                  }}
                />
              </>
            )}
          </div>
          <div className="publish-title-container">
            <div className="flex-zone">
              <h4>Titre</h4>{" "}
              <input
                placeholder="ex: Chemise Sézane verte"
                type="text"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="flex-zone">
              <h4>Décris ton article</h4>{" "}
              <input
                placeholder="ex: porté quelques fois, taille correctement"
                type="text"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="publish-details-container">
            <div className="flex-zone">
              <h4>Taille</h4>{" "}
              <input
                placeholder="ex: Zara"
                type="text"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </div>
            <div className="flex-zone">
              <h4>Marque</h4>{" "}
              <input
                placeholder="ex: L / 40 / 12"
                type="text"
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>
            <div className="flex-zone">
              <h4>Couleur</h4>{" "}
              <input
                placeholder="ex: Fushia"
                type="text"
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>
            <div className="flex-zone">
              <h4>Etat</h4>{" "}
              <input
                placeholder="ex: Neuf avec étiquette"
                type="text"
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </div>
            <div className="flex-zone">
              <h4>Lieu</h4>{" "}
              <input
                placeholder="ex: Paris"
                type="text"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="publish-price-container">
            <div className="flex-zone">
              <h4>Prix</h4>{" "}
              <input
                placeholder="0,00€"
                type="text"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="publish-button-container">
            <input className="publish-button" type="submit" value="Ajouter" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
