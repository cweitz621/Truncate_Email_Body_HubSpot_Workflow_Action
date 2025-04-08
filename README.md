# HubSpot Email Body Truncation Workflow Action

A simple HubSpot workflow action that takes in a recently logged email, truncates the text, and saves it into a task or custom property. 

## Use Case

### Syncing one email to multiple contacts in Salesforce

In the native SF integration, HubSpot will only sync the logged email to one of the sent to contacts. If we want it logged to all sent to records in Salesforce, you can create a task or property and send it over that way. 

The problem then becomes HubSpot's character limits. Because emails tend to thread and become bloated with characters, creating a task or updating a property will error out. Thats where truncating of the body comes into play.

## Features

- Truncates email body content to 31,999 characters
- Preserves the original email content up to the limit
- Logs original and truncated lengths for debugging

## Setup

1. In your HubSpot account, navigate to Automation > Workflows
2. Create a new workflow or edit an existing one
3. Set your enrollment to "Last Contacted" -> "is known"
4. Add a custom code action
5. Select Node
6. Add in the Most Recent Logged Email dataset (video directions below)

https://github.com/user-attachments/assets/e91116a3-6b19-4dc9-b183-3e3a42cd54ff

<img width="1088" alt="image" src="https://github.com/user-attachments/assets/3517a1f3-dd61-410c-b1be-d9fe6da930f8" />

6. Copy and paste the contents of `Truncate_text_workflow_action.js` into the code editor
7. Add "truncatedEmailBody" as an output field

<img width="458" alt="image" src="https://github.com/user-attachments/assets/5f4de627-b190-450d-8819-fa1aca7eebd4" />

8. Use the "Action Outputs" dataset and add the "truncateEmailBody" into the task body.

<img width="965" alt="image" src="https://github.com/user-attachments/assets/a2ee4815-b7e3-4b02-ba51-16fe3dfde7d9" />

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
