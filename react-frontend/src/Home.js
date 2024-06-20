import React from 'react';
import './Home.css';
import Prediction from './App'
import { Link } from 'react-router-dom';
import BarChart from '/Users/sherazhasan/Desktop/ML_projects/ML_AAT/react-frontend/src/BarChart_Animal.png';
import PieChart from '/Users/sherazhasan/Desktop/ML_projects/ML_AAT/react-frontend/src/PieChart.png';

const Home = () => {
  return (
    <div className="home-container">
      <main>
        <h1>Animal Classification Project</h1>
        <section className="project-description">
          <h2>Project Description</h2>
          <p>
          In this project, we aim to classify different types of animals based on a given set of features such as hair, milk production, airborne capability, predator status, and more. 
          This classification task is essential for various applications in zoology, wildlife conservation, and biology education. 
          The foundation of our project is based on a research paper that explored animal classification using K-Nearest Neighbors (KNN) and Random Forest algorithms. 
          In addition to implementing these two algorithms from the research paper, we have also implemented our own Decision Tree classifier to enhance the analysis and provide comparative insights.
          </p>
          <p>
          We also calculate the similarity between user-provided input and the rows in our dataset to identify the animal with the most similar properties present in the dataset.
          </p>
        </section>
        <section>
            <h2>Objectives</h2>
            <li>To classify animals into different categories based on their features.</li>
            <li>To implement and evaluate three different machine learning models: K-Nearest Neighbors (KNN), Random Forest, and Decision Tree.</li>
            <li>To compare the performance of these models and determine the most effective one for animal classification based on the performance measures.</li>
            <p>Each animal in the dataset is labeled with its class, representing the type of animal (e.g., mammal, bird, reptile, etc.).</p>
        </section>
        <section className="data-description">
          <h2>Dataset</h2>
          <p>
            The source of this data is the UCI Machine Learning Repository.The dataset used for this project contains various features of animals that are indicative of their classification. The features include:
            <li>Hair (Boolean: Has hair or not)</li>
            <li>Milk (Boolean: Produces milk or not)</li>
            <li>Airborne (Boolean: Can fly or not)</li>
            <li>Predator (Boolean: Is a predator or not)</li>
            <li>And other relevant attributes.</li>
          </p>
        </section>
        <section className="models-description">
        <h2>Methodology</h2>

            <h3>1. Data Preprocessing</h3>
            <p><strong>Handling Missing Values:</strong>
            <ul>
                <li>For any feature column with more than 5% missing values, we use an imputer to fill in the missing values. The imputer can use strategies such as the mean, median, or most frequent value of the non-missing entries to fill the gaps.</li>
                <li>For feature columns with less than 5% missing values, we simply remove the rows that contain the missing values.</li>
            </ul>
            </p>
            <h3>2. Model Implementation and Evaluation</h3>
            <p><strong>Model Creation, Fitting, and Testing:</strong>
            <ul>
                <li><strong>K-Nearest Neighbors (KNN):</strong> We implement the KNN algorithm, which classifies an animal by looking at the 'k' nearest neighbors in the feature space and assigning the most common class among them.</li>
                <li><strong>Random Forest:</strong> We implement the Random Forest algorithm, which uses an ensemble of decision trees to improve classification accuracy and reduce overfitting.</li>
                <li><strong>Decision Tree:</strong> We implement our own Decision Tree algorithm, which splits the data into branches based on feature values, aiming to maximize information gain at each split.</li>
                <li><strong>Evaluation:</strong> We evaluate each model using metrics such as accuracy, precision, recall, and F1-score. This involves splitting the data into training and testing sets and comparing the models' predictions to the actual labels.</li>
            </ul>
            </p>
            <h3>3. User Input and Prediction</h3>
            <p><strong>User Interface for Input:</strong>
            <ul>
                <li>Users interact with a web interface where they select features of an animal through checkboxes. These features might include attributes like hair, milk production, airborne capability, and predator status.</li>
                <li>Once the user submits their selections, the data is sent to the backend for processing.</li>
            </ul>
            </p>
            <p><strong>Backend Prediction:</strong>
            <ul>
                <li>The backend receives the input data and uses the trained machine learning model to make a prediction. 
                    The backend processes the input, applies the appropriate model, and returns the predicted animal class to the user interface. It also returns the animal name of the row with the most simlarity and the index at which it is present.</li>
            </ul>
            </p>
        </section>
        <section className="data-visualization">
          <h2>Data Visualization</h2>
          <p>
            Data visualization is done using the matplotlib library in Python. Below are examples of a bar graph and a pie chart 
            created to visualize the data.
          </p>
          <div className="visualization-images">
            <div className="visualization-item">
              <img src={BarChart} alt="Bar Graph" />
              <p>This bar graph displays the distribution of different animal with respect to their class type in the dataset.</p>
            </div>
            <div className="visualization-item">
              <img src={PieChart} alt="Pie Chart" />
              <p>This pie chart shows the proportion of various animals and their types based on their assigned class values across the dataset.</p>
            </div>
          </div>
        </section>
       
        <section className="performance">
        <h2>Performance Metrics</h2>
        <p>
          Here are some of the performance metrics used for measuring the performance of all the above listed models  :
          <ul>
            <li><strong>Accuracy: </strong>A The percentage of correct predictions made by the model on unseen data. Comparing the overall accuracy of KNN, Random Forest, and Decision Tree classifiers.</li>
            <li><strong>Precision,Recall and F1 Score: </strong> Evaluating these metrics to understand the models' effectiveness in handling imbalanced classes and their ability to classify each type of animal correctly.</li>
            <li><strong>Confusion Matrix : </strong>Providing confusion matrices for a visual representation of the models' performance in classifying each class correctly.</li>
          </ul>
        </p>
        </section>
        <section className="performance">
        <h2>References</h2>
        <ul>
            <li><a href="https://journals.ui.edu.ng/index.php/uijslictr/article/view/1143/961" target="_blank" title="Opens in a new tab">Research paper Link</a></li>
            <li><a href="https://archive.ics.uci.edu/ml/datasets/Zoo" target="_blank" title="Opens in a new tab">Dataset link</a></li>
        </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
