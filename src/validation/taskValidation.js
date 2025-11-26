export function validateTaskData(data) {
  const errors = [];

  if (!data.title || typeof data.title !== "string" || data.title.trim() === "") {
    errors.push("Title is required and must be a non-empty string.");
  }

  if (!data.description || typeof data.description !== "string" || data.description.trim() === "") {
    errors.push("Description is required and must be a non-empty string.");
  }


  if (data.status !== undefined && data.status !== null) {
      if (typeof data.status !== "string" || !["pending", "completed"].includes(data.status.toLowerCase())) {
          errors.push("Status must be one of 'pending' or 'completed'.");
      }
  }

  if (errors.length > 0) {
    return {
      isValid: false,
      status: 400, 
      errors: errors
    };
  }

  return { isValid: true };
}