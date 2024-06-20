import React from 'react';
import elbowMethodImage from '/Users/sherazhasan/Desktop/ML_projects/ML_AAT/react-frontend/src/elbow_kmeans.png'; 

function KMeansInfo() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '20px' }}>
      <header>
        <h1>K-Nearest Neighbour (KNN) </h1>
      </header>
      <section>
        <h2>Introduction</h2>
        <p>
        K-Nearest Neighbors (KNN) is a simple and versatile machine learning algorithm used for classification and regression. 
        It predicts the label of a new data point by analyzing the labels of its closest neighbors in the training data. 
        The number of neighbors considered (k) is important to avoid overfitting or underfitting the model. KNN is a lazy learner, meaning it stores the training data and calculates classifications on the fly, making it easy to implement for various tasks like handwriting recognition or spam filtering.
        </p>
      </section>
      <section>
      <h2>Working of KNN</h2>
          <p>
            <li><strong> Define K (number of neighbors): </strong>This crucial parameter determines how many of the closest data points will influence the prediction</li>
            <li><strong>Calculate Distances: </strong>For a new data point you want to predict, KNN calculates the distance between that point and each point in the training data.</li>
            <li><strong>Identify K Nearest Neighbors:  </strong>Once all distances are calculated, KNN selects the K data points from the training set that are closest to the new data point. These K closest points are considered the "neighbors" of the new point.</li>
            <li><strong>Make Prediction  (Majority Vote) :  </strong>f KNN is used for classification, the most frequent class label among the K nearest neighbors becomes the predicted class for the new data point. </li>
          </p>
      </section>
      <section>
        <h2>Finding Optimal number of Clusters</h2>
        <p>
        We can find the optimal amount of clusters by looping different (k) values from 1 to 10.
        This trains a new model and predicts labels for the test data with each k value. 
        The accuracy is then calculated and stored to see which k value performs best on the unseen test data. 
        This process of finding the optimal k is crucial to avoid overfitting or underfitting the model to the training data.
        </p>
      </section>
      <section>
        <h2>Elbow Method</h2>
        <p>
          The Elbow Method, though commonly associated with K-Means clustering, can also be used as a heuristic to choose the optimal number of neighbors (k) in a K-Nearest Neighbors model. 
          Here, the cost function isn't directly related to cluster centroids, but rather to the model's accuracy or error rate on a validation set.
          We calculate this cost for different k values, plotting them against the corresponding k. 
          The Elbow Method suggests choosing the k value at the "elbow" of the curve, where the cost starts to decrease less significantly with each additional neighbor. 
          This indicates that increasing k beyond this point might not significantly improve performance and could lead to overfitting.
        </p>
        <img src={elbowMethodImage} alt="Elbow Method" />
      </section>
      <section>
      <h2>Results</h2>
        <p>
            The model performs exceedingly well as it gives an accuracy of 95% . Given below is the classification report for the KNN model: 
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
            <td>0.60</td>
            <td>1.00</td>
            <td>0.75</td>
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
            <td>0.67</td>
            <td>0.80</td>
            <td>3</td>
            </tr>
        </tbody>
        </table>

        </section>
    </div>
  );
}

export default KMeansInfo;
