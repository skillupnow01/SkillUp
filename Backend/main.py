from flask import Flask, request, render_template, redirect, url_for, session, flash, jsonify
import pymongo
from werkzeug.security import check_password_hash, generate_password_hash
from flask_cors import CORS
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)
app.secret_key = 'SkillUpNow$01'  # Replace with a strong secret key

# Configuration of mongodb
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client['credentials']
users_collection = db['SkillUp']

@app.route('/api/SignUp', methods=['GET', 'POST'])
def SignUpForm():
    if request.method == 'POST':
        
        try:
            data = request.get_json()  # Get JSON data from the request body
            email = data.get('email')
            password = data.get('password')
        except Exception as e:
            print(f"Error parsing JSON: {e}")
            return jsonify({'message': 'Invalid JSON format in request.', 'status': 'error'}), 400

        # if not email or not password:
        #     return jsonify({'message': 'Please fill in all the fields.', 'status': 'error'}), 400

        existing_user = users_collection.find_one({"email": email})
        if existing_user:
            return jsonify({'message': 'Email already registered! Try logging in.', 'status': 'error'}), 409

        hashed_password = generate_password_hash(password)
        try:
            users_collection.insert_one({
                "email": email,
                "password": hashed_password
            })
            return jsonify({'message': 'Account created successfully! You can now log in.', 'status': 'success'}), 201
        except pymongo.errors.PyMongoError as e:
            print(f"MongoDB Error: {e}")
            return jsonify({'message': f'Error during registration: {str(e)}', 'status': 'error'}), 500

    return render_template('signup.html')

@app.route('/api/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        
        try:
            data = request.get_json()  # Get JSON data from the request body
            email = data.get('email')
            password = data.get('password')
        except Exception as e:
            print(f"Error parsing JSON: {e}")
            return jsonify({'message': 'Invalid JSON format in request.', 'status': 'error'}), 400

        user = users_collection.find_one({"email": email})

        if user and check_password_hash(user['password'], password):
            session['user_id'] = str(user['_id'])
            return jsonify({'message': 'Login successful!', 'status': 'success'}), 200
        else:
            return jsonify({'message': 'Invalid email or password.', 'status': 'error'}), 401

    return render_template('login.html')

if __name__ == "__main__":
    app.run(debug=True)