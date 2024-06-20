import React from 'react';
import randomForestImage from '/Users/sherazhasan/Desktop/ML_projects/ML_AAT/react-frontend/src/random_forest.png'; 

function RandomForestInfo() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '20px' }}>
      <header>
        <h1>Random Forests</h1>
      </header>
      <section>
        <h2>Introduction</h2>
        <p>
          Random Forest is an ensemble learning method that constructs multiple decision trees during training and outputs the 
          mode of the classes (classification) or mean prediction (regression) of the individual trees.
          Random Forests are a powerful machine learning technique known for their accuracy and interpretability. 
          Unlike a single decision tree, which can be prone to overfitting, they leverage an ensemble approach to make predictions. 
          This ensemble approach combines the strengths of multiple decision trees, leading to more robust and reliable results.
        </p>
      </section>
      <section>
        <h2>Unveiling the Prediction Process</h2>
        <p>
            <li><strong>Building a Diverse Forest: </strong>Random Forests create numerous decision trees, each trained on a subset of the data randomly selected from the entire training set.  Additionally, at each decision point within a tree, only a random subset of features is considered as potential splitting criteria. </li>
            <li><strong>Harnessing the Wisdom of the Crowd: </strong>Random Forests don't rely solely on the prediction of a single tree.  Instead, they leverage the collective wisdom of the entire forest. </li>
            <li><strong>Democracy in Action: Votes or Averages Decide: </strong>Depending on the task at hand (classification or regression), the final prediction is determined democratically.  
            For classification problems, the class label that receives the most votes (the majority vote from the individual trees) becomes the final prediction. 
            In contrast, for regression problems, the final prediction is the average of the predicted values from all the trees in the forest.</li>
        </p>
      </section>
      <section>
        <h2>Visualization</h2>
        <p>
          Below is a visualization of one of the Decision trees in the Random Forest model. The visualization helps to understand how individual trees are made aggregated to make predictions and on what criterion they split features.
          
        </p>
        <img src={randomForestImage} alt="Random Forest Visualization" style={{width: '100%',height: 'auto', margin: '20px 0px'}}/>
      </section>
      <section>
      <h2>Results</h2>
        <p>
            The Random Forest model performs exceedingly well as it gives an accuracy of 96% . Given below is the classification report for the Random Forest model: 
        </p>
        <style>
            {`
                table {
                margin: 0 auto;
                border: none;
                border-collapse: collapse;
                }
                th, td {
                padding: 10px;
                }
            `}
        </style>
        <table >
        <thead>
            <tr>
                <th>class_label</th>
                <th>precision</th>
                <th>recall</th>
                <th>f1-score</th>
                <th>support</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>1.00</td>
            <td>1.00</td>
            <td>1.00</td>
            <td>23</td>
            </tr>
            <tr>
            <td>2</td>
            <td>1.00</td>
            <td>1.00</td>
            <td>1.00</td>
            <td>5</td>
            </tr>
            <tr>
            <td>3</td>
            <td>1.00</td>
            <td>0.75</td>
            <td>0.86</td>
            <td>4</td>
            </tr>
            <tr>
            <td>4</td>
            <td>1.00</td>
            <td>1.00</td>
            <td>1.00</td>
            <td>6</td>
            </tr>
            <tr>
            <td>5</td>
            <td>0.75</td>
            <td>1.00</td>
            <td>0.86</td>
            <td>3</td>
            </tr>
            <tr>
            <td>6</td>
            <td>1.00</td>
            <td>1.00</td>
            <td>1.00</td>
            <td>3</td>
            </tr>
            <tr>
            <td>7</td>
            <td>1.00</td>
            <td>1.00</td>
            <td>1.00</td>
            <td>3</td>
            </tr>
        </tbody>
        </table>

        </section>
    </div>
  );
}

export default RandomForestInfo;
