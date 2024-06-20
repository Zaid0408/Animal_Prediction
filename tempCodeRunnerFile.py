import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV, RandomizedSearchCV
from sklearn.model_selection import train_test_split
from scipy.stats import randint
from joblib import load

rf = load('random_forest_model.joblib')

# Load data
data= pd.read_csv("/Users/sherazhasan/Desktop/ML_projects/ML_AAT/zoo.csv")
X, y = data.iloc[:, 1:17].values, data.iloc[:, 17].values
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Grid Search
param_grid = {
    'n_estimators': [5,10, 20, 30,40,50,100],
    'max_depth': [None, 10, 20, 30],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4],
    'bootstrap': [True, False]
}

rf = RandomForestClassifier()
grid_search = GridSearchCV(estimator=rf, param_grid=param_grid, cv=5, n_jobs=-1, verbose=2)
grid_search.fit(X_train, y_train)
print("Grid Search Best Parameters:", grid_search.best_params_)
# Answer is {'bootstrap': False, 'max_depth': None, 'min_samples_leaf': 1, 'min_samples_split': 2, 'n_estimators': 40}


# Randomized Search
param_dist = {
    'n_estimators': randint(100, 1000),
    'max_depth': [None, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    'min_samples_split': randint(2, 11),
    'min_samples_leaf': randint(1, 5),
    'bootstrap': [True, False]
}

random_search = RandomizedSearchCV(estimator=rf, param_distributions=param_dist, n_iter=100, cv=5, n_jobs=-1, verbose=2, random_state=42)
random_search.fit(X_train, y_train)
print("Randomized Search Best Parameters:", random_search.best_params_)
# Answer is {'bootstrap': False, 'max_depth': 90, 'min_samples_leaf': 1, 'min_samples_split': 3, 'n_estimators': 195}

# Train model using Grid Search best parameters
# best_params_grid = {'bootstrap': False, 'max_depth': None, 'min_samples_leaf': 1, 'min_samples_split': 2, 'n_estimators': 40}
# rf_grid = RandomForestClassifier(**best_params_grid)
# rf_grid.fit(X_train, y_train)

# Train model using Randomized Search best parameters
# best_params_random = {'bootstrap': False, 'max_depth': 90, 'min_samples_leaf': 1, 'min_samples_split': 3, 'n_estimators': 195}
# rf_random = RandomForestClassifier(**best_params_random)
# rf_random.fit(X_train, y_train)

# # Evaluate both models on the test set
# from sklearn.metrics import accuracy_score

# y_pred_grid = rf_grid.predict(X_test)
# y_pred_random = rf_random.predict(X_test)

# print("Accuracy of Grid Search model:", accuracy_score(y_test, y_pred_grid))
# print("Accuracy of Randomized Search model:", accuracy_score(y_test, y_pred_random))



