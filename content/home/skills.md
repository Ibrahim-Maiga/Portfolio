---
# An instance of the Featurette widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: featurette

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 20

title: Skills
subtitle:

# Showcase personal skills or business features.
# - Add/remove as many `feature` blocks below as you like.
# - For available icons, see: https://wowchemy.com/docs/page-builder/#icons
feature:
  - icon: r-project
    icon_pack: fab
    name: R
  - icon: python
    icon_pack: fab
    name: Python
  - icon: database
    icon_pack: fas
    name: Advanced SQL
  - icon: chart-line
    icon_pack: fas
    name: Visualization and Dashboards
  - icon: vial
    icon_pack: fas
    name: Causal Inference and Experimentation
  - icon: microchip
    icon_pack: fas
    name: Machine Learning
  - icon: comments
    icon_pack: fas
    name: Effective Communication with Stakeholders
  - icon: aws
    icon_pack: fab
    name: Amazon Web Services
  - icon: terminal
    icon_pack: fas
    name: Git and Command Line
# Uncomment to use emoji icons.
#- icon: ":smile:"
#  icon_pack: "emoji"
#  name: "Emojiness"
#  description: "100%"

# Uncomment to use custom SVG icons.
# Place your custom SVG icon in `assets/media/icons/`.
# Reference the SVG icon name (without `.svg` extension) in the `icon` field.
# For example, reference `assets/media/icons/xyz.svg` as `icon: 'xyz'`
#- icon: "your-custom-icon-name"
#  icon_pack: "custom"
#  name: "Surfing"
#  description: "90%"

design:
  background:
    # Name of image in `assets/media/`.
    image: 2declan-sun-F6M9_IxQBJw-unsplash.jpg
    # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
    image_darken: 0.6
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
