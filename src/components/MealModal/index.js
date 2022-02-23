import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MyContext } from '../../Context';
import axios from '../../Axios';

function MealModal({ title, description, idMeal }) {

  const [show, setShow] = useState(false);
  const { user, setUser } = useContext(MyContext);
  // const { loading, setLoading } = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddToFavorites = () => {
    // setLoading(true);
    axios.post("/add-favorites", { mealId: idMeal })
      .then(({ data }) => {
        // setLoading(false);
        setUser(data)
        
        alert('Meal added to Favorites');
      })
      .catch((error) => {
        // setLoading(false);
        console.log(error)
      })
  };

  const handleRemoveFromFavorites = () => {
    // setLoading(true);
    axios.post("/remove-favorites", { mealId: idMeal })
      .then(({ data }) => {
        // setLoading(false);
        setUser(data)
        
        alert('Meal removed from Favorites');
      })
      .catch((error) => {
        // setLoading(false);
        console.log(error)
      })
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        see More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {user && (
            <>
              {user.favorites.includes(idMeal) ?
                <Button variant="danger" onClick={handleRemoveFromFavorites}  >Remove from favorites</Button>
                : ( <Button variant="primary" onClick={handleAddToFavorites}  >
                  Add to Favorites
                </Button>
                )}
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );



}

export default MealModal