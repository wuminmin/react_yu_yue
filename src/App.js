import React from 'react'
import axios from 'axios'
class App extends React.Component {
  state = {
    c: 'c',
    s: 's'
  }
  componentDidMount() {

    console.log(this.props)
    const search = this.props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    const c = params.get('code'); // bar
    const s = params.get('state'); // bar
    // const c = this.props.location.query.code
    // const s = this.props.location.query.state
    console.log(c, s)
    this.setState(
      {
        c: c,
        s: s
      }
    )
    let self = this;
    axios.get('http://localhost:8000/wow/', {
      params: {
        "code": params.get('code'),
        "state": params.get('state')
      }
    })
      .then(function (response) {
        console.log(response);
        var openid = response.openid;
        self.setState({
          s: openid
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    // fetch(`http://127.0.0.1:8000/wow_login`)
    //   .then((user) => {
    //     this.setState(() => ({ user }))
    //   })
  }
  render() {
    return (
      <div>
        <h1>test</h1>
        <h1>{this.state.c}</h1>
        <h1>{this.state.s}</h1>
      </div>
    )
  }
}
export default App