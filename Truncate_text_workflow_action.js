exports.main = async (event, callback) => {
    try {
      // Access the hs_email_html property value from the event object
      let emailBody = event.inputFields["hs_email_html"];
  
      // Log the length of the input for debugging
      console.log("Original length of email body: ", emailBody.length);
  
      // Check and truncate the email body if it exceeds 31,999 characters
      if (emailBody.length > 31999) {
        emailBody = emailBody.substring(0, 31999);
      }
  
      // Log the length of the truncated output
      console.log("Truncated length of email body: ", emailBody.length);
  
      // Return the truncated email body
      callback({
        outputFields: {
          truncatedEmailBody: emailBody,
        },
      });
    } catch (error) {
      console.error("Error truncating email body:", error);
      callback({
        outputFields: {
          truncatedEmailBody: "",
        },
        errorMessage: "An error occurred while truncating the email body.",
      });
    }
  };