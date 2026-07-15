Things I think can be improved and be corrected (I checked only the Desktop version)

# Nav:

- Firstly, the logo currently has the whole image with some additional whitespaces. This image was shared by Mayela (she didn't share it properly and hence like that.). So that image is just the exact content which needs to be cropped. Can you do it?
- Like how we have beewax overflowing in the logo, can we have the similar effect for the selected nav time instead of just a plain border?
- In desktop, the aftercare button when click persists the border/outline.
- The Book Now button's label/text is aligned vertically centered. The font should be more prominent. So use the stylish font we used.

# Home:

- Update the logo with the improvement shared above.
- "Book your appointment" CTA when hovered, also changes the color of the text and it blends with the button's background (must be an issue with the component)
- The Book Now button in cta-banner is not standing out because of the same color background.
- Add this to main:

```
    display: flex;
    flex-direction: column;
    gap: 80px;
```

- make sure the mobile version is not breaking.
- Remove the top and bottom padding for .hero
- In hero-body, add the hyperlink to the Locations page on the address.

# Footer:

- Remove the QR code image
- Add Instagram logo on the left side of the ID.
- Split the Quick link to 2 columns.
- In Contact Us, add a mini map below the actual address

# FAQ:

- Remove the bottom margin for .faq-answer p
- Remove the focus outline for the question
- Make the question bold
- Where are you located question should have the link to the Location page.
