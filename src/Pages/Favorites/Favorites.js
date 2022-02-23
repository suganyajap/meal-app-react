import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MealCard from '../../components/MealCard';
import { MyContext } from '../../Context'
// import axios from '../../Axios';
function Favorites() {
    const { user } = useContext(MyContext);
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        //www.themealdb.com/api/json/v1/1/lookup.php?i=52772
        if (user.favorites.length) {

            const requests = user.favorites.map((favorite) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favorite}`)
                .then((res) => res.json())
            );
            Promise.all(requests)
                .then((res) => setFavorites(res))
                
            }
    }, [user])
    if (!user.favorites.length) {
        return <div>
            <h3>You don't have any favorites yet.</h3>
            <LinkContainer to="/">
                <Button>Please add new ones</Button>
            </LinkContainer>
        </div>
    }
    return (
        <div>
            <h2>Your favorites</h2>
            <div className='meals-container'>{favorites.map(({meals:meal}) => (
                
                    <MealCard key={meal[0].idMeal} {...meal[0]} />
               
            ))}
            </div>
        </div>
    )
}

export default Favorites