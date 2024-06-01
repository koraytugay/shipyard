const url = 'https://sonatype.sonatype.app/platform/api/v2/applications/bnr-ami-cleaner/reports/02ab7330f64a45cdaa8baf9251feb7af/policy';

const username = localStorage.getItem('username');
const password = localStorage.getItem('password');

console.log(username);
console.log(password);

const headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

fetch(url, { method: 'GET', headers: headers })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Process the JSON data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
