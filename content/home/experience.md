---
# An instance of the Experience widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: experience

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 40

title: Work Experience
subtitle:

# Date format for experience
#   Refer to https://wowchemy.com/docs/customization/#date-format
date_format: Jan 2006

# Experiences.
#   Add/remove as many `experience` items below as you like.
#   Required fields are `title`, `company`, and `date_start`.
#   Leave `date_end` empty if it's your current employer.
#   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
experience:
  - title: Data Scientist
    company: MACH (Fintech)
    company_url: 'https://www.somosmach.com/'
    company_logo: mach
    location: Santiago, Chile
    date_start: '2022-08-30'
    date_end: '2024-01-03'
    description: |2-
        * Enabled targeting of high-potential app users by integrating PySpark machine learning models with CRM data through SQL pipelines on Apache Airflow.
        *  Increased marketing spend efficiency by conceiving high-ROI initiatives through ideation and A/B testing process, leveraging Amplitude reports and agile methodologies.
        * Proposed and implemented an experimentation framework for A/B testing best practices.
        * Trained predictive machine learning models using AWS cloud infrastructure (SageMaker, Athena and Glue) and PySpark.
        * Assessed ROI of referral campaigns via advanced causal inference techniques when A/B Testing was not feasible.
        * Developed user-friendly dashboards on AWS QuickSight to enable C-level executives to conduct simulations and what-if analysis for promotional campaigns on our app home screen.

  - title: Data Scientist
    company: WOM (Telecommunications)
    company_url: 'https://novator.co.uk/portfolio/wom/'
    company_logo: logo-wom
    location: Santiago, Chile
    date_start: '2020-01-01'
    date_end: '2021-10-18'
    description: |2-
        * Guided deployment of new network infrastructure, identifying areas where upgrades would reduce churn the most.
        * Tracked network deployment results via geospatial dashboards blending network KQIs with churn and NPS metrics.
        * Boosted conversion of telesales by developing purchase propensity predictive models with LightGBM.
        
  - title: Data Scientist
    company: Walmart Chile (Retail)
    company_url: 'https://corporate.walmart.com/about/chile'
    company_logo: Walmart_logo
    location: Santiago, Chile
    date_start: '2018-10-17'
    date_end: '2020-01-01'
    description: |2-
        * Developed data transformation processes and implemented machine learning models that allowed the deployment of a personalized marketing strategy for the company's most important local brand. This included the development of churn models and clustering on transactional data.
      * Led the development of an internal R package aimed at streamlining processes and accelerating deliveries in our area (find out more [here](https://cv.franciscoyira.com/project/walmart-chile-r-package/)).
      * Led the impact evaluation of the personalised marketing project by designing, implementing, and supervising A/B tests, in close collaboration with the CRM Ops team. This included devising solutions for increasing statistical power in contexts of small treatment effects.
      * Introduced the use of version control and unit tests to the team.
    
  - title: Data Analyst
    company: Walmart Chile (Retail)
    company_url: 'https://corporate.walmart.com/about/chile'
    company_logo: Walmart_logo
    location: Santiago, Chile
    date_start: '2017-11-17'
    date_end: '2018-10-01'
    description: |2-
        * Provided data-driven insights to marketing and merchants, leveraging econometrics and clear storytelling.
      * Automated complex, ad-hoc reports through R Markdown and Tableau, increasing throughput of our team.
      * Assessed the impact of key, C-level decisions via causal inference techniques such as Difference in Differences.

design:
  # background:
  #   # Name of image in `assets/media/`.
  #   image: background4.jpg
  #   # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
  #   image_darken: 0.2
  #   #  Options are `cover` (default), `contain`, or `actual` size.
  #   image_size: cover
  #   # Options include `left`, `center` (default), or `right`.
  #   image_position: center
  #   # Use a fun parallax-like fixed background effect on desktop? true/false
  #   image_parallax: true
  #   # Text color (true=light, false=dark, or remove for the dynamic theme color).
  #   text_color_light: true
  columns: '2'
---
