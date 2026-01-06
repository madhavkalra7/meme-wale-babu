from flask import Flask, render_template, request, redirect, url_for
import json
import os

app = Flask(__name__)

# Placeholder user data
user_data = {
    'username': 'MK',
    'email': 'madhavkalra2005@gmail.com',
    'password': 'MADHAVV@@2005'
}

@app.route('/profile', methods=['GET', 'POST'])
def profile():
    if request.method == 'POST':
        if 'update_profile' in request.form:
            # Update profile
            new_username = request.form['username']
            new_email = request.form['email']
            user_data['username'] = new_username
            user_data['email'] = new_email
            # Redirect to profile page
            return redirect(url_for('profile'))
        
        elif 'change_password' in request.form:
            # Change password
            current_password = request.form['current-password']
            new_password = request.form['new-password']
            confirm_password = request.form['confirm-password']
            if current_password == user_data['password'] and new_password == confirm_password:
                user_data['password'] = new_password
                # Redirect to profile page
                return redirect(url_for('profile'))
            else:
                return "Password change failed. Make sure the current password is correct and the new passwords match."
    
    # Render profile page with user data
    return render_template('profile.html', user=user_data)

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        try:
            username = request.form.get('username')
            password = request.form.get('password')
            email = request.form.get('email')

            if not username or not password or not email:
                return "Please fill out all fields."

            user_data = {
                'username': username,
                'password': password,
                'email': email
            }
# Checking if the file exists and creating it if necessary
            file_dir = os.path.join(app.root_path, 'static')
            file_path = os.path.join(file_dir, 'users.json')

            print(f"Directory: {file_dir}")
            print(f"File Path: {file_path}")

            # Check if directory exists
            if not os.path.exists(file_dir):
                print("Directory does not exist. Creating now.")
                os.makedirs(file_dir)
            else:
                print("Directory exists.")

            # Rest of your code...


            print("Received form data:")
            print(user_data)

            if os.path.exists(file_path):
                with open(file_path, 'r') as file:
                    users = json.load(file)
            else:
                users = []

            users.append(user_data)

            with open(file_path, 'w') as file:
                json.dump(users, file, indent=4)

            print("User data saved successfully!")

            return redirect(url_for('login'))

        except Exception as e:
            print(f"Error occurred: {e}")
            return "An error occurred while processing your request."

    return render_template('signup.html')

@app.route('/',methods=['GET'])
def home():
    return render_template('memes.html')

@app.route('/games',methods=['GET'])
def games():
    return render_template('/games/games.html')

@app.route('/login',methods=['GET'])  
def login():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
