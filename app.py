from flask import Flask, render_template, request, jsonify
import scheduler

app = Flask(__name__)

# Initial checklist items as an array
checklist_items = scheduler.prereq_chain.keys()

@app.route('/')
def index():
    return render_template('index.html', checklist_items=checklist_items)

@app.route('/process_data', methods=['POST'])
def process_data():
    selected_items = request.json['selected_items']

    # Call your Python program with selected_items and get the result
    result = process_items(selected_items)
    
    return jsonify(result=result)

def process_items(selected_items):
    # Your Python program logic here
    # Example: concatenate selected items into a comma-separated string
    result = ', '.join(scheduler.courseVisualizer(selected_items))
    return result

if __name__ == '__main__':
    app.run(debug=True)