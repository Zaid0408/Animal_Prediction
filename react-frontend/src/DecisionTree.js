import React from 'react';
import decisionTreeImage from '/Users/sherazhasan/Desktop/ML_projects/ML_AAT/react-frontend/src/tree_visualization.png'; 

const DecisionTreeInfo = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '20px' }}>
      <header >
        <h1>Introduction to Decision Trees</h1>
      </header>
      
      <section>
        <h2>Introduction</h2>
        <p>
          Decision trees are a fundamental concept in machine learning, offering a clear and interpretable way to classify data or make predictions. 
          They resemble flowcharts, with each internal node representing a question about a specific feature of the data.
          Based on the answer to that question, the data is directed down a particular branch towards a leaf node. 
          These leaf nodes contain the final prediction or classification for that particular data point.
        </p>
        <p>
          The main advantage of Decision Trees is their simplicity and interpretability. 
          They can handle both numerical and categorical data, require little data preprocessing, and are capable of modeling non-linear relationships. 
          However, they are prone to overfitting, especially when they become too deep.
        </p>
      </section>
      <section>
        <h2>Making Predictions Step-by-Step</h2>
        <p>
            <li><strong>Start at the root node:</strong>This node represents the most important question about the data that best separates the different classes.</li>
            <li><strong>Answer the question: </strong>Based on the value of the specific feature being asked about, the data point is directed down the corresponding branch.</li>
            <li><strong>Continue down the tree: </strong>This process of answering questions and following branches repeats until a leaf node is reached.</li>
            <li><strong>Read the prediction: </strong>The leaf node holds the final prediction or classification for the data point, based on the path it has taken through the tree.</li>
        </p>
      </section>
      <section>
        <h2>Decision Tree Visualization</h2>
        <img src={decisionTreeImage} alt="Decision Tree Visualization" style={{ width: '100%', height: 'auto', margin: '20px 0' }} />
        <p style={{display:'flex'}}>
            Given above is the Decision Tree Visualized with the help of plot_tree function in scikit-learn library
        </p>
      </section>
      <section>
      <h2>Results</h2>
        <p>
            The decisiont tree model performs exceedingly well as it gives an accuracy of 96% . Given below is the classification report for the Decision tree model: 
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
};

export default DecisionTreeInfo;
