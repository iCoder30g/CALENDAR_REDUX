import store from './store/store';
import { Provider } from 'react-redux';
import Calendar from './component/calendar/Calendar';
import "./App.css"






function App(){
  return (
    <Provider store={store}>
   <Calendar />
   </Provider>
  )
}

export default App;