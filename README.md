# Animal Classification Project

## Project Description

In this project, we aim to classify different types of animals based on a given set of features such as hair, milk production, airborne capability, predator status, and more. This classification task is essential for various applications in zoology, wildlife conservation, and biology education. The foundation of our project is based on a research paper that explored animal classification using K-Nearest Neighbors (KNN) and Random Forest algorithms. In addition to implementing these two algorithms from the research paper, we have also implemented our own Decision Tree classifier to enhance the analysis and provide comparative insights.

We also calculate the similarity between user-provided input and the rows in our dataset to identify the animal with the most similar properties present in the dataset.

## Objectives
To classify animals into different categories based on their features.
To implement and evaluate three different machine learning models: K-Nearest Neighbors (KNN), Random Forest, and Decision Tree.
To compare the performance of these models and determine the most effective one for animal classification based on the performance measures.
Each animal in the dataset is labeled with its class, representing the type of animal (e.g., mammal, bird, reptile, etc.).

## Dataset
The source of this data is the UCI Machine Learning Repository.The dataset used for this project contains various features of animals that are indicative of their classification. The features include:
Hair (Boolean: Has hair or not)
Milk (Boolean: Produces milk or not)
Airborne (Boolean: Can fly or not)
Predator (Boolean: Is a predator or not)
And other relevant attributes.

## Methodology

### Data Preprocessing
Handling Missing Values:
For any feature column with more than 5% missing values, we use an imputer to fill in the missing values. The imputer can use strategies such as the mean, median, or most frequent value of the non-missing entries to fill the gaps.
For feature columns with less than 5% missing values, we simply remove the rows that contain the missing values.

### Model Implementation and Evaluation
Model Creation, Fitting, and Testing:
K-Nearest Neighbors (KNN): We implement the KNN algorithm, which classifies an animal by looking at the 'k' nearest neighbors in the feature space and assigning the most common class among them.
Random Forest: We implement the Random Forest algorithm, which uses an ensemble of decision trees to improve classification accuracy and reduce overfitting.
Decision Tree: We implement our own Decision Tree algorithm, which splits the data into branches based on feature values, aiming to maximize information gain at each split.
Evaluation: We evaluate each model using metrics such as accuracy, precision, recall, and F1-score. This involves splitting the data into training and testing sets and comparing the models' predictions to the actual labels.

### User Input and Prediction
User Interface for Input:
Users interact with a web interface where they select features of an animal through checkboxes. These features might include attributes like hair, milk production, airborne capability, and predator status.
Once the user submits their selections, the data is sent to the backend for processing.

## Backend Prediction:
The backend receives the input data and uses the trained machine learning model to make a prediction. The backend processes the input, applies the appropriate model, and returns the predicted animal class to the user interface. It also returns the animal name of the row with the most simlarity and the index at which it is present.

### Performance Metrics
Here are some of the performance metrics used for measuring the performance of all the above listed models :
Accuracy: A The percentage of correct predictions made by the model on unseen data. Comparing the overall accuracy of KNN, Random Forest, and Decision Tree classifiers.
Precision,Recall and F1 Score: Evaluating these metrics to understand the models' effectiveness in handling imbalanced classes and their ability to classify each type of animal correctly.
Confusion Matrix : Providing confusion matrices for a visual representation of the models' performance in classifying each class correctly.

