import os
from datetime import datetime

def create_folder_name_with_date():
    # Get the current date
    today = datetime.now()
    
    # Format the date as "YYYY-Month-DD"
    folder_name = today.strftime("%Y-%B-%d")
    
    return folder_name

def create_files_in_folder(folder_name):
    # Define the filenames to be created
    filenames = [
        f"{folder_name}_index.html",
        f"{folder_name}_style.css",
        f"{folder_name}_script.js"
    ]
    
    # Create each file
    for filename in filenames:
        file_path = os.path.join(folder_name, filename)
        with open(file_path, 'w') as file:
            # Optionally, you can write some initial content into the files
            if filename.endswith(".html"):
                file.write("<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>")
            elif filename.endswith(".css"):
                file.write("/* Add your CSS styles here */")
            elif filename.endswith(".js"):
                file.write("// Add your JavaScript code here")

        print(f"File '{filename}' created.")

def main():
    # Generate the folder name
    folder_name = create_folder_name_with_date()
    
    print(f"Today's date as a folder name: {folder_name}")
    
    # Create the folder in the current directory
    if not os.path.exists(folder_name):
        os.mkdir(folder_name)
        print(f"Folder '{folder_name}' created.")
    else:
        print(f"Folder '{folder_name}' already exists.")
    
    # Create the specified files within the created folder
    create_files_in_folder(folder_name)

if __name__ == "__main__":
    main()
