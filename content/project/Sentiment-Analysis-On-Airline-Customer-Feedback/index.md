---
date: "2024-06-05T00:00:00Z"
#external_link: ""
image:
  #
  focal_point: Smart
share: false
links:
- icon: arrow-up-right-from-square
  icon_pack: fas
  name: See presentation
  url: https://docs.google.com/presentation/d/1m6Ce7XWYDPAEOkxQsIoKydP45RgdNvog
- icon: github
  icon_pack: fab
  name: See on GitHub
  url: https://github.com/Ibrahim-Maiga/Sentiment-Analysis-for-Airline-Reviews
#slides: example
# The summary is what appears on the home page
summary: This project focuses on designing and implementing a deep learning model from scratch using Keras and LSTM networks to analyze customer sentiment in the airline industry. The model achieves an accuracy of 86.39% in predicting whether a customer review is positive or negative, based on the likelihood of recommendation. It includes a comprehensive text preprocessing pipeline and features an LSTM-based architecture enhanced with batch normalization and dropout layers for regularization. Hyperparameter tuning is conducted through random search.
tags:
- Artificial Intelligence
- Analytics
- Sentiment Analysis
- TensorFlow
- Featured

title: "From Text to Insight: A Comprehensive Guide to Model Design and Sentiment Analysis"
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""
---

## Introduction

In the age of social media and online reviews, sentiment analysis has become essential for understanding public opinion. This NLP technique classifies sentiments in text as positive, negative, or neutral and is especially valuable for businesses to monitor brand reputation, gauge customer satisfaction, and assess market trends.

In this blog post, we’ll explore a step-by-step guide to conducting sentiment analysis using a machine learning approach. This includes data loading, preprocessing, model training, evaluation, and insights derived from airline customer reviews. Let's get started!

## 1. Understanding the Sentiment Analysis Process

Sentiment analysis typically involves classifying text into distinct categories. For this project, we’ll perform binary classification to distinguish between positive and negative sentiments. The complete process includes:
1. Loading and cleaning the dataset.
2. Conducting exploratory data analysis (EDA).
3. Transforming text data into numerical features.
4. Training a machine learning model.
5. Evaluating the model’s performance.

Each step is critical for building a reliable sentiment analysis pipeline.

## 2. Data Loading and Initial Exploration

We begin by loading a dataset containing 23,171 reviews with multiple attributes, including customer sentiment labels. Initial data exploration ensures data integrity and familiarizes us with its structure.

### Key Steps in Initial Exploration:
- **Checking for Missing Values**: Identifying and handling empty text entries or undefined labels to maintain data quality.
- **Data Overview**: Analyzing the distribution of features to understand their composition and relevance.

A clean dataset is essential for accurate sentiment analysis, and this step sets the foundation for further preprocessing.

## 3. Data Preprocessing: Cleaning the Text Data

Text data, especially from user-generated sources like reviews, can be noisy. Effective preprocessing ensures that text is standardized and irrelevant elements are removed.

### Preprocessing Techniques:
- **Lowercasing**: Standardizes text by converting all words to lowercase.
- **Removing Special Characters**: Eliminates punctuation, symbols, and emojis to focus on core words.
- **Tokenizing**: Splits sentences into individual words (tokens) for word-by-word analysis.
- **Removing Stopwords**: Filters out common words such as "the," "is," and "and" to reduce noise and improve text relevancy.

The cleaned data provides a consistent format for model training and meaningful feature extraction.

## 4. Exploratory Data Analysis (EDA)

EDA helps reveal data characteristics, enabling better decision-making during model training.

### Key EDA Steps:
- **Sentiment Distribution Analysis**: Visualizes the proportion of positive vs. negative samples to identify potential data imbalances.
- **Word Frequency Analysis**: Identifies commonly used words within each sentiment class, offering insights into key differentiators for positive and negative sentiments.

These insights are crucial for understanding the dataset’s structure and ensuring it aligns with the analysis goals.

## 5. Feature Engineering with TF-IDF

To train a machine learning model, text data must be transformed into numerical features. **TF-IDF (Term Frequency-Inverse Document Frequency)** is a popular method that highlights word importance in the context of a document:

- **Term Frequency (TF)**: Counts how frequently a word appears in a document.
- **Inverse Document Frequency (IDF)**: Downscales words that appear frequently across all documents to emphasize unique words.

Limiting the transformation to the top 5000 words maintains efficiency and retains essential features for training.

## 6. Model Training

With the numerical features ready, we can train a custom neural network using Keras. The model architecture was designed from scratch and includes:

### Model Architecture Overview:
- **Input Layer**: Embedding layer with a vocabulary size of 5000, embedding vector size of 128, and sequence length of 100.
- **LSTM Layers**: Two LSTM layers, with the first having 128 units and `return_sequences=True` and the second with 64 units.
- **Dense Layers**: Three dense layers (32, 16, and 1 unit) with ReLU activation for the first two and sigmoid activation for the output.
- **Regularization**: BatchNormalization and dropout layers (0.2 rate) are used after each major layer to prevent overfitting.
- **Model Compilation**: The model is compiled using the Adam optimizer (`learning_rate=0.001`) and `binary_crossentropy` as the loss function, with accuracy as the evaluation metric.

### Model Training Steps:
1. **Dataset Splitting**: The data is split into an 80% training set and a 20% test set.
2. **Training the Model**: The model learns the patterns from the training data.
3. **Hyperparameter Tuning**: Random search is employed to optimize hyperparameters for better performance.

## 7. Evaluating Model Performance

Model performance is evaluated using the following metrics:
- **Accuracy**: Indicates the percentage of correctly classified samples.
- **Precision and Recall**: Precision checks the correctness of positive predictions, while recall measures how well actual positives are identified.
- **F1-Score**: Balances precision and recall, providing a comprehensive metric for imbalanced data.
- **Confusion Matrix**: Visualizes true positives, true negatives, false positives, and false negatives to identify error types.

### Benchmarking Results:
- **Accuracy Improvement**: From an initial 84.79% to 86.39% after tuning.
- **Loss Reduction**: Decreased from 0.5018 to 0.3843, reflecting improved prediction accuracy.

## 8. Ranking Airlines by Customer Recommendations

Using the "Recommended" column, we aggregated positive recommendations to rank airlines. Here’s how we ranked the top 20 airlines:

```python
# Group by 'Airline Name' and aggregate the sum of 'Recommended' column
airline_recommendations = df.groupby('Airline Name')['Recommended'].sum().reset_index()

# Rename the columns for better understanding
airline_recommendations.columns = ['Airline Name', 'Count of Recommended (yes=1)']

# Sort the airlines by the count of recommendations in descending order
ranked_airlines = airline_recommendations.sort_values(by='Count of Recommended (yes=1)', ascending=False).reset_index(drop=True)

# Display the ranked airlines
ranked_airlines.head(20)
```

### Insights from the Analysis:
- **High Customer Satisfaction**: Airlines like China Southern Airlines and Hainan Airlines topped the list with the highest positive recommendations.
- **Regional Diversity**: The rankings included airlines from various regions, showcasing global recognition for excellent service.

## 9. Resources and Environment

### Environment Details:
- **Platform**: Google Colab
- **Hardware**: TPU V2
- **RAM**: 2.79 GB
- **Disk**: 27.47 GB

Using TPU V2 accelerated training and allowed for efficient processing of a large dataset with complex deep learning models.

## 10. Future Work

### Areas for Further Improvement:
- **Advanced Hyperparameter Tuning**: Experiment with techniques like Grid Search or Bayesian Optimization.
- **Data Augmentation**: Increase training data diversity to improve model generalization.
- **Explainability**: Use SHAP values to interpret the model’s predictions.
- **Granular Analysis**: Investigate specific text features that drive sentiment.
- **Improvement Strategies for Airlines**: Use insights to suggest enhancements for airlines with lower rankings.

## 11. Lessons Learned

### Key Takeaways:
- **Importance of Hyperparameter Tuning**: This step significantly boosted model performance.
- **Model Evaluation Matters**: Regularly assess models using multiple metrics to understand their strengths and weaknesses.
- **Resource Management**: Efficient use of computational resources, like TPUs, can accelerate deep learning workflows.
- **Customer Service Excellence**: Top-ranked airlines share traits like strong customer service and consistent positive reviews.
- **Power of Reviews**: Customer feedback plays a crucial role in brand reputation.

## Conclusion

This sentiment analysis project showcases how deep learning and NLP techniques can turn raw text data into actionable insights. With proper data preparation, EDA, feature engineering, model training, and evaluation, this approach provides a structured method for future projects. Experimenting with advanced models and larger datasets can further refine sentiment analysis capabilities, benefiting businesses, researchers, and data enthusiasts.