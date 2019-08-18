import React from 'react'
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
    // fetch(`https://api.twitter.com/user/${handle}`)
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