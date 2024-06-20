import React, { useState ,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DecisionTreeInfo from './DecisionTree';
import KMeansInfo from './KMeans';
import RandomForestInfo from './randomForest';
import Home from './Home';
import Layout from './Layout';

function App() {
  const [attributes, setAttributes] = useState({
    hair: false,
    feathers: false,
    eggs: false,
    milk: false,
    airborne: false,
    aquatic: false,
    predator: false,
    toothed: false,
    backbone: false,
    breathes: false,
    venomous: false,
    fins: false,
    legs: 0,
    tail: false,
    domestic: false,
    catsize: false
  });
  
  const [predictions, setPredictions] = useState(null);

  // useEffect(() => {
  //   // Reset attributes and predictions when the component mounts
  //   setAttributes(initialAttributes);
  //   setPredictions(null);
  // }, []);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setAttributes({
      ...attributes,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/api/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ attributes })
    });
    const data = await response.json();
    console.log(data);
    setPredictions(data);
  };

  return (
    
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/decision-tree" element={<DecisionTreeInfo />} />
            <Route path="/k-means" element={<KMeansInfo />} />
            <Route path="/random-forest" element={<RandomForestInfo />} />
            <Route
              path="/predict"
              element={
                <div className="form-container">
                  <h2>Animal Classification Prediction</h2>
                  <p>To predict the Animal and its type check the given box if your animal has any of these features. </p>
                  <form onSubmit={handleSubmit} className="prediction-form">
                    <label>
                      Hair:
                      <input
                        type="checkbox"
                        name="hair"
                        checked={attributes.hair}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Feathers:
                      <input
                        type="checkbox"
                        name="feathers"
                        checked={attributes.feathers}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Eggs:
                      <input
                        type="checkbox"
                        name="eggs"
                        checked={attributes.eggs}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Milk:
                      <input
                        type="checkbox"
                        name="milk"
                        checked={attributes.milk}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Airborne:
                      <input
                        type="checkbox"
                        name="airborne"
                        checked={attributes.airborne}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Aquatic:
                      <input
                        type="checkbox"
                        name="aquatic"
                        checked={attributes.aquatic}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Predator:
                      <input
                        type="checkbox"
                        name="predator"
                        checked={attributes.predator}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Toothed:
                      <input
                        type="checkbox"
                        name="toothed"
                        checked={attributes.toothed}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Backbone:
                      <input
                        type="checkbox"
                        name="backbone"
                        checked={attributes.backbone}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Breathes air:
                      <input
                        type="checkbox"
                        name="breathes"
                        checked={attributes.breathes}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Venomous:
                      <input
                        type="checkbox"
                        name="venomous"
                        checked={attributes.venomous}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Fins:
                      <input
                        type="checkbox"
                        name="fins"
                        checked={attributes.fins}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Number of Legs:
                      <input
                        type="number"
                        name="legs"
                        value={attributes.legs}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Tail:
                      <input
                        type="checkbox"
                        name="tail"
                        checked={attributes.tail}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Domestic:
                      <input
                        type="checkbox"
                        name="domestic"
                        checked={attributes.domestic}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <label>
                      Catsize (Carnivorous Animal roughly the size of a cat):
                      <input
                        type="checkbox"
                        name="catsize"
                        checked={attributes.catsize}
                        onChange={handleChange}
                      />
                    </label>
                    <br />
                    <button type="submit">Predict</button>
                  </form>
                  {predictions && (
                    <div>
                      <h2>Predictions</h2>
                      <p>KNN Prediction: {predictions.knn_prediction}</p>
                      <p>Decision Tree Prediction: {predictions.dt_prediction}</p>
                      <p>Random Forest Prediction: {predictions.rf_prediction}</p>
                      <p>
                        Ensemble learning Prediction: {predictions.ensemble_prediction}
                      </p>
                      <p>
                        Most Similar Animal: {predictions.animal_name_predicted} (
                        Row Index: {predictions.most_similar_row_index})
                      </p>
                    </div>
                  )}
                </div>
              }
            />
          </Routes>
        
      </Layout>
    </Router>
  );
}

export default App;