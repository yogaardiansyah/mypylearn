from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import subprocess

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('execute_code')
def execute_code(data):
    code = data.get('code', '')
    try:
        result = subprocess.run(
            ['python3', '-c', code], capture_output=True, text=True, check=True
        )
        output = result.stdout
    except subprocess.CalledProcessError as e:
        output = e.stderr or str(e)
    
    emit('execution_result', {'output': output})

if __name__ == '__main__':
    socketio.run(app, debug=True)
