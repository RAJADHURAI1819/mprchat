import requests
import time
from flask import Flask, request, jsonify
from flask_cors import CORS

# Flask app initialization
app = Flask(__name__)
CORS(app)
API_URL = "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill"
headers = {"Authorization": f"Bearer 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"}

# def chat_with_hf_api(user_input):
#     payload = {"inputs": user_input}
#     response = requests.post(API_URL, headers=headers, json=payload)
#     return response.json()
#
# while True:
#     user_input = input("You: ")
#     if user_input.lower() == "exit":
#         print("AI: Bye!")
#         break
#     reply = chat_with_hf_api(user_input)
#     print(f"AI: {reply}")
def chat_with_hf_api(user_input):
    payload = {"inputs": user_input}
    while True:
        response = requests.post(API_URL, headers=headers, json=payload)
        data = response.json()

        # Check if the model is loading
        if "error" in data and "loading" in data["error"]:
            print("Model is loading. Retrying in 20 seconds...")
            time.sleep(20)
        else:
            return data


@app.route("/chat", methods=["POST"])
def chat():
    try:
        # Get the user's input from the POST request
        user_input = request.json.get("input", "")
        if not user_input:
            return jsonify({"error": "No input provided"}), 400
        response = chat_with_hf_api(user_input)
        return response[0]['generated_text']
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Run the Flask app
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
