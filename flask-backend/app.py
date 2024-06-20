from flask import Flask, request, jsonify
from joblib import load
import numpy as np
import pandas as pd
from flask_cors import CORS

# Loading models
model_rf = load('/Users/sherazhasan/Desktop/ML_projects/ML_AAT/random_forest_model.joblib')
model_knn = load('/Users/sherazhasan/Desktop/ML_projects/ML_AAT/knn_model.joblib')
clf = load('/Users/sherazhasan/Desktop/ML_projects/ML_AAT/decision_tree_model.joblib')
ensemble= load('/Users/sherazhasan/Desktop/ML_projects/ML_AAT/ensemble_model.joblib')
df = pd.read_csv("/Users/sherazhasan/Desktop/ML_projects/ML_AAT/zoo.csv")  

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

animal_types = {
    1: "Mammal",
    2: "Bird",
    3: "Reptile",
    4: "Fish",
    5: "Amphibian",
    6: "Bug",
    7: "Invertebrate"
}

def preprocess_attributes(data):
    attributes_array = []
    attributes_array.append(1 if data.get('hair') else 0)
    attributes_array.append(1 if data.get('feathers', False) else 0)
    attributes_array.append(1 if data.get('eggs', False) else 0)
    attributes_array.append(1 if data.get('milk', False) else 0)
    attributes_array.append(1 if data.get('airborne', False) else 0)
    attributes_array.append(1 if data.get('aquatic', False) else 0)
    attributes_array.append(1 if data.get('predator', False) else 0)
    attributes_array.append(1 if data.get('toothed', False) else 0)
    attributes_array.append(1 if data.get('backbone', False) else 0)
    attributes_array.append(1 if data.get('breathes', False) else 0)
    attributes_array.append(1 if data.get('venomous', False) else 0)
    attributes_array.append(1 if data.get('fins', False) else 0)
    attributes_array.append(int(data.get('legs', 0)))
    attributes_array.append(1 if data.get('tail', False) else 0)
    attributes_array.append(1 if data.get('domestic', False) else 0)
    attributes_array.append(1 if data.get('catsize', False) else 0)
    return attributes_array

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    attributes = data.get("attributes", {})
    print(data)
    attributes_array = preprocess_attributes(attributes)
    print("Attributes Array:", attributes_array)
    knn_pred_value = model_knn.predict([attributes_array])
    dt_pred_value = clf.predict([attributes_array])
    rf_pred_value = model_rf.predict([attributes_array])
    ensemble_value=ensemble.predict([attributes_array])
    
    filter_value = int(dt_pred_value[0])
    filtered_df = df[df.iloc[:, -1] == filter_value]
    comparison_matrix = filtered_df.iloc[:, 1:-1].values
    distances = np.linalg.norm(comparison_matrix - attributes_array, axis=1)
    most_similar_row_index = np.argmin(distances)
    original_index = filtered_df.index[most_similar_row_index]
    animal_name_predicted = df.loc[original_index, df.columns[0]]

    response = {
        'knn_prediction': animal_types.get(int(knn_pred_value[0]), "Unknown"),
        'dt_prediction': animal_types.get(int(dt_pred_value[0]), "Unknown"),
        'rf_prediction': animal_types.get(int(rf_pred_value[0]), "Unknown"),
        'ensemble_prediction': animal_types.get(int(ensemble_value[0]), "Unknown"),
        'most_similar_row_index': int(original_index),
        'animal_name_predicted': animal_name_predicted
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
