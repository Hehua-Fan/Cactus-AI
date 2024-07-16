# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel
# from .query_generator import generate_search_query
# from .search_engine import search_google

# app = FastAPI()

# class SearchRequest(BaseModel):
#     prompt: str

# @app.post("/chat")
# def chat(request: SearchRequest):
#     try:
#         search_query = generate_search_query(request.prompt)
#         results = search_google(search_query)
#         return results
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

from flask import Flask
app = Flask(__name__)

@app.route('/chat', methods=['GET'])
def hello_world():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(host="192.168.1.115", port=5328)