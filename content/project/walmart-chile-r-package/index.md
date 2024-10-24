---
date: "2019-09-15T00:00:00Z"
external_link: ""
image:
  #caption: Screenshot of the app running
  preview_only: false
  focal_point: Smart
share: false
links:
- icon: file-powerpoint
  icon_pack: fas
  name: See presentation
  url: https://1drv.ms/b/s!AszM2hDRx-RZn6dnZ__u1G4EEQy2ow
#slides: example
summary: R package to accelerate and streamline the delivery of analyses and data products at Walmart, inspired by the successful experience of Airbnb with their `Rbnb` internal package.
tags:
- R
- Featured
title: Internal R package for Walmart Chile
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""
---

While working at Walmart Chile, I led the development of an internal R package to accelerate and streamline the delivery of analyses and data products, inspired by [the successful experience of the Airbnb data team with their `Rbnb` internal package](https://medium.com/airbnb-engineering/using-r-packages-and-education-to-scale-data-science-at-airbnb-906faa58e12d).

The benefits that our package provided include the following:

- Simplifying the connection to our Data Warehouse from R/RStudio via helper R functions (e.g. `connect_to_dwh()`). These functions leveraged the `usethis` R package to provide step-by-step guidance when the connection was set up for the first time (for example, explaining how to save the credentials as environment variables).

- Abstracting away the complexity of long and frequent SQL queries through R wrappers that exposed only the relevant parameters (e.g. date ranges and other filters) as function arguments. This also had the benefit of putting our most used queries under version control and promoting querying best practices: if you were new to our team you just executed, let's say, the function `get_sales_by_store(q = "2019Q1")` and you were already using the best-known SQL query to get the sales by store.

- Accelerating the delivery of periodic and time-consuming reports that were too complex to be implemented as Tableau dashboards, thanks to the implementation of R Markdown templates. Also, by using PowerPoint as output (a nice feature of R Markdown), we made it easy for our internal business customers to make changes on top of these reports.

The code itself can't be shared since the package was internal, but here are the slides (in Spanish) of a public talk we gave at the 2019 Latin R conference explaining its features and motivation:

<iframe src="https://onedrive.live.com/embed?cid=59E4C7D110DACCCC&resid=59E4C7D110DACCCC%21512998&authkey=AGaA2g1iskivBy8&em=2" width="700" height="550" frameborder="0" scrolling="no"></iframe>