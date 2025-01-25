from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(_name_)
CORS(app)  # Enable CORS for frontend requests

# Load dress data from JSON file
with open('dresses.json', 'r') as file:
    dresses = json.load(file)

# Home route to check API status
@app.route('/')
def home():
    return jsonify({"message": "Welcome to Dress Finder API"}), 200

# Get all dresses
@app.route('/dresses', methods=['GET'])
def get_dresses():
    return jsonify(dresses), 200

# Search dresses by description (case-insensitive search)
@app.route('/search', methods=['GET'])
def search_dress():
    query = request.args.get('q', '').lower().strip()

    if not query:
        return jsonify({"error": "Please provide a dress description"}), 400

    filtered_dresses = [dress for dress in dresses if query in dress['description'].lower()]

    if filtered_dresses:
        return jsonify(filtered_dresses), 200
    else:
        return jsonify({"message": "No dresses found matching your description"}), 404

# Add a new dress (POST request)
@app.route('/add-dress', methods=['POST'])
def add_dress():
    data = request.get_json()
    
    if not data or 'description' not in data or 'image' not in data or 'price' not in data:
        return jsonify({"error": "Missing required fields"}), 400
    
    new_dress = {
        "id": len(dresses) + 1,
        "description": data['description'],
        "image": data['image'],
        "price": data['price']
    }
    dresses.append(new_dress)

    # Save updated data to file
    with open('dresses.json', 'w') as file:
        json.dump(dresses, file, indent=4)
    
    return jsonify({"message": "Dress added successfully", "dress": new_dress}), 201

# Run the Flask server
if _name_ == '_main_':
    app.run(debug=True)