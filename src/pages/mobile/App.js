import React, {useEffect, createContext, useReducer, useContext} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from 'react-router-dom'

// import './app.css'

import Content from './Content'
import UploadPropertyGeneral from './UploadPropertyGeneral'
import UploadPropertyBrokers from './UploadPropertyBrokers'
import UploadEvents from './UploadEvents'
import PropertiesDetails from './PropertiesDetails'
import GeneralPropertiesDetails from './GeneralPropertiesDetails'
import EventDetails from './EventDetails'
import DevelopersHub from './DevelopersHub'
import Feeds from './Feeds'
import Users from './Users'
import UsersDetails from './UsersDetails'
import SignIn from './SignIn'
import {reducer, initialState} from './../../reducers/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state, dispatch} = useContext(UserContext)
  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"))
    if(admin){
      dispatch({type: "USER", payload: admin})
      // history.push('/upload-brokers-property')
    } else{
      // history.push('/')
    }
  }, [history, dispatch])
  
  return(
    <Switch>
      <Route exact path='/' component={SignIn} />
      <Route exact path='/home' component={Content} />
      <Route exact path='/upload-general-property' component={UploadPropertyGeneral} />
      <Route exact path='/upload-brokers-property' component={UploadPropertyBrokers} />
      <Route path='/upload-events' component={UploadEvents} />
      <Route path='/general-properties-details/:propertyId' component={GeneralPropertiesDetails} />
      <Route path='/properties-details/:propertyId' component={PropertiesDetails} />
      <Route path='/event-details/:eventId' component={EventDetails} />
      <Route path='/developers-hub' component={DevelopersHub} />
      <Route path='/feeds' component={Feeds} />
      <Route path='/users' component={Users} />
      <Route path='/users-details/:userId' component={UsersDetails} />
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <UserContext.Provider value={{state, dispatch}}>
        <Router>
          <Routing />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
