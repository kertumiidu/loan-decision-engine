# Getting Started


## Starting project

In the project directory, you can run:
### `npm install`

### `npm start`

It runs the app in the development mode.
It's acceble on [http://localhost:3000](http://localhost:3000) 

## Thaoughts and changes I would make
As homework time is restricted, I build just simple UI that does the job. But really I see many changes that could make it more user-friendly:
* My first thought was to make sliders for loan amount and period. Unfortunately I don't have too much experience doing custom css and UI elements, so I kept easy text inputs. Later I started thinking that as a user slider maybe just visually cool tool, because usually I would apply for specific sum. So my thought on this is a slider with text input possibility or just text box. 
* All inputs should be validated in UI and user should be informed. At the moment I didn't do validations. In my mind it would be most efficient to make custom input elements that have needed props for code to remain readable. Also with text input I struggled with validation during onChange. When UI is dealing with input validation, then it seems that correct way to validate is after input is entered. Ideally I wanted to change input box color and show an error message beneath the box.
* Result view shows currently only offer that is applicable. Ideally it could be more informative, saying what was the application and how the offer is modified according to score rating. In case offer is positive there could be proceeding option. In case of negative feedback, it would be nice to give some more explanation and redirect to customer service.
