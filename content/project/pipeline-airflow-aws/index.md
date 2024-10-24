---
date: "2024-06-10T00:00:00Z"
#external_link: "https://www.franciscoyira.com/categories/causal-inference/"
image:
  #caption: Photo by rawpixel on Unsplash
  focal_point: Smart
share: false
links:
- icon: arrow-up-right-from-square
  icon_pack: fas
  name: See blog post
  url: https://www.franciscoyira.com/post/airflow-pipeline-with-aws-data-cloud-part-3/
- icon: github
  icon_pack: fab
  name: See on GitHub
  url: https://github.com/franciscoyira/aws_airflow_tutorial
#slides: example
# The summary is what appears on the home page
summary: End-to-end data pipeline with Apache Airflow that interacts with AWS services such as RDS and S3 and makes the processed data available on PostgreSQL.
tags:
- Programming
- Python
- Featured
- Data Engineering
- Airflow
title: Data Pipeline on Apache Airflow with AWS Integration
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""
---

Development of an end-to-end ETL process with **Apache Airflow** that interfaces with **AWS services** such as S3 (bucket storage) and RDS (relational databases) to transform data into a format that is more suitable for dashboards and make it available on **PostgreSQL**.

The project included:

- Setting up the Airflow environment with **Docker** (on Linux).
- Provisioning and configuring AWS services with the **AWS Command Line Interface**.
- Configuring the Airflow environment to interact with the AWS services.
- Writing **Python and SQL** scripts to perform the tasks in the pipeline.
- Developing the **Airflow DAG** (Directed Acyclic Graph) to define the tasks and their dependencies, including handling of edge cases (e.g. there is no new data on S3 when the pipeline runs).

## The Data Pipeline

1. Reads CSV data automatically from an **S3 bucket**, using the *Last Modified Date* of the files to determine whether they're new (and process them) or not (and skip them).
2. Performs relevant transformations (cleaning and pivoting) with `pandas` to make the data more suitable for dashboards and reports.
3. **UPSERTS** the results through SQL into a **PostgreSQL database** on Amazon RDS. *UPSERT* means that data corresponding to new records will be appended to the table, whereas data about existing records will overwrite or update the previous information.

## Blog Posts

![](blogpost.png)

Along with the project code, I wrote a series of detailed tutorials explaining the use of Airflow, Docker, and the AWS Command Line, as well as the setup of the pipeline itself.

- [A Beginner’s Introduction to Airflow and Docker](https://www.franciscoyira.com/post/data-pipelines-cloud-intro-airflow-docker/)
- [Using Amazon Web Services with the Command Line](https://www.franciscoyira.com/post/aws-command-line-data-pipelines-cloud-part-2/)
- [Building an Airflow Pipeline That Talks to AWS](https://www.franciscoyira.com/post/airflow-pipeline-with-aws-data-cloud-part-3/)
