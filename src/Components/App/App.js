import "./App.css";
import Home from "../Home/Home";
import Plants from "../Plants/Plants";
import Plant from "../Plant/Plant";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { LOAD_PLANTS } from "../../Graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import UserProfile from "../UserProfile/UserProfile";
import PropTypes from 'prop-types'

const App = () => {
  const [plants, setPlants] = useState([]);
  const [growzone, setGrowzone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [loadPlants, { loading, error, data }] = useLazyQuery(LOAD_PLANTS);
  // const [saveList, setSaveList] = useState([])
 // const [savePlant, setSavePlant] = useState([])
  // const [plantAdded, setPlantAdded] =useState(false)
  useEffect(() => {
    if (data) {
      setPlants([...data.vegetablesByZipcode.vegetables]);
      setGrowzone(data.vegetablesByZipcode.growZone);
    }
  }, [loading, error, data]);
  // console.log("error", error);

  // const addToGarden = (id) => {
  // const addToGarden = (user, vegetable) => {
  //     const newVeggie = {
  //       variables: { userId: user, vegetableId: vegetable}
  //     } 
  //       // if(!saveList.includes(Number(id))) {
  //     //   console.log("saved list",saveList)
  //     //   const savedList = plants.filter(savedPlant => savedPlant.id === id)
  //     //   return setSaveList(previousList => [...previousList, savedList[0]])
  //     // }
  //     console.log("add function is firing", newVeggie)
  //    return newVeggie
  //   }

  //   // const deleteFromGarden = (id) => {
  //   const deleteFromGarden = () => {
  //     // if(saveList.includes(id)) {
  //     //   const updateList = plants.reduce((arr, plant, index) => {
  //     //     if(plant.id === id) {
  //     //       arr.splice(index, 1)
  //     //     }
  //     //     return arr
  //     //   })
  //     //   return setSaveList(updateList)
  //     // }
  //     console.log("delete function is firing")

  //   }

  //below for testing while working only can be deleted at end
  useEffect(() => {
    console.log("hey this is growzone", growzone);
  }, [growzone]);

  useEffect(() => {
    console.log("hey this is plants", plants);
  }, [plants]);

  useEffect(() => {
    console.log("hey this is zipcode", zipcode);
  }, [zipcode]);

  return (
    <div className="app-container">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              zipcode={zipcode}
              setZipcode={setZipcode}
              setPlants={setPlants}
              setGrowzone={setGrowzone}
              loadPlants={loadPlants}
            />
          )}
        />
        {error && <Route exact path="*" render={() => <ErrorPage />} />}
        {loading && <Route exact path="/results/:zipcode" render={() => <LoadingPage />}></Route>}
        <Route
          exact
          path="/results/:zipcode"
          render={({ match }) => (
            <Plants
              loadPlants={loadPlants}
              plants={plants}
              growzone={growzone}
              zipcode={match.params.zipcode}
              heading={`Your ${match.params.zipcode} Fruits and Vegetables`}
            />
          )}
        ></Route>
        <Route
          exact
          path="/vegetable/:growzone/:vegetableId"
          render={({ match }) => {
            return (
              <Plant
                zipcode={zipcode}
                id={match.params.vegetableId}
                growzone={match.params.growzone}
            
              />
            );
          }}
        ></Route>
        <Route
          exact
          path="/user/:userId"
          render={({ match }) => {
            return (
              <UserProfile 
                // addToGarden={addToGarden}
                // deleteFromGarden={deleteFromGarden}
                id={match.params.userId}
                // plantAdded={plantAdded}
              />
            )
          }}
        />
        <Route exact path="*" render={() => <ErrorPage />} />
      </Switch>
    </div>
  );
};

export default App;

App.propTypes = {
  zipcode: PropTypes.string,
  growzone: PropTypes.string,
  plants: PropTypes.array,
};
