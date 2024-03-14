export async function doSignUp(firstName, lastName, username, email, password) {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first: firstName, last: lastName, login: username, email, password })
      });
  
      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        const data = await response.json();
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error(error);
      return { success: false, error: 'An error occurred' };
    }
  }
  