---
# An instance of the Contact widget.
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 80

title: Contact Me
subtitle: "Let's connect! I actively monitor this form and welcome new project opportunities."

content:
  # Automatically link email and phone or display as text?
  autolink: true

  # Email form provider
  form:
    provider: netlify
    formspree:
      id: ""
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: true

  # Contact details (edit or remove options as required)
  address:
    city: Toronto
    country: Canada
    country_code: CA
    region: Ontario
    postcode: 'M9P 3S7'
  coordinates:
    latitude: '43.7030'
    longitude: '-79.5600'
  
office_hours:
  - 'Monday to Thursday 8:00 a.m. to 4:00 p.m.'
  - 'Friday 7:00 a.m. to 12:00 p.m.'

appointment_url: 'https://calendly.com/imaig090/'
contact_links:
  - icon: envelope
    icon_pack: fas
    name: E-mail me
    link: 'mailto:imaig090@gmail.com'

design:
  columns: '2'
  
---
