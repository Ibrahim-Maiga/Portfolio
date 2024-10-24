---
# An instance of the Experience widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: experience

# This file represents a page section.
headless: false

# Order that this section appears on the page.
weight: 50

title: Paid Projects
subtitle: Work done as a contractor

# Date format for experience
#   Refer to https://wowchemy.com/docs/customization/#date-format
date_format: Jan 2006

# Experiences.
#   Add/remove as many `experience` items below as you like.
#   Required fields are `title`, `company`, and `date_start`.
#   Leave `date_end` empty if it's your current employer.
#   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
experience:
  - title: Optimisation of Digital Advertising Budgets through Statistical Modelling
    company: Marketing Advance
    company_url: 'https://www.tapcast.io/'
    company_logo: mkt_advance
    location: San Francisco, US (Remote)
    date_start: '2022-06-01'
    date_end: '2022-08-01'
    description: |2-
        * Optimized advertising budget allocation through Marketing Mix Modelling, leveraging Meta's [Robyn](https://facebookexperimental.github.io/Robyn/) package.
        * Performed validation and fine-tuning of Marketing Mix models with out-of-sample data.
        *	Estimated ROI for different advertising channels and provided compelling visualizations and reports to stakeholders.
  
  - title: Scripting and Automation for Higher Education Survey
    company: Ministry of Education, Government of Chile
    company_url: 'https://www.mineduc.cl/ministerio/mision/'
    company_logo: Mineduc
    location: Santiago, Chile
    date_start: '2020-05-01'
    date_end: '2020-08-01'
    description: Developed R scripts to automatically create custom forms for each higher education institution, and then consolidated the filled forms into a single, ready-to-use Stata dataset by using Python scripts.
        
  - title: Power BI Dashboards Development
    company: KMA Asset
    company_url: 'https://kma-asset.cl/'
    company_logo: kma
    location: Santiago, Chile
    date_start: '2017-08-01'
    date_end: '2018-01-01'
    description: |2-
        * Developed R scripts to automatically consolidate data from multiple CRM sources.
        * Developed dashboards in Power BI on top of that data to enable analysis and monitoring of business metrics (conversion KPIs, customer acquisition cost, etc).

design:
  background:
    # Name of image in `assets/media/`.
    image: background4.jpg
    # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
    image_darken: 0.15
    #  Options are `cover` (default), `contain`, or `actual` size.
    image_size: cover
    # Options include `left`, `center` (default), or `right`.
    image_position: center
    # Use a fun parallax-like fixed background effect on desktop? true/false
    image_parallax: true
    # Text color (true=light, false=dark, or remove for the dynamic theme color).
    text_color_light: true
  columns: '2'
---
