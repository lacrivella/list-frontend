let token = null;
export const setToken = newToken => {
  token = newToken;
};

export const postHabit = (habit, description) => {
  console.log(habit, description)
  return fetch(`${process.env.API_URL}/api/v1/habits`, {
    method: 'POST',
    body: JSON.stringify({ habit, description }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => {
      if(!res.ok) throw 'Could not get a habit';

      return res.json();
    });
};
