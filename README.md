# Movie Recommender System Including Sentiment Analysis

![Python](https://img.shields.io/badge/Python-3.11-red)
![Framework](https://img.shields.io/badge/Framework-Flask-blue)
![Frontend](https://img.shields.io/badge/Frontend-HTML/CSS/JS-green)
![API](https://img.shields.io/badge/API-TMDB-purple)

The Movie Recommender System suggests films akin to the user's preferences and evaluates sentiment from their reviews of the selected movie.

Movie details are obtained through the TMDB API (https://www.themoviedb.org/documentation/api) and conducted web scraping to retrieve user reviews from the IMDB site using beautifulsoup4 and subsequently performed sentiment analysis on these reviews.

## Retrieving the API key

Create an account in https://www.themoviedb.org/ and click on the `API` section in your account settings and fill all the details to apply for API key. If you are asked for the website URL, just give "NA" if you don't have one and finally you will get an API key when approved.

## How to run the project?

1. Clone or download this repository to your local machine.
2. Install all the libraries mentioned in the requirements.txt file with the command `pip install -r requirements.txt`
3. Get your API key from https://www.themoviedb.org/.
4. Replace YOUR_API_KEY in `static/recommend.js` file and the respective ipynb files and hit save.
5. Open your terminal/command prompt from your project directory and run the file `main.py` by executing the command `python main.py`.
6. Go to your browser and type `http://127.0.0.1:5000/` in the address bar.

### Sources of the datasets

1. [IMDB 5000 Movie Dataset](https://www.kaggle.com/carolzhangdc/imdb-5000-movie-dataset)
2. [The Movies Dataset](https://www.kaggle.com/rounakbanik/the-movies-dataset)
3. [List of movies in 2018](https://en.wikipedia.org/wiki/List_of_American_films_of_2018)
4. [List of movies in 2019](https://en.wikipedia.org/wiki/List_of_American_films_of_2019)
5. [List of movies in 2020](https://en.wikipedia.org/wiki/List_of_American_films_of_2020)
6. [List of movies in 2021](https://en.wikipedia.org/wiki/List_of_American_films_of_2021)
7. [List of movies in 2022](https://en.wikipedia.org/wiki/List_of_American_films_of_2022)
8. [List of movies in 2023](https://en.wikipedia.org/wiki/List_of_American_films_of_2023)
