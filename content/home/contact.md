---
# An instance of the Contact widget.
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 80

title: Contact Me
subtitle: Thank you for visiting! I would love to hear from you, whether you have a project in mind, questions about my work, or just want to say hello. Please feel free to reach out using this form, and I will respond as soon as possible. I look forward to connecting with you!

content:
  # Automatically link email and phone or display as text?
  autolink: true

  # Email form provider
  form:
    provider: netlify
    formspree:
      id:
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: true

  # Contact details (edit or remove options as required)
  #email: 
  #phone: 
  address:
    city: Toronto
    country: Canada
    country_code: CA
    region: Ontario, Canada
#    postcode: 'M9P 3S7'
#  coordinates:
#  latitude: '43.7030'
#  longitude: '-79.5600'
#  directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
# office_hours:
#  - 'Monday to Thursday 8:00 a.m. to 4:00 p.m.'
#  - 'Friday 07:00 a.m. to 12:00 p.m.'
  appointment_url: 'https://calendly.com/imaig090/'
  contact_links:
    - icon: envelope
      icon_pack: fas
      name: E-mail me 
      link: 'mailto:imaig090@gmail.com'

design:
  background:
    # Name of image in `assets/media/`.
    image: 1hugo-sousa-BghGseQbAkA-unsplash.jpg
    # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
    image_darken: 0.8
    #  Options are `cover` (default), `contain`, or `actual` size.
    image_size: cover
    # Options include `left`, `center` (default), or `right`.
    image_position: center
    # Use a fun parallax-like fixed background effect on desktop? true/false
    image_parallax: true
    # Text color (true=light, false=dark, or remove for the dynamic theme color).
    text_color_light: false
  columns: '2'
--- 
