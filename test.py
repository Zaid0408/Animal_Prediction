from joblib import load
import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

# Load the model from file
model_rf = load('/Users/sherazhasan/Desktop/ML_projects/ML_AAT/random_forest_model.joblib')
model_knn= load('/Users/sherazhasan/Desktop/ML_projects/ML_AAT/knn_model.joblib')
clf=load('/Users/sherazhasan/Desktop/ML_projects/ML_AAT/decision_tree_model.joblib')
ensemble= load('/Users/sherazhasan/Desktop/ML_projects/ML_AAT/ensemble_model.joblib')
df= pd.read_csv("/Users/sherazhasan/Desktop/ML_projects/ML_AAT/zoo.csv")

def classify_animal_type(animal_type):
    # Define the cases and their corresponding animal types
    animal_types = {
        1: "Mammal",
        2: "Bird",
        3: "Reptile",
        4: "Fish",
        5: "Amphibian",
        6: "Bug",
        7: "Invertebrate"
    }
    
    # Print the animal type based on the input integer value
    print(animal_types.get(animal_type, "Unknown"))



def preprocess_attributes():
    hair = input("Does the animal have hair? (yes/no): ")
    attributes_array.append(1 if hair.lower() == 'yes' else 0)
    
    feathers = input("Does the animal have feathers? (yes/no): ")
    attributes_array.append(1 if feathers.lower() == 'yes' else 0)
    
    eggs = input("Does the animal lay eggs? (yes/no): ")
    attributes_array.append(1 if eggs.lower() == 'yes' else 0)
    
    milk = input("Does the animal produce milk? (yes/no): ")
    attributes_array.append(1 if milk.lower() == 'yes' else 0)
    
    airborne = input("Is the animal airborne? (yes/no): ")
    attributes_array.append(1 if airborne.lower() == 'yes' else 0)
    
    aquatic = input("Is the animal aquatic? (yes/no): ")
    attributes_array.append(1 if aquatic.lower() == 'yes' else 0)
    
    predator = input("Is the animal a predator? (yes/no): ")
    attributes_array.append(1 if predator.lower() == 'yes' else 0)
    
    toothed = input("Does the animal have teeth? (yes/no): ")
    attributes_array.append(1 if toothed.lower() == 'yes' else 0)
    
    backbone = input("Does the animal have a backbone? (yes/no): ")
    attributes_array.append(1 if backbone.lower() == 'yes' else 0)
    
    breathes = input("Does the animal breathe? (yes/no): ")
    attributes_array.append(1 if breathes.lower() == 'yes' else 0)
    
    venomous = input("Is the animal venomous? (yes/no): ")
    attributes_array.append(1 if venomous.lower() == 'yes' else 0)
    
    fins = input("Does the animal have fins? (yes/no): ")
    attributes_array.append(1 if fins.lower() == 'yes' else 0)
    
    legs = input("How many legs does the animal have?: ")
    attributes_array.append(int(legs))
    
    tail = input("Does the animal have a tail? (yes/no): ")
    attributes_array.append(1 if tail.lower() == 'yes' else 0)
    
    domestic = input("Is the animal domestic? (yes/no): ")
    attributes_array.append(1 if domestic.lower() == 'yes' else 0)
    
    catsize = input("Is the animal cat-sized? (yes/no): ")
    attributes_array.append(1 if catsize.lower() == 'yes' else 0)
    
    return attributes_array



attributes_array = preprocess_attributes()


knn_pred_value = model_knn.predict(np.array(attributes_array).reshape(1, -1))
knn_pred_value # predict one value
print('\nKNN prediction is : ')
classify_animal_type(int(knn_pred_value[0]))


dt_pred_value = clf.predict(np.array(attributes_array).reshape(1, -1))
dt_pred_value # predict one value
print('\nDecision Tree prediction is : ')
classify_animal_type(int(dt_pred_value[0]))

rf_pred_value = model_rf.predict(np.array(attributes_array).reshape(1, -1))
rf_pred_value # predict one value
print('\nRandom Forest prediction is : ')
classify_animal_type(int(rf_pred_value[0]))

ensemble_pred_value = ensemble.predict(np.array(attributes_array).reshape(1, -1))
ensemble_pred_value # predict one value
print('\nEnsemble learning prediction is : ')
classify_animal_type(int(ensemble_pred_value[0]))

filter_value = int(dt_pred_value[0]) # Example value between 1 to 7
filtered_df = df[df.iloc[:, -1] == filter_value]

# Relevant columns for comparison (excluding first and last columns)
comparison_matrix = filtered_df.iloc[:, 1:-1].values

# Calculate the Euclidean distance between the given array and each row in the comparison matrix
distances = np.linalg.norm(comparison_matrix - attributes_array, axis=1)

# Return the index of the highest similarity (smallest distance)
most_similar_row_index = np.argmin(distances)

# Original index from the DataFrame
original_index = filtered_df.index[most_similar_row_index]

print("Index of the row with the highest similarity:", original_index)

animal_name_predicted = df.loc[original_index, df.columns[0]] # Retrieve the animal name

print("Value of the first column for this row:", animal_name_predicted)