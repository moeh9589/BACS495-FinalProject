This project was creating using ReactJS connected to an ExpressJS API and a MongoDB backend

Once in the "bacs495-finalproject" directory, npm start can be used to start the react side of the app. This part is set to run on port 3000.
To run the API part of the app, navigate into the API folder which is inside the bacs495-finalproject directory. From there npm start can be run to start it. This part is set to run on port 9000.

The mongodb connection can be found on line 24 of the 'www' file located in the bin folder in the API folder.

One bug that I couldn't resolve was within the login. When a user enters wrong information, even if the system checks for it, when the user tries to submit the information again, the screen blanks out and the app would have to be restarted. So it is suggested that the correct login be entered when logging in.

Users have the ability to register and login. Once registered and logged in correctly, the app generates a token which is stored in system storage so the user doesn't have to enter their information again if they somehow end up on the login page again. Upon starting the app, the user is required to register or login, and the token won't be generated unless the user is logged in. The home page will not load until the token is generated. Once on the home page the user has the ability to view all previously asked questions and can ask their own using the button that is at the top. Inside each question, there is also space for the user to answer the question. Once the user answers the question, the previous answer gets overwritten and their answer will appear inside the answer space upon the refreshing of the page. There is also a voting button at the bottom of each question. The page does have to be refreshed in order for the current votes to be updated. Each question is dispayed in its own card, styled appropriately so each question is distinct from the others. Long questions and long answers both can be handled - the card allows for scrolling if the current space would be exceeded.
