import requests
from .settings import GOOGLE_API_KEY, GOOGLE_CSE_ID



def search_google(query):
    url = f"https://www.googleapis.com/customsearch/v1?q={query}&key={GOOGLE_API_KEY}&cx={GOOGLE_CSE_ID}"

    response = requests.get(url)
    results = response.json()
    return results
