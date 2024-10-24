---
date: "2021-04-11T00:00:00Z"
external_link: ""
image:
  #caption: Screenshot of the app running
  preview_only: true
  focal_point: Smart
share: false
links:
- icon: image
  icon_pack: fas
  name: See map
  url: /project/covid-lockdowns-gganimate-scl/lockdown_levels_santiago.gif
- icon: github 
  icon_pack: fab
  name: See code
  url: https://github.com/franciscoyira/covid_plots/blob/main/animated_map_lockdown_levels.R
#slides: example
summary: Map created with `gganimate` that shows how COVID restrictions and lockdown severity evolved in Santiago (Chile) since the outbreak of the COVID-19 pandemic.
tags:
- R
- Visualization
- COVID
title: Animated map of COVID restrictions in Santiago (2020-2022)
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""
---

![Animated map of COVID lockdown levels in municipalities of Santiago urban area, from 2020 to 2022](lockdown_levels_santiago.gif)

A map created with `gganimate` showing how COVID restrictions and lockdown severity evolved in Santiago (Chile) since the outbreak of the COVID-19 pandemic.

The data was retrieved from the [official COVID data repository of the Chilean government](https://github.com/MinCiencia/Datos-COVID19/), while the geographic layout (geometries) comes from the [`sinimr` R package](https://github.com/robsalasco/sinimr).

Each frame of the animated plot represents a day, and the colours represent the levels of the four-tier restriction system implemented in Chile between 2020 and 2022 as a response to the pandemic.