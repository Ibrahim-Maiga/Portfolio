---
date: "2024-01-21T00:00:00Z"
#external_link: ""
image:
  #caption: 
  focal_point: Smart
share: false
links:
- icon: github
  icon_pack: fab
  name: See on GitHub
  url: https://github.com/Ibrahim-Maiga/SpaceX-Falcon9-Landing-Prediction-V2
#slides: example
# The summary is what appears on the home page
summary: This machine learning project predicts the success of SpaceX Falcon 9 first-stage landings, providing insights for estimating launch costs. Using launch data from 2010 to the present, the project applies classification models like Logistic Regression, Decision Tree, Random Forest, SGD, and SVM, with GridSearchCV for optimization. Key features include data scraping with BeautifulSoup, exploratory analysis of launch sites, payload mass, and booster versions, as well as interactive visual analytics using Folium. By analyzing factors like payload mass, orbit type, and launch site proximity, the project explores optimal locations for new launch sites to support successful missions.
tags:
- Artificial Intelligence
- Machine Learning
- Visualization
- Analytics
- Web Scrapping
- SpaceX
- Featured

title: "Predicting SpaceX Rocket Landings: A Data Science Journey"
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""
---
## Introduction

SpaceX has redefined aerospace economics with its reusable rocket system, achieving historic milestones that set it apart in the space industry. Since December 2010, SpaceX has been the only private company to return a spacecraft from low-Earth orbit. In 2024, it offers Falcon 9 rocket launches at a highly competitive price of approximately 67 million dollars per launch, a significant reduction compared to other providers. The closest competitor to the Falcon 9 in terms of payload capacity and market segment is ULA's Atlas V rocket, which had a launch cost of approximately 115 million per launch. The primary factor behind these cost savings is the reusability of the Falcon 9’s first stage, which allows for refurbishment and relaunch at a fraction of traditional costs.

## Project Goal

The primary objective was to develop a machine learning model capable of predicting Falcon 9 landing successes. Such a model could inform launch cost estimations and enhance mission planning, offering additional insights that could benefit other space organizations aiming to optimize their own rocket landings.

![](spacex-landing.gif)
<center>Successful Landings</center>

![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-DS0701EN-SkillsNetwork/api/Images/crash.gif)
<center>Failed landings</center>

## Data Collection and Initial Analysis

This project leverages a comprehensive dataset of SpaceX missions to explore the potential of machine learning in predicting Falcon 9 landing success, providing insights into the factors influencing landing rates, such as payload mass, orbit type, and launch site location. By analyzing these elements, machine learning models can support more accurate cost estimations, mission planning, and optimized launch operations, offering a deeper understanding of SpaceX’s competitive advantage in the space sector.

The analysis used launch data from two main sources:

1. **Historical Data (2010-2020)**: Launch data from SpaceX’s history was obtained from existing datasets.
2. **Recent Launches (2020-present)**: Supplemented with web scraping from Wikipedia using BeautifulSoup4.

Exploratory analysis identified several key patterns:
- **Launch Sites**: Cape Canaveral Space Force Station (CCSFS) had the highest number of successful launches, while Kennedy Space Center (KSC) and Vandenberg Space Force Base (VSFB) showed the highest success rates at 77%.
- **Payload Mass**: The highest success rates were observed in launches with payloads between 9,000-16,000 kg.
- **Booster Version**: The Falcon 9 B5 version achieved a perfect 100% landing success rate.

## Machine Learning Models and Performance

Five machine learning models were implemented and evaluated:
- **Logistic Regression**
   Logistic Regression, used for binary classification, fits data to a logistic curve to predict event
   probabilities based on input features, modeling relationships between variables and binary
   outcomes.
- **Decision Tree**
   A Decision Tree is a supervised learning algorithm used for classifying or predicting outcomes by
   branching data into subsets. It creates a tree-like model of decisions, where each node represents a
   feature and each leaf node signifies an outcome. This approach is valued for its clear interpretation
   and handling of categorical data.
- **Random Forest**
   Random Forest is a popular machine learning algorithm known for its robustness and accuracy. It
   builds an ensemble of decision trees and combines their predictions to make more reliable
   classifications or predictions. This approach is effective for a wide range of tasks, making Random
   Forest a versatile choice in machine learning.
- **Stochastic Gradient Descent (SGD)**
   Stochastic Gradient Descent (SGD) is a common optimization technique in machine learning. It
   updates a model's parameters using random training examples, making it efficient for large
   datasets. SGD aims to minimize the loss function iteratively, making it useful for training machine
   learning models with complex optimization tasks.
- **Support Vector Machine (SVM)**
   The Support Vector Machine (SVM) is a powerful machine learning algorithm utilized for classification
   and regression tasks. It is a supervised learning algorithm where a hyperplane in an n-dimensional
   space is found to maximally separate the different classes in the training data. Both linear and
   nonlinear classification tasks, as well as regression tasks, can be handled by SVMs. The algorithm is
   particularly useful when the number of features is large compared to the number of samples, and
   when the data is not linearly separable.

Each model underwent both default testing and GridSearchCV optimization. The Decision Tree model emerged as the top performer, achieving a 96.6% accuracy rate.

### Model Comparison and Highlights

To see how the default models performed and how GridSearchCV affected different Models, let us
summarize what we observed while working with these 5 models.

**Logistic Regression**
- Default Model: Achieved the highest score amongst the other default models.
- GridSearchCV: Did not substantially improve performance; default version outperformed it.

**Random Forest**
- Default Model: Performed nicely with a high score.
- GridSearchCV: Benefited from tuning, reaching higher best score and best estimator rating
as compared to the default.

**Decision Tree**
- Default Model: Performed reasonably well.
- GridSearchCV: Showed improvement with higher best score, best estimator performance,
and better confusion matrix performance.

**SGD (Stochastic Gradient Descent)**
- Default Model: Showed decent performance.
- GridSearchCV: Tuning improved the model, accomplishing higher best score and best
estimator score.

**SVM (Support Vector Machine)**
- Default Model: Showed incredibly lower overall performance.
- GridSearchCV: Slightly improved best score but did no longer significantly affect the best
estimator score or confusion matrix performance.

**Overall**

1. **Logistic Regression**: Reached 93% accuracy with default settings but faced challenges predicting failures accurately.
2. **Random Forest**: Demonstrated strong performance, with optimized accuracy reaching 93.1% and high precision in predicting successes.
3. **Decision Tree**: Excelled with 96.6% accuracy after optimization, marking it as the best-performing model.

## Feature Selection and Insights

This feature selection task was performed to determine if there were any improvements with a
reduced number of features. From the original dataset of 14 features, 5 features were removed,
leaving the dataset with 9 features. The removed features were selected by a data preprocessing
procedure with the 5 least important features removed. The reduced features dataset was then
used to perform the 5 previously used models to determine how feature selection had impacted the
accuracy scores.

**How Features Were Selected for Removal?**

Feature importance was assessed through data preprocessing, where the dataset was evaluated using various methods to identify the top nine features for each model. The counts of these selected features were tallied across all models, with the least frequently appearing features excluded from the analysis. This approach ensured a focus on the most impactful predictors for the task.

Several methods were used to identify critical features:
- Pearson Correlation
- Chi-Squared Analysis
- Recursive Feature Elimination
- Embedded Lasso Regularization
- Embedded Random Forest and LightGBM

Overall, the accuracy was lower with the reduced feature dataset. This suggested that all the
features were important for finding the best model. The only reason why feature removal would
have been performed was to save space for storing the dataset or to reduce the model fitting
computation.

The best non-tuned model was Linear Regression with a score of 0.93 for both datasets, the highest
for untuned models. The best model for a tuned model was a decision tree with a score of almost
0.97 and 0.92 for the original and reduced datasets, respectively.

Interestingly, there was a 3% improvement between untuned and tuned hyperparameters for
Random Forest of the reduced dataset that was not seen in the original dataset.

Precision improved with the reduced dataset for Linear Regression. Perhaps overfitting occurred
with such a simple model with the original dataset. Decision Tree, Random Forest, and Stochastic
Gradient Descent (SGD) all saw a reduction in precision with the reduced dataset, while Support
Vector Machine (SVM) had no changes. These models needed more features to create an accurate
model.

Recall overall stayed the same or reduced, with the exception of the Decision Tree. More features
seemed to be more important for model fitting. The decision tree model might have been fitted with
better features first, allowing a higher recall in the reduced feature dataset.

F1 scores increased for Linear Regression, Decision Tree, and SVM models but decreased for
Random Forest and SGD models. There seemed to be no correlation between the original and
reduced datasets.

## Interactive Visualization of Launch Sites

The project utilized Folium to create interactive maps visualizing SpaceX launch sites, success rates, and proximities to possible launch trajectories. This approach provided geographical insights into launch success and suggested characteristics for optimal launch site locations.

### Geographic Analysis Objectives

1. **Marking Launch Sites**: Visualizing each launch site on an interactive map.
2. **Success and Failure Markers**: Showing successful and failed launches at each site.
3. **Distance Calculations**: Calculating distances from each site to nearby locations, exploring proximities and their impact on success rates.

## Challenges and Lessons Learned

One significant challenge involved handling imbalanced data, with successful landings outnumbering failures. This imbalance impacted the models’ ability to predict failures accurately despite high overall accuracy.

## Practical Applications

The findings from this project can support:
- **Launch Cost Estimation**: Landing success predictions enable more precise cost estimation.
- **Mission Planning and Risk Assessment**: Accurate predictions aid in planning and risk management.
- **Resource Allocation**: Success rates by site allow for optimized resource planning.

## Future Improvements

Although the models performed well, additional improvements could enhance their predictive power:
1. **Increasing Data Balance**: Collecting more data on failed landings could improve prediction accuracy.
2. **Adding Environmental Variables**: Including weather data and other external conditions may improve predictions.
3. **Developing Ensemble Methods**: Combining models could yield even better results.
4. **Incorporating Real-Time Data**: Including telemetry data could enhance dynamic predictions.

## Conclusion

This project underscores the potential of machine learning to address complex aerospace challenges. Predicting landing success can lead to more precise cost estimates and optimized launch site selection, both crucial for making space travel sustainable and economically viable.

This analysis highlights that simpler models, such as the Decision Tree, can sometimes outperform more complex ones when carefully optimized. As space exploration continues to evolve, data science will play a pivotal role in increasing the efficiency and accessibility of future space missions.

