function App(){
	const message = ['Hi there !'];
	//return <input type="number" style={{border: '1px solid red'}} min={5}/>
	//return <textarea autoFocus />
	return <h1>{message} {new Date().toLocaleTimeString()}</h1>
}

export default App;