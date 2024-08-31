# Smart Mess Authentication System
A single mess authentication system which can track and validate students' entry in the mess, generate mess bills based on it, analyze trends on each day avoiding wastage of food.


### Tech Stack
- React
- Javascript
- Django
- Django Rest Framework
- PostgreSQL

### Setup

## Frontend
Here are the steps you need to follow to install the dependencies.

- clone the repository.
- After that **cd** into the frontend directory then run this command to install all the dependencies
- Add .env
- VITE_API_URL="YOUR_API_ENDPOINT_URL"
- npm run dev


## Backend
- Create a virtual environment `python3 -m venv .venv`
- Activate virtual environment `source .venv/bin/activate`
- Add `.env.dev` file
- Build `docker-compose build`

### Run Server
- Activate virtual environment `source .venv/bin/activate`
- Run `docker-compose up`