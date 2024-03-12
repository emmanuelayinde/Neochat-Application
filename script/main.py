from fastapi import FastAPI

app = FastAPI()

# Define your FastAPI routes here
@app.get("/")
def read_root():
    return {"message": "Hello, Kafka with FastAPI!"}
