const authApi = {
  baseUrl: 'https://mesto-15.nomoredomains.rocks',
  // baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  }
}

class Auth {
  constructor({ authApi }) {
    this._baseUrl = authApi.baseUrl;
    this._headers = authApi.headers;
    console.log(authApi.baseUrl);
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  signUp({ email, password }) {
    return fetch(this._baseUrl + '/signup', {
      method: "POST",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
      .then(res => this._getResponse(res))
  }

  signIn({ email, password }) {
    return fetch(this._baseUrl + '/signin', {
      method: "POST",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
      .then(res => this._getResponse(res))
  }

  signOut() {    
    return fetch(this._baseUrl + '/signout', {
      method: 'POST',
      credentials: 'include'
      })
    }

}

const auth = new Auth({ authApi });

export default auth;