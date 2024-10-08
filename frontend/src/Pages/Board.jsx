import Card from '../components/homepage_components/Card.jsx'
import AddTask from '../components/homepage_components/AddTask.jsx'
import Search from '../components/homepage_components/Search.jsx'
import '../components/homepage_components/index.css'

function App() {

  return (
    <>
      <div>
          <h1 className="main-heading">Welcome back</h1>
      </div>
      <Search/>
      <div className="projects-div">
          <div className="column-div">
              <h2 className="column-name">
                  To do
              </h2>
              <Card/>
              <Card title="kava.ua - коригування посилань" text="Kava"/>
              
              <AddTask/>
              
          </div>
          <div className="column-div">
              <h2 className="column-name">
                  In progress
              </h2>
              
              <Card/>
              <Card/>
              <Card/>
              <AddTask/>
          </div>
          <div className="column-div">
              <h2 className="column-name">
                  Ready to test
              </h2>
              <Card/>
          </div>
          <div className="column-div">
              <h2 className="column-name">
                  Blocked
              </h2>
              <Card/>
          </div>
          <div className="column-div">
              <h2 className="column-name">
                  Done
              </h2>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </div>
      </div>
    </>
  )
}

export default App
